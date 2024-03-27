<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ¿Olvidaste tu contraseña?
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            No te preocupes. Ingresa tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="forgotPassword">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Dirección de correo electrónico</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Dirección de correo electrónico">
            </div>
          </div>
  
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Enviar enlace de restablecimiento
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      forgotPassword() {
        const email = this.$refs.email.value;
        // Aquí puedes enviar la solicitud de restablecimiento de contraseña
        console.log('Se enviará un enlace de restablecimiento de contraseña al correo electrónico:', email);
      }
    }
  }
  </script>