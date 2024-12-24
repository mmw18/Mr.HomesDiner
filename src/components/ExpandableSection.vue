<template>
    <v-expansion-panels>
      <!-- Categories -->
      <v-expansion-panel v-for="(category, index) in groupedItems" :key="index">
        <v-expansion-panel-title>{{ category.name }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <!-- Subcategories -->
          <v-expansion-panels>
            <v-expansion-panel v-for="(subcategory, subIndex) in category.subcategories" :key="subIndex">
              <v-expansion-panel-title>{{ subcategory.name }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <!-- Recipes -->
                <v-row>
                  <v-col cols="12" md="6" lg="4" v-for="recipe in subcategory.recipes" :key="recipe.id">
                    <RecipeCard
                      :recipe="recipe"
                      :inCart="isInCart(recipe)"
                      @addToCart="$emit('addToCart', recipe)"
                    />
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  
  <script>
  import RecipeCard from "@/components/RecipeCard.vue";
  
  export default {
    props: {
      title: String,
      items: Array,
      cart: Array,
    },
    components: {
      RecipeCard,
    },
    computed: {
      groupedItems() {
        // Group recipes by category and subcategory
        const categories = this.items.reduce((groups, item) => {
          const category = groups[item.category] || {
            name: item.category,
            subcategories: {},
          };
  
          const subcategory = category.subcategories[item.subcategory] || {
            name: item.subcategory,
            recipes: [],
          };
  
          subcategory.recipes.push(item);
          category.subcategories[item.subcategory] = subcategory;
  
          groups[item.category] = category;
          return groups;
        }, {});
  
        // Convert to array
        return Object.values(categories).map((category) => ({
          ...category,
          subcategories: Object.values(category.subcategories),
        }));
      },
    },
    methods: {
      isInCart(recipe) {
        // Check if the recipe is in the cart
        return this.cart.some((item) => item.id === recipe.id);
      },
    },
  };
  </script>
  