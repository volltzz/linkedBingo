<template>
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
  ></el-input-number>
</template>

<script>
export default {
  props: {
    label: {
      Type: String,
      required: true,
    },
   
  },
};
</script>

<style lang="scss" scoped>
.el-input-number {
  width: 100%;
}
</style>