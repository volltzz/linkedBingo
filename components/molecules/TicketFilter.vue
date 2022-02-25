<template>
  <div class="grid-filter">
      <el-select value="lowerPrice" placeholder="Date">
        <el-option label="Lower Price" value="lowerPrice"> </el-option>
        <el-option label="highest Price" value="lowerPrice"> </el-option>
      </el-select>
      <el-select value="lowerPrice" placeholder="Price">
        <el-option label="Lower Price" value="lowerPrice"> </el-option>
        <el-option label="highest Price" value="lowerPrice"> </el-option>
      </el-select>
      <el-autocomplete placeholder="Search">
        <i class="el-icon-search el-input__icon" slot="suffix"> </i>
      </el-autocomplete>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-filter {
  display: grid;
  grid-template-columns: auto auto auto;
   grid-gap: 1rem;
}
</style>