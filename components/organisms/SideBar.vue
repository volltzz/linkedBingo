<template>
  <div>
    <el-aside width="100px" style="background-color: #fff">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->

      <el-menu
        align="middle"
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <div class="grid">
          <NuxtLink to="/">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
            </el-menu-item>
          </NuxtLink>
          <div class="logout" @click="logout">
            <el-menu-item index="2">
              <i class="el-icon-circle-close"></i>
            </el-menu-item>
          </div>
        </div>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("userLogout");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 100vh;
}
.el-menu-item [class^="el-icon-"] {
  font-size: 30px;
}
.el-menu-vertical-demo {
  display: grid;
  align-content: center;
}
.grid {
  display: grid;
  grid-gap: 2rem;
}
</style>