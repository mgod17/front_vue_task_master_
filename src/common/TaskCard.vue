<template>
  <div class="bg-white shadow-md p-4 rounded-md">
    <template v-for="taskItem in task" :key="taskItem.id">
      <div class="bg-white shadow-md p-4 rounded-md">
        <h3 class="text-lg font-semibold mb-2">{{ taskItem.title }}</h3>
        <p>{{ taskItem.description }}</p>
        <p>Asignada a: {{ taskItem.assigned_to }}</p>
      </div>
    </template>
  </div>
</template>


<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log("Tasks in TaskCard:", this.task);
  }
};
</script>

<style scoped>

</style>