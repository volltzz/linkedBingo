<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="24">
        <el-form
          label-position="top"
          label-width="100px"
          class="box-shadow form"
          @submit.native.prevent
        >
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Bingo Card Value" required>
                <el-input-number
                  v-model="card_price"
                  :precision="2"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Date" required>
                <el-date-picker
                  v-model="draw_time"
                  type="datetime"
                  placeholder="Select date and time"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
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
            <el-button
              type="primary"
              @click="addLoterry"
              :loading="loadingButton"
              >Create</el-button
            >
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
      draw_time: "",
      card_price: "",
      paytable: [],
      loadingButton: false,
    };
  },
  methods: {
    successText() {
      this.$notify({
        title: "Sucesso",
        message: "Loterry criada com sucesso",
        type: "success",
      });
    },
    errorText(errorText) {
      this.$notify.error({
        title: "Error",
        message: errorText,
      });
    },
    async addLoterry() {
      this.loadingButton = true;

      await this.$axios
        .$post("/newdraw", {
          draw: {
            draw_time: this.draw_time.getTime(),
            card_price: (this.card_price * 100).toFixed(1),
            paytable: [
              (this.paytable[0] * 100).toFixed(1),
              (this.paytable[1] * 100).toFixed(1),
              (this.paytable[2] * 100).toFixed(1),
            ],
          },
        })
        .then(() => {
          this.successText()
          this.draw_time = "",
          this.card_price = "",
          this.paytable = []
        })
        .catch((error) => {
          this.errorText(error.response.data.message);
          this.draw_time = "",
          this.card_price = "",
          this.paytable = []
        });

      this.loadingButton = false;
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
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
