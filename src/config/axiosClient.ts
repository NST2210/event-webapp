import axios from 'axios';

// Tạo instance của Axios với các cấu hình mặc định
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Đảm bảo rằng bạn đã cấu hình đúng URL API trong file .env
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000, // Thời gian timeout cho yêu cầu API (ms)
});

// Cấu hình Interceptor để thêm token vào header nếu có
axiosClient.interceptors.request.use((config) => {
  debugger
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Cấu hình Interceptor để xử lý lỗi
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error);
    return Promise.reject(error); // Trả về lỗi để xử lý tại nơi gọi API
  },
);

export default axiosClient;
