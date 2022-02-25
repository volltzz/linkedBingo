<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <span>Filter:</span>
      <el-select value="lowerPrice"  placeholder="Date">
        <el-option label="Lower Price" value="lowerPrice"> </el-option>
        <el-option label="highest Price" value="lowerPrice"> </el-option>
      </el-select>
      <el-select value="lowerPrice" placeholder="Price">
        <el-option label="Lower Price" value="lowerPrice"> </el-option>
        <el-option label="highest Price" value="lowerPrice"> </el-option>
      </el-select>
    </el-col>
    <el-col :span="6" :offset="6">
      <el-autocomplete placeholder="Search">
        <i 
          class="el-icon-search el-input__icon"
          slot="suffix"
        >
        </i>
      </el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span {
  font-weight: 800;
  font-size: 20px;
  margin-right: 20px;
}
.el-select {
  width: 150px;
}
</style>