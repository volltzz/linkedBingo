<template>
  <div>
      <SearchLoterryTemplate />
  </div>
</template>

<script>
export default {
  layout: 'system',
  async asyncData({store}){
    await store.dispatch("fetchLotteries")
  }
}
</script>

