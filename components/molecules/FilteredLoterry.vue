<template>
  <NuxtLink :to="`/${to}/${loterryID}`" class="loterry">
    <span>{{ loterryID }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to:{
      Type: String,
      require: true,
    },
    loterryID: {
      Type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.loterry {
  padding: 1.5rem;
  max-width: 300px;
  color: white;
  background-color: #292841;
  border: 1px solid #292841;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
  border-radius: 0.3rem;
  transition: 0.5s;
  text-align: center;
  font-weight: 800;
  span{
      font-size: 30px;
      text-decoration-line: underline;
  }
}
.loterry:hover {
  background-color: white;
  border: 1px solid #292841;
  color: black;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
}


</style>