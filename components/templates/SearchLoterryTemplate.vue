<template>
  <div class="pt-2">
    <HeaderBar />
    <div class="pt-3">
      <SubTitle title="Lotteries" />
      <LoterryList :to="to" />
    </div>
  </div>
</template>

<script>
export default {
   props: {
    to:{
      Type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pt-2 {
  margin-top: 2rem;
}
.pt-3 {
  margin-top: 3rem;
}
</style>