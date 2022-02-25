<template>
  <div>
    <el-row :gutter="20" class="padding">
      <el-col :md="24">
        <el-button type="success">Validate</el-button>
      </el-col>
      <el-col :md="24">
        <el-button type="danger">Cancel Tickets</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button, [type="button"], [type="reset"], [type="submit"]{
    width: 100%;
    margin: 1rem 0;
}
.padding{
    padding: 1rem;
}
</style>