<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                Type: String,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>