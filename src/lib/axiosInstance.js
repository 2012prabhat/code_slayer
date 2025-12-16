// src/utils/axiosInstance.js

import axios from 'axios';

// 1. Define the base configuration
const axiosInstance = axios.create({
    // Replace with your actual backend URL (e.g., 'https://api.codeslayer.com/v1')
    baseURL: 'http://localhost:3000/api', 
    timeout: 10000, // Optional: Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': 'Bearer YOUR_DEFAULT_TOKEN' // If you have a default token
    }
});

// --- 2. Optional: Add Request Interceptors (for Auth) ---
axiosInstance.interceptors.request.use(
    (config) => {
        // Retrieve the token from local storage or a state manager
        const token = localStorage.getItem('accessToken'); 
        
        // Add the Authorization header only if a token exists
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// --- 3. Optional: Add Response Interceptors (for Error Handling) ---
axiosInstance.interceptors.response.use(
    (response) => {
        // You can transform the response data here if needed
        return response;
    },
    (error) => {
        // Example: Handle 401 Unauthorized globally
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized request. Redirecting to login...");
            // Optionally: Clear token, redirect to login page
            // localStorage.removeItem('authToken');
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;