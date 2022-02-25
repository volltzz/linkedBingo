<template>
  <div class="box-shadow dash-board">
    <div>
      <span>{{ title }}</span>
      <p>{{ number }}</p>
    </div>
    <i class="el-icon-caret-top"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      Type: String,
      require: true,
    },
    number: {
      Type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.dash-board {
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  background: white;
  padding: 50px;
  text-align: center;
  border-radius: 0.5rem;
  font-weight: 800;
  span {
    font-size: 30px;
    color: #a5a5a5;
  }
  .el-icon-caret-top {
    color: #67c23a;
    font-size: 50px;
  }
}
</style>