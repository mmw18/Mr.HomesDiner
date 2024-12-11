<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title @click="goHome" class="clickable">
        Mr. Home's Diner
      </v-toolbar-title>
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
