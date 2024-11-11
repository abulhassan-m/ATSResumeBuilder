import axios from 'axios';

// Use an environment variable to set the base URL
const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000/api'
});

export const createProfile = async (profileData) => {
    return await api.post('/profiles/', profileData);
};

export const getProfiles = async () => {
    return await api.get('/profiles/');
};

export const generateResume = async (resumeData) => {
    try {
        const response = await api.post('/generate-resume/', resumeData);
        return response.data;
    } catch (error) {
        console.error("Error generating resume:", error);
        throw error;
    }
};