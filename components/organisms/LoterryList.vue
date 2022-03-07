<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <span>Filter:</span>
        <el-select value="lowerPrice" placeholder="Date">
          <el-option label="Lower Price" value="lowerPrice"> </el-option>
          <el-option label="highest Price" value="lowerPrice"> </el-option>
        </el-select>
        <el-select value="lowerPrice" placeholder="Price">
          <el-option label="Lower Price" value="lowerPrice"> </el-option>
          <el-option label="highest Price" value="lowerPrice"> </el-option>
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
        v-for="lottery in $allLotteries.draws"
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
  computed: {
    $allLotteries() {
      return this.$store.getters.$allLotteries;
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