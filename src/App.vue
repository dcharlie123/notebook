<template>
  <div id="app">
    <m-header></m-header>
    <add></add>
    <list></list>
    <button class="clearAll" @click="clearAll">清空所有记录</button>
  </div>
</template>
    
<script>
import mheader from './components/header.vue'
import add from './components/add.vue'
import list from './components/list.vue'
export default {
  name: 'app',
  components:{
    "m-header":mheader,
    add,
    list
  },
  methods:{
    clearAll(){
      this.$store.dispatch('delAll');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.clearAll{
  height: 40px;
  width: 60%;
  display: block;
  margin: 180px auto 0;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background: rgb(233,40,40);
}
button:focus{
  outline: none;
  background: rgb(240,60,40);
}
</style>
