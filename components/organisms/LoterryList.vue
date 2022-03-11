<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <span>Filter:</span>
        <el-select
          @change="filterAplication"
          v-model="selectValue"
          placeholder="Order"
        >
          <el-option label="Lowerest ID" value="lowerestID"> </el-option>
          <el-option label="Highest ID" value="highestID"> </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-autocomplete placeholder="Search">
          <i class="el-icon-search el-input__icon" slot="suffix"> </i>
        </el-autocomplete>
      </el-col>
    </el-row>
    <div class="grid-card">
      <FilteredLoterry
        v-for="lottery in filterValue"
        :key="lottery.draw_id"
        :loterryID="lottery.draw_id"
        :lottery="lottery.draw_id"
        :to="to"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectValue: "",
      filterValue: this.$store.getters.$filterAscend,
    };
  },
  computed: {
    $allLotteries() {
      return this.$store.getters.$allLotteries;
    },
  },
  methods: {
    filterAplication() {
      if (this.selectValue == "lowerestID") {
        this.filterValue = this.$store.getters.$filterDesc;
      } else {
        this.filterValue = this.$store.getters.$filterAscend;
      }
    },
  },
  props: {
    to: {
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