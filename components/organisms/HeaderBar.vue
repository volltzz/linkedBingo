<template>
  <div class="header-bar">
    <MainTitle title="LinkedBingo" />
    <UserInfo userName="" userPermission="admin" />
  </div>
</template>

<script>
export default {
  computed:{
    $getNameUser(){
      return this.$store.getters
    }
  }
};
</script>

<style lang="scss" scoped>
.header-bar{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between; 
    margin-top: 1rem;   
}
</style>