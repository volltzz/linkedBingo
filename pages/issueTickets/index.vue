<template>
  <div>
    <SearchLoterryTemplate to="issueTickets" />
  </div>
</template>

<script>
export default {
  layout: "system",
  async asyncData({ store }) {
    await store.dispatch("fetchLotteries");
  },
};
</script>

