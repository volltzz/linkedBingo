<template>
  <div class="user-info box-shadow">
    <el-avatar icon="el-icon-user-solid" />
    <div>
      <h3>{{ userName }}</h3>
      <p>{{ userPermission }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      Type: String,
      required: true,
    },
    userPermission: {
      Type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  padding: 0 2rem;
  border-radius: 1rem;
  background: white;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
</style>