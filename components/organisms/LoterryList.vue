<template>
  <div>
    <LoterryFilter />
    <div class="grid-card">
      <FilteredLoterry
        v-for="lottery in $allLotteries"
        :key="lottery.draws.id"
        :loterryID="lottery.draws.id"
        to="/issueTickets"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $allLotteries() {
      return this.$store.getters.$allLotteries;
    },
  },
  created() {
    console.log(this.$store.getters.$allLotteries);
  },
};
</script>

<style lang="scss" scoped>
.grid-card {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>