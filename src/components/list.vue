<template>
  <div class="wrap">
    <div class="list">
      <header @click="showTodo=!showTodo">未完成<i>></i></header>
      <ul class="list-data" v-show="showTodo&&getList">
        <li v-for="item in getList">
          <input type="checkbox" :key="item.id" @click="done(item.id)">
          <span class="content">{{item.content}}</span>
          <button class="edite">编辑</button>
          <button @click="cancel(item.id)">取消</button>
        </li>
      </ul>
    </div>
    <div class="list">
      <header @click="showDone=!showDone">已完成<i>></i></header>
      <ul class="list-data" v-show="showDone&&getDone">
        <li v-for="item in getDone">
          <input type="checkbox" :key="item.id" checked @click="todo(item.id)">
          <span class="content">{{item.content}}</span>
          <span class="time">{{item.time}}</span>
        </li>
      </ul>
    </div>
    <div class="list">
      <header @click="showCancel=!showCancel">取消<i>></i></header>
      <ul class="list-data" v-show="showCancel">
        <li v-for="item in getCancel">
          <span class="content cancel">{{item.content}}</span>
          <button class="refresh" @click="todo(item.id)">恢复</button>
          <button class="delete" @click="delone(item.id)">删除</button>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        showTodo: false,
        showDone: false,
        showCancel: false
      }
    },
    computed: {
      getList() {
        return this.$store.getters.getList
      },
      getDone() {
        return this.$store.getters.getDone
      },
      getCancel() {
        return this.$store.getters.getCancel
      }
    },
    methods: {
      done(id) {
        this.$store.dispatch('done', id);
      },
      todo(id) {
        this.$store.dispatch('todo', id);
      },
      cancel(id) {
        this.$store.dispatch('cancel', id);
      },
      delone(id){
        this.$store.dispatch('delone', id);
      }
    }
  }

</script>
<style lang="less">
  @list-height: 40px;
  .wrap {
    margin-top:10px; 
    .list {
      border-bottom: 1px solid #fcfcfc;
      header {
        height: @list-height;
        line-height: @list-height;
        background: rgb(65, 184, 132);
        color: #fff;
        font-size: 15px;
        i {
          float: right;
          padding-right: 10px;
        }
      }
      .list-data {
        li {
          width: 100%;
          min-height: @list-height;
          line-height: @list-height;
          padding: 0 6px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 15px;
          background: #f9f9f9;
          border-bottom: 1px solid rgba(15, 25, 35, .1);
          span.content {
            flex: 1 0 150px;
            width: 150px;
            padding: 0 10px;
            &.cancel {
              text-decoration: line-through;
              color: #ccc;
            }
          }
          .time {
            font-size: 12px;
            color: #999;
          }
          button {
            line-height: 25px;
            width: 40px;
            height: 25px;
            border: 0;
            margin-right: 5px;
            font-size: 11px;
            color: #fff;
            border-radius: 2px;
            background: rgba(15, 25, 35, .6);
            &.edite {
              background: rgb(36, 114, 200);
            }
            &.refresh {
              background: rgb(252, 183, 56);
            }
            &.delete {
              background: rgb(233, 66, 66);
            }
          }
        }
      }
    }
  }

</style>
