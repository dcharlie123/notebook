const localEvent = function (item) {
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  }
  this.set = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = function () {
    localStorage.removeItem(item);
  }
}
export const local = new localEvent('notebook');
export const getDate = () => { //获取当天日期
  const date = new Date(),
    mouth = parseInt(date.getMonth()) + 1;
  return date.getFullYear() + '-' + mouth + '-' + date.getDate();
}
export const changeType = function (state, id, type) {
  for (let i = 0; i < state.data.list.length; i++) {
    if (state.data.list[i].id === id) {
      state.data.list[i].type = type;
      state.data.list[i].time = getDate();
    }
  }
}
