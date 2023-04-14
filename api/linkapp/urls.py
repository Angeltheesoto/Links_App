from django.urls import include, path
from rest_framework import routers
from . import views
from knox import views as knox_views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'education', views.EducationViewSet)
router.register(r'work', views.WorkViewSet)
router.register(r'portfolio', views.PortfolioViewSet)
router.register(r'posts', views.PostViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api/register/', views.RegisterAPI.as_view()),
    path('api/login/', views.LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('posts/<str:username>/', views.PostViewSet.as_view({'get': 'by_user'}), name='user_posts'),
]