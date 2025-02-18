<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl">
        &times;
      </button>
      <img :src="foodItem.strMealThumb" alt="Food Image" class="w-full h-48 object-cover rounded-md" />
      <h2 class="text-2xl font-bold mt-4">{{ foodItem.strMeal }}</h2>
      <p class="text-gray-600"><strong>Category:</strong> {{ foodItem.strCategory }}</p>
      <p class="text-gray-600"><strong>Area:</strong> {{ foodItem.strArea }}</p>
      <a :href="foodItem.strYoutube" target="_blank" class="mt-4 block text-blue-500 hover:underline">
        Watch Recipe Video
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    foodItem: Object,
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
