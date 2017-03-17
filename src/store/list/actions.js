import * as types from './mutations_types.js'

export default {
  add: ({commit}, param) => {
    commit(types.ADD, {items: param});
  },
  done:({commit},id)=>{
    commit(types.DONE,id)
  },
  todo:({commit},id)=>{
    commit(types.TODO,id)
  },
  cancel:({commit},id)=>{
    commit(types.CANCEL,id)
  },
  delone:({commit},id)=>{
    commit(types.DELONE,id);
  },
  delAll:({commit})=>{
    commit(types.DELALL);
  }
}
