<template>
  <div>
    <el-form
      label-position="top"
      label-width="100px"
      class="box-shadow form"
      style="border-radius: 1rem"
      @submit.native.prevent
    >
      <div style="padding: 1rem">
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :span="12">
            <el-form-item label="Start interval" required>
              <el-input-number
                v-model="lowerInterval"
                :min="0"
                required
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="End interval" required>
              <el-input-number
                v-model="BigInterval"
                :min="0"
                required
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="padding">
          <el-col :md="24">
            <el-button
              :loading="loadingButton"
              @click="approveTicket(lowerInterval, BigInterval)"
              type="success"
              >Validate</el-button
            >
          </el-col>
          <el-col :md="24">
            <el-button
              :loading="loadingButton"
              @click="invalidateTicket(lowerInterval, BigInterval)"
              type="danger"
              >Cancel Tickets</el-button
            >
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lowerInterval: "",
      BigInterval: "",
      loadingButton: false,
    };
  },
  methods: {
    getIntervalId(lowerInterval, BigInterval) {
      const smallInteterval =
        lowerInterval < BigInterval ? lowerInterval : BigInterval;
      const bigInteterval =
        lowerInterval > BigInterval ? lowerInterval : BigInterval;
      const newTickets = this.$store.getters.$allTickets;
      const ticketsInterval = newTickets.filter(
        ({ ticketId }) =>
          ticketId >= smallInteterval && ticketId <= bigInteterval
      );

      const arrayId = ticketsInterval.map((id) => {
        return id.ticketId;
      });

      return arrayId;
    },
    async approveTicket(lowerInterval, BigInterval) {
      this.loadingButton = true;
      const ticketId = this.getIntervalId(lowerInterval, BigInterval);
      await this.$axios
        .$post("/ticket/validate_tickets", {
          validate_tickets: ticketId,
          invalidate_tickets: null,
          draw_id: this.$route.params.id,
        })
        .then(() => {
          window.location.reload();
          this.successText();
        })
        .catch(() => {
          this.errorText();
        });
      this.loadingButton = false;
    },
    async invalidateTicket(lowerInterval, BigInterval) {
      this.loadingButton = true;
      const ticketId = this.getIntervalId(lowerInterval, BigInterval);
      await this.$axios
        .$post("/ticket/validate_tickets", {
          validate_tickets: null,
          invalidate_tickets: ticketId,
          draw_id: this.$route.params.id,
        })
        .then(() => {
          window.location.reload();
          this.successText();
        })
        .catch(() => {
          this.errorText();
        });
      this.loadingButton = false;
    },

    successText() {
      this.$notify({
        title: "Sucesso",
        message: "Alterado com sucesso",
        type: "success",
      });
    },
    errorText() {
      this.$notify.error({
        title: "Error",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
button,
[type="button"],
[type="reset"],
[type="submit"] {
  width: 100%;
  margin: 1rem 0;
}
.padding {
  padding: 1rem;
}
</style>