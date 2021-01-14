<template>
  <div id="app">
    
    <main>
      <router-view />
    </main>

  </div>
</template>

<script>
/*import NavBar from "@/components/global/Navbar.vue";
import PiePagina from "@/components/global/Footer.vue"; */

export default {
  name: "App",
  
  components: {
    // NavBar,
    // PiePagina,
  },

  data: () => ({
    
  }),

  beforeMount() {
    
  },

  methods:{
    
  }

};
</script>