<template>
  <div class="full-screen-container">
    <picture>
      <source
        media="(max-width: 768px)"
        srcset="/images/homeImageGrayCropped.png"
      />
      <img class="main-image" src="/images/homeImageGray.png" alt="Dining Scene" />
    </picture>
  </div>
</template>

<style scoped>
/* Full-Screen Container */
.full-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  margin: 0;
  padding: 0;
  height: calc(100vh - 60px);
  overflow: hidden;
}

/* Image Styling */
picture {
  width: 100%;
  height: 100%;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
}
</style>
