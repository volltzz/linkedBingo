<template>
  <div>
    <el-table
      v-loading="loadingButton"
      :data="
        pagedTableData.filter((data) => !search || data.ticketId == search)
      "
      :default-sort="{ prop: 'ticketId', order: 'descending' }"
      :row-class-name="tableRowClassName"
      style="width: 100%; border-radius: 1rem"
    >
      <el-table-column label="ticket" prop="ticketId" sortable>
      </el-table-column>
      <el-table-column label="seller" prop="seller_id" sortable>
      </el-table-column>

      <el-table-column align="right">
        <!-- eslint-disable-next-line -->
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-button size="mini" @click="approveTicket(scope.row.ticketId)"
                >Approve</el-button
              >
            </el-col>
            <el-col :span="12">
              <el-button
                size="mini"
                type="danger"
                @click="invalidateTicket(scope.row.ticketId)"
                >Invalidate</el-button
              >
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginacao">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="this.tableData.length"
        @current-change="setPage"
      >
      </el-pagination>
    </div>
  </div>
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
      this.loadingButton = true;
      await this.$axios
        .$post("/ticket/validate_tickets", {
          validate_tickets: [ticketId],
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
    async invalidateTicket(ticketId) {
      this.loadingButton = true;
      await this.$axios
        .$post("/ticket/validate_tickets", {
          validate_tickets: null,
          invalidate_tickets: [ticketId],
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
    setPage(valu) {
      this.page = valu;
    },
  
  },
  data() {
    return {
      tableData: this.$store.getters.$allTickets,
      search: "",
      page: 1,
      pageSize: 10,
      loadingButton: false,
    };
  },
  computed: {
    $allTickets() {
      return this.$store.getters.$allTickets;
    },
    pagedTableData() {
      return this.tableData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
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
.paginacao {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}
</style>