<template>
  <div class="body3" ref="sideBar2">
    <nav class="sidebar close" ref="nav2">
      <header>
        <div class="image-text">
          <span class="image">
            <h1 class="color-white">L</h1>
          </span>

          <div class="text logo-text">
            <span class="name color-white">LinkedBingo</span>
            <!-- <span class="profession">Web developer</span> -->
          </div>
        </div>

        <i class="el-icon-arrow-right toggle" ref="toggle2"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <li class="search-box home-li">
            <NuxtLink to="/">
              <i class="el-icon-s-home icon"></i>
              <span class="text nav-text">Home</span>
            </NuxtLink>
          </li>
          <li class="search-box logout-li" @click="open">
            <i class="el-icon-error icon"></i>
            <span class="text nav-text">Sair</span>
          </li>
        </div>

        <div class="bottom-content"></div>
      </div>
    </nav>

    <!-- <section class="home">
      <div class="text">Dashboard Sidebar</div>
    </section> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      body: "",
    };
  },
  mounted() {
    this.sidebar();
  },

  methods: {
    open() {
      this.$alert("Deseja realemte sair?", "Logout", {
        confirmButtonText: "Sim",
        callback: (action) => {
          if (action == "confirm") {
            this.logout();
          }
        },
      });
    },
    logout() {
      this.$store.dispatch("userLogout");
    },

    sidebar() {
      const body = this.$refs.sideBar2,
        sidebar = this.$refs.nav2,
        toggle = this.$refs.toggle2;

      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  /* ===== Colors ===== */
  --body-color: #e4e9f7;
  --sidebar-color: #fff;
  --primary-color: #695cfe;
  --primary-color-light: #f6f5ff;
  --toggle-color: #ddd;
  --text-color: #707070;
  /* ====== Transition ====== */
  --tran-03: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.3s ease;
  --tran-05: all 0.3s ease;
}

.color-white {
  color: white;
}

.body3 {
  min-height: 100vh;
  background-color: #e4e9f7;
  transition: all 0.3s ease;
}

::selection {
  background-color: #695cfe;
  color: #fff;
}

.body3.dark {
  --body-color: #18191a;
  --sidebar-color: #242526;
  --primary-color: #3a3b3c;
  --primary-color-light: #3a3b3c;
  --toggle-color: #fff;
  --text-color: #ccc;
}

/* ===== Sidebar ===== */

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: #695cfe;
  transition: all 0.3s ease;
  z-index: 100;
}

.sidebar.close {
  width: 88px;
}

/* ===== Reusable code - Here ===== */

.sidebar li {
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
}

.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar .text,
.sidebar .icon {
  color: #707070;
  transition: all 0.3s ease;
}

.sidebar .text {
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
}

.sidebar.close .text {
  opacity: 0;
}

/* =========================== */

.sidebar header {
  position: relative;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}

.sidebar header .logo-text {
  display: flex;
  flex-direction: column;
}

header .image-text .name {
  margin-top: 2px;
  font-size: 18px;
  font-weight: 600;
}

header .image-text .profession {
  font-size: 16px;
  margin-top: -2px;
  display: block;
}

.sidebar header .image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar header .image img {
  width: 40px;
  border-radius: 6px;
}

.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%) rotate(180deg);
  height: 25px;
  width: 25px;
  background-color: #695cfe;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.body3.dark .sidebar header .toggle {
  color: #707070;
}

.sidebar.close .toggle {
  transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu {
  margin-top: 40px;
}

.sidebar li.search-box {
  border-radius: 6px;
  background-color: #f6f5ff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar li.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: #f6f5ff;
  color: #707070;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.sidebar li a {
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.sidebar .home-li:hover {
  background-color: #67c23a;
}
.sidebar .logout-li:hover {
  background-color: #f56c6c;
  .text  {
    color: white !important;
  }
  i{
    color: white !important;
  }
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: #fff;
}

.body3.dark .sidebar li a:hover .icon,
.body3.dark .sidebar li a:hover .text {
  color: #707070;
}

.sidebar .menu-bar {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
  display: none;
}

.sidebar .menu-bar .mode {
  border-radius: 6px;
  background-color: #695cfe;
  position: relative;
  transition: all 0.3s ease;
}

.menu-bar .mode .sun-moon {
  height: 50px;
  width: 60px;
}

.mode .sun-moon i {
  position: absolute;
}

.mode .sun-moon i.sun {
  opacity: 0;
}

.body3.dark .mode .sun-moon i.sun {
  opacity: 1;
}

.body3.dark .mode .sun-moon i.moon {
  opacity: 0;
}

.menu-bar .bottom-content .toggle-switch {
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 40px;
  border-radius: 25px;
  background-color: #ddd;
  transition: all 0.3s ease;
}

.switch::before {
  content: "";
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: #fff;
  transition: all 0.3s ease;
}

.body3.dark .switch::before {
  left: 20px;
}

.home {
  position: absolute;
  top: 0;
  top: 0;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  background-color: #e4e9f7;
  transition: all 0.3s ease;
}

.home .text {
  font-size: 30px;
  font-weight: 500;
  color: #707070;
  padding: 12px 60px;
}

.sidebar.close ~ .home {
  left: 78px;
  height: 100vh;
  width: calc(100% - 78px);
}

.body3.dark .home .text {
  color: #707070;
}
</style>
