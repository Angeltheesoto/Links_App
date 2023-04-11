from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, EducationSerializer, WorkSerializer, PortfolioSerializer
from .models import Education, Work, Portfolio
from django.contrib.auth.models import User
from django.http import JsonResponse

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def delete(self, request, id=None):
        data = User.objects.filter(id=id)
        data.delete()

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [permissions.AllowAny]

    # !CREATE - WORKING
    def create_education(request):
        if request.method == 'POST':
            serializer = EducationSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    # !UPDATE - WORKING
    def update_education(request, id):
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return JsonResponse({'error': 'Education not found'}, status=404)
        if request.method == 'PUT':
            serializer = EducationSerializer(education, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=400)
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    # !DELETE - WORKING
    def delete_education(request, id):
        try:
            education = Education.objects.get(id=id)
            education.delete()
            return JsonResponse({'message': 'Education with id {} deleted successfully.'.format(id)})
        except Education.DoesNotExist:
            return HttpResponse(status=404)

class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [permissions.AllowAny]

    def delete(self, request, id=None):
        data = Work.objects.filter(id=id)
        data.delete()

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [permissions.AllowAny]

    def delete(self, request, id=None):
        data = Portfolio.objects.filter(id=id)
        data.delete()