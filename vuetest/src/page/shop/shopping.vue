<template>
  <div>
     
      <div class="fl left">
        <iscroll-view   class="scroll-view">
        <ul>
          <li  v-for='(item,i) in title' @click="addClassFun(i)" :class="{active:i==index}">{{item.name}}</li>
        </ul>
        </iscroll-view>
      </div>

      <div class="fr right">
         <iscroll-view   class="scroll-view1">
          <div v-for='item in title'>
              <p class="title"><span>{{item.name}}</span><span>大家喜欢吃，才叫真的好吃</span></p>
              <ul class="clear" v-for="key in item.foods">
                <li>
                  <img :src="'http://cangdu.org:8001/img/'+key.image_path">
                  <div class="shopInfo">
                    <h4>sadsa</h4>
                    <p>111</p>
                    <p><span>月售622份</span><span>好评率44%</span></p>
                    <div class="size"><span>￥20</span><span>起</span><span>选规格</span></div>
                  </div>
                </li>
              </ul>
          </div>
          </iscroll-view>
      </div>
      <div class="shoppCar">
        <span class="carIocn">
          <svg class="icon fl" aria-hidden="true">
                        <use xlink:href="#icon-gouwuche2"></use>
                </svg>
        </span>
        <span class="dispatching fr">
          还差20元起送
        </span>
        <div class="price">
          <p>￥0.00</p>
          <p>配送费5元</p>
        </div>
      </div>
      <div class="modal">
        <div>
          <h4>2222</h4>
          <div>
            <span>默认</span>
            <span>20</span>
          </div>
          <div>
            <span>￥20</span>
            <span>加入购物车</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
	export default {
    data (){
      return {
        title:[],
        index:0
      }
    },
    created(){
      this.$http.get('http://localhost:8000/shopping/v2/menu?restaurant_id=1').then((reslut)=>{
        console.log(reslut.body);
        this.title = reslut.body;
        this.$children[0].refresh();
        this.$children[1].refresh();
      })
    },
    mounted () {
      console.log(this);

    },
	  methods: {
	    log (iscroll) {
	      console.log(iscroll);
	    },
      addClassFun(i){
        console.log(this);
        this.index = i;
      }
	  }
	}
</script>
<style lang="scss"  scoped>
.shoppCar{
  background: #333;
  height: 45px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  .carIocn{
    display: block;
    width: 55px;
    height: 55px;
    padding:10px;
    position: absolute;
    border: 3px solid #444;
    border-radius: 50%;
    text-align: center;
    left: 15px;
    bottom:8px;
    background: #333;
    svg{
      color:#fff;
      font-size:30px;
    }
  }
  .price{
    padding-left: 80px;
    p{
      color: #fff;
    }
    p:nth-of-type(1){
      font-weight: 900;
      font-size: 18px;
    }
    p:nth-of-type(2){
      font-size: 12px;
      margin-top: 3px;
    }
  }
  .dispatching{
    color: #fff;
    background: #535356;
    width: 117px;
    height: 100%;
    line-height: 45px;
    text-align: center;
  }
}
.active{
  background: #fff !important;
  font-weight: 900 !important;
}
.right{
  width: 70%;
  background: #fff;
  padding-bottom: 50px;
  ul:last-child{
     padding-bottom: 50px;
  }
 .title{
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
    height: 160px;
    border-bottom: 0.025rem solid #ededed;
    background: #fff;
    padding: 10px 9px;
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
        margin-top: 5px;
      }
      p:nth-of-type(2){
        font-size: 12px;
        margin-top: 5px;
        span{
          color: #333;
        }
      }
    }
    .size{
      margin-top: 35px;
      span:nth-of-type(1){
        color: #f60;
      }
      span:nth-of-type(2){
        color: #f60;
      }
      span:nth-of-type(3){
        float: right;
        padding: 3px 4px;
        background: #3190e8;
        color: #fff;
        text-align: center;
        font-size: 12px;
        border-radius: 5px;
      }
    }
  }
}
.left{
  width: 90px;
  ul{
     padding-bottom: 50px;
  }
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
