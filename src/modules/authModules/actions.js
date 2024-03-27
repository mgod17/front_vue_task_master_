import axios from 'axios';
import router from '../../router.js';

export default {
  async login({ commit }, credentials) {
    try {
      const { email, password } = credentials;
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        commit('setToken', token);
        router.push('/dashboard');
      } else {
        throw new Error('Token de autenticación no recibido en la respuesta');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error; 
    }
  },
  logout({ commit }) {
    commit('clearToken');
  }
};