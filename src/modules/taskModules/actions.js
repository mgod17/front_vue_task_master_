import axios from 'axios';

export default { 
  async fetchTasksByStatus({ commit, state }, status) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/api/tasks?status=${status}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      commit('setTasksByStatus', { tasks: response.data, status });
      console.log(state.pendingTasks)
    } catch (error) {
      console.error('Error al obtener las tareas por estado:', error);
      throw error;
    }
  }
};