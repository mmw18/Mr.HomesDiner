<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Menu</h1>
        </v-col>
      </v-row>
      <v-row>
        <!-- Main Meal Section -->
        <ExpandableSection
          key="main-meal-section"
          title="Main Meal"
          :items="mainMeals"
          :cart="cart"
          @addToCart="addToCart"
        />
  
        <!-- Side Section -->
        <ExpandableSection
          key="side-section"
          title="Side"
          :items="sides"
          :cart="cart"
          @addToCart="addToCart"
        />
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "@/firebase";
  import ExpandableSection from "@/components/ExpandableSection.vue";
  
  export default {
    components: {
      ExpandableSection,
    },
    data() {
      return {
        recipes: [],   // Full list of recipes from Firestore
        mainMeals: [], // Filtered recipes for main meals
        sides: [],     // Filtered recipes for sides
        cart: [],      // Current items in the cart
      };
    },
    methods: {
      async fetchRecipes() {
        try {
          const querySnapshot = await getDocs(collection(db, "recipes"));
          const recipes = [];
          querySnapshot.forEach((doc) => {
            recipes.push({ id: doc.id, ...doc.data() });
          });
  
          this.recipes = recipes;
  
          // Filter recipes by type
          this.mainMeals = recipes.filter((recipe) => recipe.type === "Main Meal");
          this.sides = recipes.filter((recipe) => recipe.type === "Side");
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      },
      addToCart(recipe) {
        const index = this.cart.findIndex((item) => item.id === recipe.id);
        if (index === -1) {
          this.cart.push(recipe); // Add to cart
        } else {
          this.cart.splice(index, 1); // Remove from cart if already added
        }
      },
    },
    mounted() {
      this.fetchRecipes();
    },
  };
  </script>
  