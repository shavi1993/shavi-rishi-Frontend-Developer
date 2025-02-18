<template>
  <header class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <img :src="logo" alt="Swiggy Logo" class="h-8">
    </div>

    <!-- Search Bar -->
    <div class="relative w-1/3 max-w-lg">
      <input
        type="text"
        placeholder="Search for restaurant and food"
        class="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        disabled
      />
      <span class="absolute right-4 top-2 text-gray-400">
        🔍
      </span>
    </div>
  </header>
</template>

<script>
import logo from '../assets/swiggy.png';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      // Store the logo path in a data property
      logo: logo,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
