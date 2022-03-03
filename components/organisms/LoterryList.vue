<template>
  <div>
    <LoterryFilter />
    <div class="grid-card">
      <FilteredLoterry
        v-for="lottery in $allLotteries.draws"
        :key="lottery.draw_id"
        :loterryID="lottery.draw_id"
        :lottery="lottery.draw_id"
        :to="to"
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
   props: {
    to:{
      Type: String,
      require: true,
    },
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