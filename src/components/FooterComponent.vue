<template>
    <footer class="bg-black text-white py-6 px-10">
    <div class="flex flex-col items-start">
    <img :src="logo" alt="Swiggy Logo" class="h-8 mb-2" />
    <p class="text-gray-400 text-sm">© 2023 Bundl Technologies Pvt. Ltd</p>
    </div>
  </footer>
</template>


<script>
import logo from '../assets/swiggy.png';

export default {
  data() {
    return {
       logo: logo,
    };
  },
  
 
};
</script>
