<template>
  <div class="form">
    <el-card class="box-card">
      <form class="login box-card" @submit.prevent="userLogin">
        <div>
          <label>Username</label>
          <el-input v-model="login.user"></el-input>
        </div>
        <div>
          <label>Password</label>
          <el-input v-model="login.pass"></el-input>
        </div>
        <div>
            <el-button type="primary" native-type="submit">Primary</el-button>
        </div>
      </form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        user: "",
        pass: "",
        device_id: "02:50:3F:9E:0D:AD",
        client_version: "1.0.0.0",
      },
    };
  },
  methods: {
    userLogin(){
      try {
        this.$store.dispatch('userAuth', this.login)
      } catch (error) {
        console.log('erro dispatch');
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  height: 100vh;
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
}
.login {
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
}
</style>