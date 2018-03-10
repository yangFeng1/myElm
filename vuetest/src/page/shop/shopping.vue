<template>
  <div>
     
      <div class="fl left">
        <iscroll-view   class="scroll-view">
        <ul>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
          <li>热销榜</li>
        </ul>
        </iscroll-view>
      </div>

      <div class="fr right">
         <iscroll-view   class="scroll-view1">
          <p><span>热销榜</span><span>大家喜欢吃，才叫真的好吃</span></p>
        <ul>
          <li>
            <img src="http://cangdu.org:8001/img/16131dbcf603598.jpg">
            <div class="shopInfo">
              <h4>sadsa</h4>
              <p>111</p>
              <p><span>月售622份</span><span>好评率44%</span></p>
              <div><span>￥20</span><span>起</span><span>选规格</span></div>
            </div>
          </li>
        </ul>
          </iscroll-view>
      </div>

  </div>
</template>
<script type="text/javascript">
	export default {
	  methods: {
	    log (iscroll) {
	      console.log(iscroll)
	    }
	  }
	}
</script>
<style lang="scss"  scoped>
.right{
  width: 70%;
  background: #fff;
  p:nth-of-type(1){
    padding: 10px;
    height: 50px;
    span:nth-of-type(1){
      font-size: 16px;
      font-weight: 900;
      color: #666;
      line-height: 40px;
    }
    span:nth-of-type(2){
      font-size: 12px;
      color: #999;
      margin-left: 20px;
    }
  }
  li{
    height: 200px;
    border-bottom: 0.025rem solid #ededed;
    background: #fff;
    img{
      width: 50px;
      height: 50px;
      float: left;
    }
    .shopInfo{
      margin-left: 10px;
      float: left;
      h4{
        font-weight: 900;
      }
      p:nth-of-type(1){
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.left{
  width: 90px;
  li{
    border-bottom: 0.025rem solid #ededed;
    padding: 16px 7px;
    text-align: center;
    font-size: 15px;
    color: #666;
  }
}




	/* -- Attention: This line is extremely important in chrome 55+! -- */
.scroll-view {
   width: 90px;
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top:160px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.scroll-view1 {
   width: 280px;
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top:160px;
  bottom: 0;
  right: 0;
  overflow: hidden;
 
}
</style>
