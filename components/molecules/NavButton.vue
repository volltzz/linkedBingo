<template>
  <NuxtLink :to="to" :class="color">
    <i :class="icon"></i>
    <p>{{ title }}</p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      Type: String,
      require: true,
    },
    title: {
      Type: String,
      require: true,
    },
    color: {
      Type: String,
      require: true,
    },
    icon: {
      Type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a{
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    i{
        font-size: 30px;
    }
}
.primary {
  padding: 1.5rem;
  color: white;
  background-color: #409eff;
  border: 1px solid #409eff;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
  border-radius: 0.5rem;
  transition: 0.5s;
  p {
    font-weight: 800;
  }
}
.primary:hover {
  background-color: white;
  border: 1px solid #409eff;
  color: black;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
}

.danger {
  padding: 1.5rem;
  color: white;
  background-color: #f56c6c;
  border: 1px solid #f56c6c;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
  border-radius: 0.5rem;
  transition: 0.5s;
  p {
    font-weight: 800;
  }
}
.danger:hover {
  background-color: white;
  border: 1px solid #f56c6c;
  color: black;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
}
.success {
  padding: 1.5rem;
  color: white;
  background-color: #67c23a;
  border: 1px solid #67c23a;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
  border-radius: 0.5rem;
  transition: 0.5s;
  p {
    font-weight: 800;
  }
}
.success:hover {
  background-color: white;
  border: 1px solid #67c23a;
  color: black;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.28);
}
</style>