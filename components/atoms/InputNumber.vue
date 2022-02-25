<template>
  <el-form-item :label="label" required>
    <el-input-number controls-position="right" :min="0.1"></el-input-number>
  </el-form-item>
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