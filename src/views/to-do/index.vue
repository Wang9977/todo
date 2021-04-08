<template>
    <div class="main">
        <el-calendar v-model="value">
            <template #dateCell="{data}">
                <div @click="pick(data.day)">
                <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(2).join('')}} {{ data.isSelected ? '✔️' : '' }}
                </p>
                <todo-list :date = data.day></todo-list>
                </div>
            </template>
        </el-calendar>
    </div>
</template>
<script>
import todoList from '../../components/todo-list'

export default {
    data() {
      return {
        value: new Date()
      } 
    },
    components:{todoList},
    methods:{
        pick(data){
            console.log(data)
            this.$router.push({name:'todoList', params: { data : data}})
        }

    },
    setup() {
    }
}
</script>
<style>
.main{
    padding:20px
}
.is-selected {
color: #1989FA;
}
</style>
