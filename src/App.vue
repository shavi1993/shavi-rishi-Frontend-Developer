<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
      <!-- Filters Section -->
      <FiltersSection @filterByArea="fetchMealsByArea" @sortItems="sortFoodItems" />
      <FoodItemsSection :foodItems="filteredFoodItems" :sortOrder="sortOrder" />
      <FooterComponent />
   
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FiltersSection from "./components/FiltersSection.vue";
import FoodItemsSection from "./components/FoodItemsSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FiltersSection,
    FoodItemsSection,
    FooterComponent
  },
  data() {
    return {
      foodItems: [], // Initialize foodItems as an empty array
      filteredFoodItems: [],
      sortOrder: "asc",
    };
  },
  async mounted() {
    await this.fetchMealsByArea("Indian"); // Load default food items
  },
  methods: {
    
   async fetchMealsByArea(area) {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const data = await response.json();
        
        if (data.meals) {
          this.foodItems = data.meals; // Store all meals
          this.filteredFoodItems = [...this.foodItems]; // Apply filter initially
        } else {
          this.foodItems = [];
          this.filteredFoodItems = [];
        }
        
        console.log("Filtered Data:", this.filteredFoodItems);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    },
    filterFoodByArea(area) {
      if (!this.foodItems || this.foodItems.length === 0) {
        console.warn("No food items available for filtering.");
        return;
      }
      this.filteredFoodItems = this.foodItems.filter(item => item.strArea === area);
      console.log("Filtered Data:", this.filteredFoodItems);
    },

    sortFoodItems(order) {
      this.sortOrder = order; // Store sorting order
        if (!this.filteredFoodItems || this.filteredFoodItems.length === 0) {
         return;
       }

    this.filteredFoodItems = [...this.filteredFoodItems].sort((a, b) => {
      return order === "asc"
        ? a.strMeal.localeCompare(b.strMeal)
        : b.strMeal.localeCompare(a.strMeal);
    });
    },
  },
};

</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
}
</style>
