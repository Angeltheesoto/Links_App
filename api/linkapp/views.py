
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import get_object_or_404
from rest_framework import permissions, viewsets, generics, status
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.models import AuthToken
from knox.views import LoginView as knoxLoginView

from .models import Post, ProfileImage
from .serializers import UserSerializer, RegisterSerializer, PostSerializer, ProfileImageSerializer

from rest_framework.views import APIView

from django.core.files.base import ContentFile
from django.conf import settings
import os

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

    def create_default_profile_image(self, user):
        default_image_path = os.path.join(settings.MEDIA_ROOT,'profile_picture', 'default_profile.png')
        with open(default_image_path, 'rb') as f:
            default_image = ContentFile(f.read())

        profile_image = ProfileImage(author=user)
        profile_image.image.save('default_profile.png', default_image, save=True)
        return profile_image

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Create default profile image
        self.create_default_profile_image(user)

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

# filters users links by username
class UserPostViewSet(PostViewSet):
    def get_queryset(self):
        username = self.kwargs['username']
        user = get_object_or_404(User, username=username)
        queryset = Post.objects.filter(author=user)
        return queryset

# CRUD - profile pictures
class ProfileImageViewSet(viewsets.ModelViewSet):
    queryset = ProfileImage.objects.all()
    serializer_class = ProfileImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def perform_update(self, serializer):
        profile_image = serializer.instance
        profile_picture = profile_image.image
        if profile_picture:
            # delete old profile picture if it's not the default one
            if not os.path.basename(profile_picture.name) == 'default_profile.png':
                profile_picture.delete(save=False)
            # save the new profile picture
            new_profile_picture = self.request.FILES.get('profile_picture')
            if new_profile_picture:
                profile_image.image = new_profile_picture
            serializer.save()

    def put(self, request, pk, *args, **kwargs):
        profile_image = self.get_object()
        if profile_image.author == request.user:
            return self.update(request, *args, **kwargs)
        else:
            return Response({"error": "You are not authorized to update this profile image."}, status=status.HTTP_403_FORBIDDEN)


# gets individual profile picture
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