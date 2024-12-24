<template>
    <v-card>
      <v-card-title>{{ recipe.name }}</v-card-title>
      <v-card-actions>
        <v-btn
          :color="inCart ? 'success' : 'primary'"
          @click="$emit('addToCart', recipe)"
        >
          {{ inCart ? "In Cart" : "Add" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      recipe: Object,
      inCart: Boolean,
    },
  };
  </script>
  