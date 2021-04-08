<template>
    <div>{{date}}</div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.params)

    },
    data(){
        return {
            date: this.$route.params
        }
    }

}
</script>