export default {
  getList(state) {
    return state.data.list.filter(function (d) {
      if (d.type === 1) {
        return d;
      }
    });
  },
  getDone(state) {
    return state.data.list.filter(function (d) {
      if (d.type === 2) {
        return d;
      }
    });
  },
  getCancel(state) {
    return state.data.list.filter(function (d) {
      if (d.type === 3) {
        return d;
      }
    });
  }
}
