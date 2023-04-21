from django.urls import include, path
from rest_framework import routers
from . import views
from knox import views as knox_views

router = routers.DefaultRouter()
router.register(r'api-users', views.UserViewSet)
router.register(r'api-education', views.EducationViewSet)
router.register(r'api-work', views.WorkViewSet)
router.register(r'api-portfolio', views.PortfolioViewSet)
router.register(r'api-posts', views.PostViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api/register/', views.RegisterAPI.as_view()),
    path('api/login/', views.LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),

    path('api-posts/<int:pk>/', views.PostViewSet.as_view({'get': 'retrieve'}), name='post-detail'),
    path('api-posts/', views.PostViewSet.as_view({'get': 'list', 'post': 'create'}), name='post-list'),
    path('api-posts/<int:pk>/update/', views.PostViewSet.as_view({'put': 'update'}), name='post-update'),
    path('api-posts/<int:pk>/delete/', views.PostViewSet.as_view({'delete': 'destroy'}), name='post-delete'),
    path('users/posts/<str:username>/', views.UserPostViewSet.as_view({'get': 'list'}), name='user-posts'),

    path('api-users/<str:username>/exists/', views.UserViewSet.as_view({'get': 'username_exists'}))
]

