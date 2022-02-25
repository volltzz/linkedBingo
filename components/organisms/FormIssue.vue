<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form
          label-position="top"
          label-width="100px"
          class="box-shadow form"
        >
          <InputNumber label="Number of tickets"/>
          <el-form-item class="button">
            <el-button type="primary">Generate tickets</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="box-shadow file-box">
          <div v-if="false">
          <el-empty description="No file generated"></el-empty>
          </div>
          <div v-else>
          <div class="generate-file" >
            <span>Generated file</span>
            <NuxtLink to="/">
              <div class="file">
                <div>
                  <i class="el-icon-document"></i>
                  <span>Tickets.pdf</span> 
                </div>
                <i class="el-icon-download"></i>
              </div>
            </NuxtLink>
          </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.file {
  display: grid;
  grid-template-columns: auto auto;
  
  margin: 1rem 0;
  padding: 1rem;
  justify-content: space-between;
  background: #7be26613;
  span {
    color: #409eff;
  }
}
.file-box{
  border-radius: 0.5rem;
}
.el-icon-download {
  color: #409eff;
}
.form {
  padding: 2rem;
  border-radius: 0.5rem;
}
.button button {
  width: 200px;
}
.button {
  text-align: center;
}
.generate-file {
  padding: 1rem;
}
</style>