<template>
  <v-app>
    <!-- Header Section -->
    <header class="custom-header">
      <!-- Title -->
      <h1 @click="goHome" class="diner-title">Mr. Home's Diner</h1>

      <!-- Desktop Navigation -->
      <nav v-if="!isMobile" class="nav-links">
        <v-btn text @click="goToMenu">Start an Order</v-btn>
        <v-btn text @click="reviewOrders">Review Past Orders</v-btn>
        <v-btn text @click="goToCart">
          <v-icon>mdi-cart</v-icon> Cart
        </v-btn>
      </nav>

      <!-- Hamburger Menu for Mobile -->
      <v-menu v-else v-model="menuOpen" :close-on-content-click="true" transition="scale-transition" offset-y>
        <!-- Activator (Button to open the menu) -->
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <!-- Menu Content -->
        <v-list>
          <v-list-item @click="goToMenu">
            <v-list-item-title>Start an Order</v-list-item-title>
          </v-list-item>
          <v-list-item @click="reviewOrders">
            <v-list-item-title>Review Past Orders</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToCart">
            <v-list-item-title>Cart</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </header>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false, // Track if the screen is mobile
      menuOpen: false, // Track if the hamburger menu is open
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goToMenu() {
      this.$router.push("/start-order");
    },
    reviewOrders() {
      this.$router.push("/past-orders");
    },
    goToCart() {
      this.$router.push("/cart");
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    },
  },
  mounted() {
    this.updateScreenSize(); // Initialize screen size on mount
    window.addEventListener("resize", this.updateScreenSize); // Listen for resize events
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenSize); // Clean up event listener
  },
};
</script>

<style scoped>
/* Header Styling */
.custom-header {
  background-color: #1c253c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  /* Fixed header height */
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Adjust Title Styling for Mobile */
.diner-title {
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  /* Adjust font size */
  color: white;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

/* Navigation Links for Desktop */
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.v-btn {
  text-transform: none;
  font-size: 1rem;
  color: #1c253c;
}

/* Hamburger Menu Styling */
.hamburger-menu {
  color: #1c253c;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .diner-title {
    font-size: 1.5rem;
    /* Reduce font size for mobile */
  }

  .custom-header {
    padding: 0 15px;
    /* Adjust padding for smaller screens */
  }
}
</style>
