<template>
  <div class="forms">
    <div class="form login box-shadow">
      <span class="title">Login LinkedBingo</span>

      <form @submit.prevent="userLogin">
        <el-alert v-if="$errorText" title="Login ou senha incorretos" type="error" effect="dark"> </el-alert>
        <div class="input-field">
          <input type="text" placeholder="Name" v-model="login.user" required />
          <i class="el-icon-user-solid"></i>
        </div>
        <div class="input-field">
          <input
            type="password"
            class="password"
            placeholder="Enter your password"
            v-model="login.pass"
            required
          />
          <i class="el-icon-lock"></i>
          <!-- <i class="uil uil-eye-slash showHidePw"></i> -->
        </div>

        <div class="input-field button">
          <el-button type="primary" :loading="$buttonState" native-type="submit"
            >Login </el-button
          >
        </div>

        <!-- <div class="input-field button">
          <button type="primary" class="button" native-type="submit">
            Enter
          </button>
        </div> -->
      </form>
    </div>
  </div>
  <!-- <div class="form">
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
  </div> -->
</template>

<script>
export default {
  computed: {
    $buttonState() {
      return this.$store.getters.$buttonState;
    },
    $errorText() {
      return this.$store.getters.$errorText;
    },
  },
  data() {
    return {
      login: {
        user: "",
        pass: "",
        device_id: "1",
        client_version: "1.0.0.0",
      },
    };
  },
  methods: {
    async userLogin() {
      await this.$store.dispatch("userAuth", this.login);
    },
    errorbox() {
      this.$notify.error({
        title: "Error",
        message: "This is an error message",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert {
  margin-top: 15px;
}
.forms {
  height: 100vh;
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  background-color: #4070f4;
}

.form {
  padding: 30px;
  background-color: #fff;
  transition: margin-left 0.18s ease;
  border-radius: 1rem;
}

.container.active .login {
  margin-left: -50%;
  opacity: 0;
  transition: margin-left 0.18s ease, opacity 0.15s ease;
}

.signup {
  opacity: 0;
  transition: opacity 0.09s ease;
}
.container.active .signup {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.container.active .forms {
  height: 600px;
}
.form .title {
  position: relative;
  font-size: 27px;
  font-weight: 600;
}

.form .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background-color: #4070f4;
  border-radius: 25px;
}

.form .input-field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}
.input-field input {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 35px;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 2px solid #ccc;
  border-top: 2px solid transparent;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) {
  border-bottom-color: #4070f4;
}

.input-field i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 23px;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) ~ i {
  color: #4070f4;
}

.input-field i.icon {
  left: 0;
}
.input-field i.showHidePw {
  right: 0;
  cursor: pointer;
  padding: 10px;
}

.form .checkbox-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.checkbox-text .checkbox-content {
  display: flex;
  align-items: center;
}

.checkbox-content input {
  margin: 0 8px -2px 4px;
  accent-color: #4070f4;
}

.form .text {
  color: #333;
  font-size: 14px;
}

.form a.text {
  color: #4070f4;
  text-decoration: none;
}
.form a:hover {
  text-decoration: underline;
}
.form .button {
  margin-top: 35px;
}

.form .button button {
  width: 100%;
  padding: 15px 0;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 6px;
  background-color: #4070f4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button button:hover {
  background-color: #265df2;
}

.form .login-signup {
  margin-top: 30px;
  text-align: center;
}
</style>
