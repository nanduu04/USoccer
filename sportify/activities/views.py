from django.shortcuts import render

# activities/views.py
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Activity
from .serializers import ActivitySerializer, UserSerializer
from .notifications import send_notification

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class JoinActivityView(APIView):
    def post(self, request, id, *args, **kwargs):
        activity = Activity.objects.get(id=id)
        user = request.user
        activity.participants.add(user)
        return Response({"message": "Joined activity"}, status=status.HTTP_200_OK)

class LeaveActivityView(APIView):
    def post(self, request, id, *args, **kwargs):
        activity = Activity.objects.get(id=id)
        user = request.user
        activity.participants.remove(user)
        return Response({"message": "Left activity"}, status=status.HTTP_200_OK)

class SearchActivitiesView(APIView):
    def get(self, request, *args, **kwargs):
        # Implement location-based search logic here
        return Response({"message": "Search results"}, status=status.HTTP_200_OK)

class SendNotificationView(APIView):
    def post(self, request, *args, **kwargs):
        title = request.data.get('title')
        message = request.data.get('message')
        registration_ids = request.data.get('registration_ids')
        send_notification(title, message, registration_ids)
        return Response({"message": "Notification sent"}, status=status.HTTP_200_OK)

