<template>
  <div>
    <el-row :gutter="20">
      <el-table
        :data="pagedTableData.filter((data) => !search || data.draw_id == search)"
        :default-sort = "{prop: 'draw_id', order: 'ascend'}"
        style="width: 100%; border-radius: 1rem"
      >

        <el-table-column label="ID" width="180" prop="draw_id" sortable>
        </el-table-column>

        <el-table-column label="Price" width="180">
          <template slot-scope="scope">
            <i class="el-icon-money"></i>
            <span style="margin-left: 10px">${{ scope.row.card_price }}</span>
          </template>
        </el-table-column>

        <el-table-column label="Date" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.draw_time }}</span>
          </template>
        </el-table-column>

        <el-table-column align="right">
           <!-- eslint-disable  -->
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="ID"
            />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="issue(scope.row.draw_id)"
              >{{BtnText}}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="paginacao">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="this.pesquisa.length"
        @current-change="setPage"
      >
      </el-pagination>
    </div>
    </el-row>

  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  data() {
    return {
      pesquisa: this.$store.getters.$allLotteries.draws.map((item) => {
        return {
          ...item,
          draw_time: format(new Date(item.draw_time), "dd/MM/yyyy"),
          card_price: (item.card_price / 100).toFixed(0)
        };
      }),
      search: "",
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    $allLotteries() {
      return this.$store.getters.$allLotteries;
    },
    pagedTableData() {
      return this.pesquisa.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  methods: {
    issue(row) {
      this.$router.push(`/${this.to}/${row}`);
    },
    setPage(valu) {
      this.page = valu;
    },
  },
  props: {
    to: {
      Type: String,
      require: true,
    },
     BtnText:{
      Type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-card {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
