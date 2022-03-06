<template>
  <el-table
    :data="tableData.filter((data) => !search || data.ticket == search)"
    :default-sort="{ prop: 'ticket', order: 'descending' }"
    :row-class-name="tableRowClassName"
    style="width: 100%"
  >
    <el-table-column label="ticket" prop="ticket" sortable> </el-table-column>
    <el-table-column align="right">
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="Type to search" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>



<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  data() {
    return {
      tableData: [
        {
          ticket: 1,
        },
        {
          ticket: 2,
        },
      ],
      search: "",
    };
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
</style>