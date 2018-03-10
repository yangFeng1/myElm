<template>
<div>
 
         <div>
    <iscroll-view ref="iscroll" class="scroll-view">
      <h1>111111</h1>
      <h1>22222</h1>
      <h1>33333</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>66666</h1>
      <h1>77777</h1>
      <h1>8888</h1>
    </iscroll-view>
    <button @click="scrollToTop">Scroll To Top</button>
  </div>
          <div class="roctet" @click="scrollToTop"></div>
     </div>   
</template>
<script>
    export default {
       methods: {
    scrollToTop () {
      const iscroll = this.$refs.iscroll
      iscroll.scrollTo(0, 0, 100)
      iscroll.refresh()
      console.log(this.$refs.iscroll)
    }
  }
    }
</script>
<style lang="scss" scoped>
.roctet{
        width:50px;
        height:50px;
        border-radius:50px;
        border:1px solid #888;
        position:fixed;
        bottom:80px;
        right:30px;
        z-index:99999;
    }
.scroll-view {
      /* -- Attention: This line is extremely important in chrome 55+! -- */
      touch-action: none;
      /* -- Attention-- */
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
  
</style>
