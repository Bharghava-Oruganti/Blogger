from rest_framework import routers
from .api import *

router = routers.DefaultRouter()

router.register('api/blogs',BlogViewSet,'blogs')

urlpatterns = router.urls