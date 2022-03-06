<template>
    <div class="nav-buttons">
        <NavButton to="/createLoterry" icon="el-icon-plus" title="Create Lottery" color="primary"/>
        <NavButton to="/issueTickets" icon="el-icon-download" title="Ticket Emission" color="danger"/>
        <NavButton to="/ticketValidation" icon="el-icon-check" title="Ticket Validation" color="success"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav-buttons{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    justify-content: space-around;
}

</style>