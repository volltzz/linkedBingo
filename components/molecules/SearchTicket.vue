<template>
  <div class="box-shadow br-5 p-1">
    <TicketFilter />
    <div class="tickets">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tickets {
    margin-top: 1rem;
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem    ;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
}
</style>