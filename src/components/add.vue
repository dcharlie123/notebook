<template>
    <div class="add">
        <input type="text" v-model="content" placeholder="今日事,今日毕" @keyup.enter="add">
        <button @click="add">添加</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:''
            }
        },
        methods:{
            add () {
                let self = this,
                    params = {
                        id: 0,
                        type: 1,
                        content: '',
                        time: ''
                    };
                self.content = self.content.trim();
                if(self.content){
                    params.content = self.content;
                    self.$store.dispatch('add',params);
                    self.content = '';
                }
            }
        }
    }
</script>
<style lang="less">
    @add-height: 33px;
    .add{
        padding:16px;
        display: flex;
        justify-content: center; 
        input{
            width: 280px;
            height: @add-height;
            line-height: @add-height;
            flex: 1 1 280px;
            padding-left:10px;
            border:1px solid #dcdcdc;
            border-radius: 2px; 
            &:focus{
                outline: 0;
            }
        }
        button{
            margin-left:3px;
            width: 80px; 
            flex: 0 1 80px;
            background: rgb(13, 188, 121);
            border: 0;
            color:#fff;
            border-radius: 2px;
            &:focus{
                outline: 0;
            }
            &:hover{
                border: none;
                box-shadow: 1px 0 2px #999;
            } 
        }
    }
</style>