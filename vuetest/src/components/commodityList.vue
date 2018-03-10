<template>
<div>
   <!-- <iscroll-view  ref="iscroll" class="scroll-view"> -->
        <div class="merchant clear">


                <h4>附近商家</h4>
                   
                <ul>
               <router-link v-for="item in merchant"  :to="{path:'shop',query:{id:item.id}}">
                    <li >
                        <img :src="'http://cangdu.org:8001/img/'+item.image_path" alt="" class="fl">
                        <div class="right fl">
                            <div><span>品牌</span> <span>{{item.name}}</span><span>保准票</span></div>
                            <div><span>{{item.rating}}</span><span>月售{{item.recent_order_num}}单</span><span>准时达</span><span>蜂鸟专送</span></div>
                            <div><span>￥20起送/配送费约￥5</span><span>{{item.order_lead_time}}</span><span>{{item.distance}} / </span></div>
                        </div>
                    </li>
                </router-link>

                </ul>
                
                    
        </div>
       <!-- </iscroll-view> -->
          <!-- <div class="roctet" @click="scrollToTop"></div> -->
     </div>   
</template>
<script>
    export default {
        data() {
            return {
                navDataFirst: [],
                navDataSecond: [],
                merchant: []
            }
        },
        created() {
            this.$http.get('http://localhost:8000/v2/index_entry?geohash=22.539797,114.055028&group_type=1&flags[]=F').then((res) => {
                this._data.navDataFirst = res.body.slice(0, 8);
                this._data.navDataSecond = res.body.slice(8, 16);
                // console.log(res.body)
            })
            this.$http.get('http://localhost:8000/shopping/restaurants?latitude=30.52199&longitude=117.09443&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then((res) => {
                console.log(res.body)
                this._data.merchant = res.body
            })
        },
        methods:{
             scrollToTop () {

              const iscroll = this.$refs.iscroll;
              iscroll.refresh();
              // iscroll.scrollTo(110, 110, 3000);
              iscroll.refresh();
            },
             log (iscroll) {
              // console.log(iscroll);
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
      top: 260px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .merchant {
        margin-top: 10px;
        background: #fff;
        border-top: 1px solid #e4e4e4;
        padding: 10px 0px 40px 10px;
        /*position: absolute;*/
        /*height:500px;*/
        /*overflow-y: scroll;*/
        h4 {
            font-size: 14px;
            color: #999;
            margin-left: 20px;
        }
        ul{
            background: #fff;
        }
        li {
            height: 105px;
            border-bottom: 1px solid #f1f1f1;
            padding: 16px 10px 16px 0px;
            font-size: 12px;
            img {
                width: 64px;
                height: 64px;
            }
            .right {
                padding-left: 10px;
                width: 81%;
                div:nth-of-type(1) {
                    span:nth-of-type(1) {
                        color: #333;
                        font-size: 12px;
                        background: #ffd930;
                        border-radius: 3px;
                        padding: 0px 3px 0px 3px;
                        font-weight: 900;
                    }
                    span:nth-of-type(2) {
                        font-size: 14px;
                        font-weight: 900;
                        margin-left: 3px;
                    }
                    span:nth-of-type(3) {
                        font-size: 12px;
                        color: #999;
                        float: right;
                    }
                }
                div:nth-of-type(2) {
                    margin-top: 10px;
                    font-size: 12px;
                    span:nth-of-type(1) {
                        color: #ff6000;
                    }
                    span:nth-of-type(2) {
                        color: #999;
                        margin-left: 20px;
                    }
                    span:nth-of-type(4) {
                        background: #3190e8;
                        color: #fff;
                        border: 1px solid #3190e8;
                        border-radius: 2px;
                        -webkit-transform: scale(0.733);
                        float: right;
                        padding: 1px 2px;
                        margin-right: -12px;
                    }
                    span:nth-of-type(3) {
                        color: #3190e8;
                        border: 1px solid #3190e8;
                        border-radius: 2px;
                        -webkit-transform: scale(0.733);
                        float: right;
                        padding: 1px 2px;
                        margin-right: -6px;
                    }
                }
                div:nth-of-type(3) {
                    margin-top: 10px;
                    span:nth-of-type(1) {
                        color: #666;
                    }
                    span:nth-of-type(2) {
                        float: right;
                        color: #3190e8;
                    }
                    span:nth-of-type(3) {
                        float: right;
                        color: #999;
                    }
                }
            }
        }
    }
</style>
