<template>
    <div>
       <h1><i @click="$router.go(-1)" class="el-icon-back icon"></i>  {{title}}</h1>
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
.icon{
    background-color: #695CFE;
    color: white;
    border-radius: 100%;
    cursor: pointer;
    padding: 5px;
}

</style>
