<template>
  <div>
    <img class="nofindImg" src="../assets/404.jpg">
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  div {
    position:relative;
    width:auto;
    height:height;
    min-width:auto;
    background-color: #eef3fa;
    img {
      position:absolute;
      left:0;
      top:0;
      margin:auto;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-size: 100% auto;
      width:375px;
    }
  }
</style>
