<template>
  <div class="pt-2">
    <HeaderBar />
    <div class="pt-3">
      <SubTitle :title="drawID" />
      <FormIssue />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drawID() {
      return `Issue Ticket #${this.$route.params.id}`;
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