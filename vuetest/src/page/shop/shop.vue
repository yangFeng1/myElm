<template>
    <div>
        <div class="top">
            <router-link to="/index"><span class="callback_left fl"><</span></router-link>
            <span class="callback_right fr">></span>
            <img src="http://cangdu.org:8001/img/16018a5c08533.jpeg" alt="" class="fl">
            <h4>演示效果</h4>
            <p>商家配送／分钟送达／配送费¥5</p>
            <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
            <p>满30减5，满60减8（APP专享）</p>
        </div>
        <div class="chose">
            <router-link to="/shop/shopping"><span :class="{'active':shop}" @click="cut('shop','comment')">商品</span></router-link>
           <router-link to="/shop/comment"> <span :class="{'active':comment}" @click="cut('comment','shop')">评论</span></router-link>
        </div>
         <transition name="slide-fade">
         <router-view :id="id"></router-view>
          </transition>
    </div>
</template>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: opacity 1s;
}

.slide-fade-enter, .slide-fade-leave-to
{
  opacity: 0;
}


    .active{
        color: #3190e8;
    }
    .top {
        color:#fff;
         padding:10px;
         background: url('http://cangdu.org:8001/img/16018a5c08533.jpeg');
         position: relative;
        .callback_left{
            font-size:28px;
        color:#fff;
           position:absolute;
           top:0px;
           left:10px;
        }
        .callback_right{
        color:#fff;
        }
        img{
            width:68px;
            height: 68px;
            margin-right:10px;
        }
        h4{
            font-size: 18px;
            color:#fff;
            font-weight: 900;
        }
        p{
        color:#fff;
        font-size: 12px;
        margin-top: 6px;
        }
    }
    .chose{
        height: 50px;
        background: #fff;
        border-bottom: 1px solid #ebebeb;
        span{
            display:inline-block;
            width:49%;
            height: 50px;
            line-height: 50px;
            text-align:center;
        }
    }
</style>
<script>
    export default {
        data(){
            return{
              shop:true,
              comment:false,
              id:''
            }
        },
        created(){
          this._data.id =this.$route.query.id
        },
         methods: {
            callback() {
                this.$router.back(-1)
            },
            cut(one,tow){
              // console.log(this._data[one]+'===='+tow)
              this._data[one] = true;
              this._data[tow] = false;

            }
        }

    }
</script>
