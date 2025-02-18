<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Food Items</h2>

    <!-- Food Grid -->
    <div v-if="paginatedItems.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in paginatedItems" :key="item.idMeal" @click="openModal(item.idMeal)" class="bg-white shadow-md p-4 rounded-lg">
        <img :src="item.strMealThumb" alt="Food Image" class="w-full h-40 object-cover rounded-md" />
        <h2 class="text-lg font-bold mt-2">{{ item.strMeal }}</h2>
        <p class="text-gray-500">🌟 {{ getRandomRating() }}/5</p>
      </div>
    </div>
    <p v-else class="text-center text-gray-500 mt-4">No meals found for this area.</p>

    <!-- Pagination Controls -->
    <div v-if="foodItems.length > itemsPerPage" class="flex justify-center items-center mt-4 space-x-2">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      <span class="px-4 py-2 border rounded-md">{{ currentPage }} / {{ totalPages }}</span>

      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <!-- Modal Component -->
    <FoodItemModal 
      :isOpen="isModalOpen" 
      :foodItem="selectedFoodItem" 
      @close-modal="isModalOpen = false"
    />
  </div>
</template>

<script>
import FoodItemModal from "./FoodItemModal.vue";

export default {
  components: { FoodItemModal },
  props: ["foodItems"], // ✅ Receives updated food items dynamically
  data() {
    return {
      isModalOpen: false,
      currentPage: 1,
      itemsPerPage: 6, // ✅ Show 6 items per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.foodItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.foodItems.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    async openModal(mealId) {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        this.selectedFoodItem = data.meals[0] || {};
        this.isModalOpen = true;
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    },
    getRandomRating() {
      return (Math.random() * (5 - 3) + 3).toFixed(1); // Random ratings between 3.0 and 5.0
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  watch: {
    // Reset to page 1 when foodItems update
    foodItems() {
      this.currentPage = 1;
    },
  },
};
</script>
