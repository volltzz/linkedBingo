<template>
  <div class="system">
    <SideBar />
    <Container>
      <Nuxt />
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.system {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 2rem;
  height: 100vh;
}
</style>