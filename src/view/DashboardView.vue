<template>
  <div class="flex">
    <div class="w-1/4 bg-gray-200">
      <!-- Contenido del sidebar -->
    </div>

    <div class="w-3/4 p-4">
      <div class="grid grid-cols-4 gap-4">
        <div class="bg-gray-100 p-4">
          <h3 class="text-lg font-semibold mb-4">Pendientes</h3>
          <TaskCard v-for="task in pendingTasks" :key="task.id" :task="task" />
        </div>
        <div class="bg-gray-200 p-4">
          <h3 class="text-lg font-semibold mb-4">En Proceso</h3>
          <TaskCard v-for="task in inProgressTasks" :key="task.id" :task="task" />
        </div>
        <div class="bg-gray-300 p-4">
          <h3 class="text-lg font-semibold mb-4">Completadas</h3>
          <TaskCard v-for="task in completedTasks" :key="task.id" :task="task" />
        </div>
        <div class="bg-gray-400 p-4">
          <h3 class="text-lg font-semibold mb-4">Pendientes de Revisión</h3>
          <TaskCard v-for="task in reviewTasks" :key="task.id" :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations  } from 'vuex';
import TaskCard from "../common/TaskCard.vue"

export default {
  components: {
    TaskCard
    },
  computed: {
    ...mapState('taskModules', [
      'pendingTasks',
      'inProgressTasks',
      'completedTasks',
      'reviewTasks'
    ]) 
  },
  methods: {
    ...mapActions('taskModules', ['fetchTasksByStatus']),
    ...mapMutations('taskModules', ['setTasksByStatus']) 
  },
  async mounted() {
    try {
      await this.fetchTasksByStatus('pending');
      await this.fetchTasksByStatus('inProgress');
      await this.fetchTasksByStatus('completed');
      await this.fetchTasksByStatus('review');
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  }
};
</script>