
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import get_object_or_404
from rest_framework import permissions, viewsets, generics, status
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.models import AuthToken
from knox.views import LoginView as knoxLoginView

from .models import Portfolio, Post, ProfileImage
from .serializers import PortfolioSerializer, UserSerializer, RegisterSerializer, PostSerializer, ProfileImageSerializer

from rest_framework.views import APIView

# Users API
"""
API endpoint that allows users to be viewed or edited.
"""
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def username_exists(self, request, username):
        user_exists = User.objects.filter(username=username).exists()
        return Response({'exists': user_exists})

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login User API
class LoginAPI(knoxLoginView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        print('LoginAPI post method called')
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)

# users links
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # When you create a post it assigns it to you.
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    # Deletes post if you are the user who created it.
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.author != request.user:
            return Response({"message": "You are not allowed to delete this post"}, status=status.HTTP_403_FORBIDDEN)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    # Updates post if you are the user who created it.
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        if instance.author != request.user:
            return Response({"message": "You are not allowed to update this post"}, status=status.HTTP_403_FORBIDDEN)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

# filters users links
class UserPostViewSet(PostViewSet):
    def get_queryset(self):
        username = self.kwargs['username']
        user = get_object_or_404(User, username=username)
        queryset = Post.objects.filter(author=user)
        return queryset

# This is for practice
class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [permissions.AllowAny]

# profile picture
class ProfileImageViewSet(viewsets.ModelViewSet):
    queryset = ProfileImage.objects.all()
    serializer_class = ProfileImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    def put(self, request, pk, *args, **kwargs):
        profile_image = self.get_object()
        if profile_image.user == request.user:
            profile_image.profile_picture.delete()
            profile_image.profile_picture = request.FILES['profile_picture']
            profile_image.save()
            serializer = self.get_serializer(profile_image)
            return Response(serializer.data)
        else:
            return Response({"error": "You are not authorized to update this profile image."}, status=status.HTTP_403_FORBIDDEN)

class ProfileImageDetailView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, pk):
        try:
            profile_image = ProfileImage.objects.get(pk=pk)
            image_path = profile_image.image.path
            with open(image_path, 'rb') as f:
                response = HttpResponse(f.read(), content_type='image/jpeg')
            return response
        except ProfileImage.DoesNotExist:
            return HttpResponseNotFound()