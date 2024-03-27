export default {
  setTasksByStatus(state, { tasks, status }) {
    switch (status) {
      case 'pending':
        state.pendingTasks = tasks;
        break;
      case 'inProgress':
        state.inProgressTasks = tasks;
        break;
      case 'completed':
        state.completedTasks = tasks;
        break;
      case 'review':
        state.reviewTasks = tasks;
        break;
      default:
        console.error('Estado de tarea desconocido:', status);
    }
  },
}