import axios from "axios";

// Crie uma instância do Axios para ser usada em suas requisições
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // Importante para enviar cookies `HttpOnly`
});

// Função para obter um novo access token usando o refresh token
const refreshAccessToken = async () => {
  try {
    // Supondo que seu endpoint de refresh esteja em '/refresh'
    await api.post("/auth/refresh");
    return true;
  } catch (error) {
    console.error("Erro ao atualizar o token:", error);
    return null;
  }
};

// Adicione um interceptador de resposta para lidar com erros 401 (não autorizado)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Se um erro 401 for recebido, tente renovar o token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
