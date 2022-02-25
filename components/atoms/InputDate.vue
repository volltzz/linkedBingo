<template>
  <el-form-item label="Date of loterry" required>
    <el-col :span="11">
      <el-form-item>
        <el-date-picker
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item>
        <el-time-picker
          placeholder="Pick a time"
          style="width: 100%"
        ></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.el-input-number {
  width: 100%;
}
</style>