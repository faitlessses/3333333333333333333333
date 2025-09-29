from rest_framework import viewsets
from .models import Resident
from .serializers import ResidentSerializer

class ResidentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows residents to be viewed or edited.
    """
    queryset = Resident.objects.all().order_by('-created_at')
    serializer_class = ResidentSerializer