import axiosClient from '../config/axiosClient';

export const eventService = {
  getAllEvents: (params?: { page?: number; size?: number }) => axiosClient.get('/identifier/get-home-info', { params }), // Gọi endpoint "/events"
};
