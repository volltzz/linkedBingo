<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="15">
        <el-form
          label-position="top"
          label-width="100px"
          class="box-shadow form"
        >
          <el-row :gutter="20">
            <el-form-item label="Bingo Card Value" required>
              <el-input-number
                v-model="card_price"
                :precision="2"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </el-form-item>

            <el-form-item label="First Prize Value" required>
              <el-input-number
                v-model="paytable[0]"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="Second Prize Value" required>
              <el-input-number
                v-model="paytable[1]"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="Third Prize Value" required>
              <el-input-number
                v-model="paytable[2]"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </el-form-item>
          </el-row>
          <el-form-item class="button">
            <el-button type="primary" @click="addLoterry">Create</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card_price: "",
      paytable: [],
    };
  },
  methods: {
    async addLoterry() {
      await this.$axios
        .$post("/newdraw", {
          draw: {
            card_price: (this.card_price * 100).toFixed(1),
            paytable: this.paytable,
          },
        })
        .then(function (response) {
          console.log("deu certo");
        })
        .catch(function (error) {
          console.log("deu ruim");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 2rem;
  border-radius: 0.4rem;
}
.button button {
  width: 200px;
}
.button {
  text-align: center;
}
.el-input-number {
  width: 100%;
}
</style>