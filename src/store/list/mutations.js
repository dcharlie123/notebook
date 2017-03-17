import * as fun from '../fun.js';
import * as types from './mutations_types.js';

export default {
  [types.ADD](state, obj) {
    state.data.count++;
    obj.items.id = state.data.count;
    state.data.list.unshift(obj.items);
    fun.local.set(state.data);
  },
  [types.DONE](state, id) {
    fun.changeType(state, id, 2);
    fun.local.set(state.data);
  },
  [types.TODO](state, id) {
    fun.changeType(state, id, 1);
    fun.local.set(state.data);
  },
  [types.CANCEL](state, id) {
    fun.changeType(state, id, 3);
    fun.local.set(state.data);
  },
  [types.DELONE](state, id) {
    state.data.list.filter(function (d, i) {
      if (d.id == id) {
        state.data.list.splice(i, 1);
        state.data.count--;
      }
    })
    fun.local.set(state.data);
  },
  [types.DELALL](state){
    state.data.list.splice(0,state.data.list.length);
  }
}
