<template>
  <div class="dash-boards">
    <DashBoard title="Loterry" number="20" />
    <DashBoard title="Tickets" number="2300" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dash-boards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
}
</style>