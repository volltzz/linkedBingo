<template>
  <el-table
    :data="tableData.filter((data) => !search || data.ticketId == search)"
    :default-sort="{ prop: 'ticketId', order: 'descending' }"
    :row-class-name="tableRowClassName"
    style="width: 100%"
  >
    <el-table-column label="ticket" prop="ticketId" sortable> </el-table-column>
    <el-table-column label="seller" prop="seller_id" sortable>
    </el-table-column>
    <el-table-column align="right">
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="Type to search" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="approveTicket(scope.row.ticketId)"
          >Approve</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="invalidateTicket(scope.row.ticketId)"
          >Invalidate</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>



<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.state === 0) {
        return "success-row";
      } else if (row.state === 4) {
        return "danger-row";
      }
      return "";
    },
    async approveTicket(ticketId) {
      await this.$axios
        .$post("/ticket/validate_tickets", {
          validate_tickets: [ticketId],
          invalidate_tickets: null,
          draw_id: this.$route.params.id,
        })
        .then(() => {
          window.location.reload();
          console.log("deu certo");
        })
        .catch(() => {
          console.log("deu merda");
        });
    },
    async invalidateTicket(ticketId) {
      await this.$axios
        .$post("/ticket/validate_tickets", {
          validate_tickets: null,
          invalidate_tickets: [ticketId],
          draw_id: this.$route.params.id,
        })
        .then(() => {
          this.tableRowClassName();
          console.log("deu certo");
        })
        .catch(() => {
          console.log("deu merda");
        });
    },
  },
  data() {
    return {
      tableData: this.$store.getters.$allTickets,
      search: "",
    };
  },
  computed: {
    $allTickets() {
      return this.$store.getters.$allTickets;
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-table .danger-row {
  background: #fde2e2;
}
</style>