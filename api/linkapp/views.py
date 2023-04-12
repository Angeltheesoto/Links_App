# from django.http import HttpResponse
from rest_framework.response import Response
# from rest_framework import status
# from django.http import JsonResponse

from django.contrib.auth.models import User
from django.contrib.auth import login
from rest_framework import permissions, viewsets, generics
from rest_framework.authtoken.serializers import AuthTokenSerializer
# from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from knox.models import AuthToken
from knox.views import LoginView as knoxLoginView

from .models import Education, Portfolio, Work
from .serializers import EducationSerializer, PortfolioSerializer, UserSerializer, WorkSerializer, RegisterSerializer

# Users API
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

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

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [permissions.AllowAny]

class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [permissions.AllowAny]

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [permissions.AllowAny]

# !Keep these here incase ModelViewSet doesnt work
# !CREATE - WORKING
# def create_education(request):
#     if request.method == 'POST':
#         serializer = EducationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
#     return JsonResponse({'error': 'Invalid request method'}, status=405)

# !UPDATE - WORKING
# def update_education(request, id):
#     try:
#         education = Education.objects.get(id=id)
#     except Education.DoesNotExist:
#         return JsonResponse({'error': 'Education not found'}, status=404)
#     if request.method == 'PUT':
#         serializer = EducationSerializer(education, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)
#     return JsonResponse({'error': 'Invalid request method'}, status=405)

# !DELETE - WORKING
# def delete_education(request, id):
#     try:
#         education = Education.objects.get(id=id)
#         education.delete()
#         return JsonResponse({'message': 'Education with id {} deleted successfully.'.format(id)})
#     except Education.DoesNotExist:
#         return HttpResponse(status=404)