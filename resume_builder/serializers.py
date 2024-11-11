from rest_framework import serializers
from .models import Profile, Education, Experience, Skill

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    educations = EducationSerializer(many=True)
    experiences = ExperienceSerializer(many=True)
    skills = SkillSerializer(many=True)

    class Meta:
        model = Profile
        fields = ['id', 'full_name', 'email', 'phone', 'educations', 'experiences', 'skills']
