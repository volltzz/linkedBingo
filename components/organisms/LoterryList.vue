<template>
  <div>
    <LoterryFilter />
    <div class="grid-card">
      <FilteredLoterry loterryID="33" loterryPrice="2" to="/issueTickets" />
      <FilteredLoterry loterryID="55" loterryPrice="50" to="/ticketValidation" />
      <FilteredLoterry loterryID="122" loterryPrice="44" to="/" />
      <FilteredLoterry loterryID="67" loterryPrice="99" to="/" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-card {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>