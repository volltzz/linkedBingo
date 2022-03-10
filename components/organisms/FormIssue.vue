<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="16">
        <el-form
          label-position="top"
          label-width="100px"
          class="box-shadow form"
        >
          <el-form-item label="Number of Tickets" required>
            <el-input-number
              v-model="issue.quantity"
              :precision="2"
              controls-position="right"
              :min="0"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="Select Sellers" required>
            <el-select v-model="issue.playersId" multiple placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <div class="center">
            <el-button
              type="primary"
              @click="issueTicket"
              :loading="$globalButton"
              >Generate tickets</el-button
            >
          </div>
        </el-form>
      </el-col>
      <!-- <el-col :span="12">
        <div class="box-shadow file-box">
          <div v-if="true">
            <el-empty description="No file generated"></el-empty>
          </div>
          <div v-else>
            <div class="generate-file">
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
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import { options } from "@/assets/utils/sellers.json";

export default {
  data() {
    return {
      issue: {
        quantity: "",
        draw_id: this.$route.params.id,
        playersId: [],
      },

      options: options,
    };
  },
  computed: {
    $globalButton() {
      return this.$store.getters.$globalButton;
    },
  },
  methods: {
    issueTicket() {
      this.$store
        .dispatch("issueTicket", this.issue)
        .then(() => {
          this.successText();
        })
        .catch(() => {
          this.errorText();
        });
    },

    successText() {
      this.$notify({
        title: "Sucesso",
        message: "Arquivo gerado com sucesso",
        type: "success",
      });
    },
    errorText(errorText) {
      this.$notify.error({
        title: "Error",
        message: "Erro ao gerar o arquivo",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
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
.file-box {
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
.el-input-number {
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>