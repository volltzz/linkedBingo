<template>
  <div>
    <TicketValidationTemplate />
  </div>
</template>

<script>
export default {
  layout: "system",

  async asyncData({ store, route }) {
    await store.dispatch("fetchTickets", route.params.id);
  },
};
</script>

