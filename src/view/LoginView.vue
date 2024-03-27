<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión
        </h2>
      </div>
      <LoginForm />
    </div>
  </div>

    
  </template>
  
  <script>
  import LoginForm from "../components/LoginForm.vue";


  export default {
    components: {
      LoginForm
    },
    methods: {
  }
  };
  </script>