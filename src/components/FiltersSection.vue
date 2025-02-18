<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <!-- Title -->
    <h2 class="text-lg font-semibold mb-3">
      Restaurants with online food delivery in Pune
    </h2>

    <!-- Filters List -->
    <div class="flex flex-wrap gap-3">
      <!-- Filter Dropdown -->
      <div class="relative">
        <button
          @click="toggleDropdown('filter')"
          class="filter-btn flex items-center gap-2"
        >
          Filter <span>⚙️</span>
        </button>
        <div v-if="activeDropdown === 'filter'" class="dropdown-menu">
          <h3 class="font-semibold mb-2">Filter By Area</h3>
          <div v-for="area in areas" :key="area.strArea" class="flex items-center gap-2">
            <input
              type="radio"
              :value="area.strArea"
              v-model="selectedArea"
            />
            <label>{{ area.strArea }}</label>
          </div>
          <button @click="applyFilter" class="apply-btn">Apply</button>
        </div>
      </div>

      <!-- Sort Dropdown -->
      <div class="relative">
        <button
          @click="toggleDropdown('sort')"
          class="filter-btn flex items-center gap-2"
        >
          Sort By <span>🔽</span>
        </button>
        <div v-if="activeDropdown === 'sort'" class="dropdown-menu">
          <button @click="sortFoodItems('asc')" class="apply-btn">A-Z</button>
          <button @click="sortFoodItems('desc')" class="apply-btn">Z-A</button>
        </div>
      </div>

      <!-- Other Filters -->
      <button class="filter-btn">Fast Delivery</button>
      <button class="filter-btn">New on Swiggy</button>
      <button class="filter-btn">Ratings 4.0+</button>
      <button class="filter-btn">Pure Veg</button>
      <button class="filter-btn">Offers</button>
      <button class="filter-btn">Rs. 300–Rs. 600</button>
      <button class="filter-btn">Less than Rs. 300</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDropdown: null,
      areas: [],
      selectedArea: "",
      foodItems: [],    
      filteredFoodItems: [],
    };
  },
  mounted() {
    this.fetchAreas();
  },
  methods: {
    toggleDropdown(type) {
      this.activeDropdown = this.activeDropdown === type ? null : type;
    },
    async fetchAreas() {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        const data = await response.json();
        this.areas = data.meals || [];
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    },
    applyFilter() {
      console.log("Filtering by:", this.selectedArea);
      this.activeDropdown = null;
      // Emit event to parent to filter food items based on selected area
      this.$emit("filterByArea", this.selectedArea);
    },
    sortFoodItems(order) {
      
      this.activeDropdown = null;
      this.$emit("sortItems", order);
    },
    

  },
};
</script>

<style scoped>
/* Tailwind Classes */
.filter-btn {
  @apply px-4 py-2 text-gray-700 bg-gray-100 rounded-full text-sm shadow-sm;
}

.filter-btn:hover {
  @apply bg-gray-200;
}

.dropdown-menu {
  @apply absolute mt-2 p-3 bg-white border rounded-lg shadow-md w-48;
}

.apply-btn {
  @apply mt-2 px-4 py-1 bg-blue-500 text-white rounded-md w-full;
}

.apply-btn:hover {
  @apply bg-blue-600;
}
</style>
