from django.urls import include, path
from rest_framework import routers
from . import views
from knox import views as knox_views

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'api-users', views.UserViewSet)
router.register(r'api-posts', views.PostViewSet)
router.register(r'profile-images', views.ProfileImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/register/', views.RegisterAPI.as_view()),
    path('api/login/', views.LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),

    # posts
    path('api-posts/<int:pk>/', views.PostViewSet.as_view({'get': 'retrieve'}), name='post-detail'),
    path('api-posts/', views.PostViewSet.as_view({'get': 'list', 'post': 'create'}), name='post-list'),
    path('api-posts/<int:pk>/update/', views.PostViewSet.as_view({'put': 'update'}), name='post-update'),
    path('api-posts/<int:pk>/delete/', views.PostViewSet.as_view({'delete': 'destroy'}), name='post-delete'),
    path('users/posts/<str:username>/', views.UserPostViewSet.as_view({'get': 'list'}), name='user-posts'),

    # Checks if user exists
    path('api-users/<str:username>/exists/', views.UserViewSet.as_view({'get': 'username_exists'})),

    # profile images
    path('profile-images/<uuid:pk>/', views.ProfileImageDetailView.as_view(), name='profile_image_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
