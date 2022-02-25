<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form
          label-position="top"
          label-width="100px"
          class="box-shadow form"        >
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Bingo Card Value" required>
                <el-input-number
                  v-model="createLoterry.card_price"
                  :precision="2"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
              </el-form-item>
              <el-form-item label="Date of loterry" required>
                <el-col :span="11">
                  <el-form-item>
                    <el-date-picker
                      type="datetime"
                      v-model="createLoterry.draw_time"
                      placeholder="Pick a date"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="First Prize Value" required>
                <el-input-number
                  v-model="createLoterry.paytable[0]"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Second Prize Value" required>
                <el-input-number
                  v-model="createLoterry.paytable[1]"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
              </el-form-item>
              <el-form-item label="Third Prize Value" required>
                <el-input-number
                  v-model="createLoterry.paytable[2]"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="button">
            <el-button type="primary" @click="addLoterry">Create</el-button
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
      createLoterry: {
        draw_time: "",
        card_price: "",
        paytable: [],
      },
    };
  },
  methods: {
    async addLoterry() {
      await this.$axios
        .$post("/newdraw", {
          draw_time: this.draw_time.getTime(),
          card_price: (this.card_price*100).toFixed(1),
          paytable: this.paytable,
        })
        .then(function (response) {
          console.log("deu certo");
        })
        .catch(function (error) {
          console.log('deu ruim');
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