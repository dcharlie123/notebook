<template>
  <div class="head">
    <img src="../assets/logo.png" alt="">
    <header>记事本</header>
  </div>
</template>
<script>
  export default {}

</script>
<style lang="less" scoped>
  .head {
    width: 100%;
    height: 45px;
    line-height: 45px;
    position: fixed;
    top:0;
    left:0;
    right: 0;
    text-align: center;
    background: rgba(225, 225, 225, .2);
    box-shadow: 0 0 1px 1px #ccc;
    header {
      color: rgb(13, 188, 121);
      font-size: 16px;
      display: inline-block;
      padding-left: 5px;
    }
    img {
      vertical-align: middle;
      width: 22px;
      height: 22px;
    }
  }

</style>
