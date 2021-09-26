from rest_framework import routers
from .api import TrabajadorViewSet

router = routers.DefaultRouter()
router.register('api/trabajador', TrabajadorViewSet, 'trabajador')

urlpatterns = router.urls
