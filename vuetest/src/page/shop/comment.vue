<template>
    <div>
        <div class="grade clear">
            <div class="left fl">
                <p>4.7</p>
                <p>综合评价</p>
                <p>远高于周围商家76.9</p>
            </div>
            <div class="right fl">
                <p><span>服务态度：</span><span>4.7</span></p>
                <p><span>菜品评价：</span><span>4.7</span></p>
                <p><span>送达时间：</span><span>4.7</span></p>
            </div>
        </div>
        <div class="comment">
            <div class="commentType clear">
                <ul>
                    <li v-for="(item,k) in commentType" class="fl" :class="{'commentActiv':k==index}" @click="selectType(k)">{{item.name}}({{item.count}})</li>
                </ul>
            </div>
            <div class="commentConent">
                <ul>
                    <li class="clear" v-for="item in comment">
                      <img src="http://test.fe.ptdev.cn/elm/elmlogo.jpeg" alt="" class="fl headPortrait">
                      <div class="content">
                        <p><span>{{item.username}}</span><span class="fr">2017-18-29</span></p>
                        <p class="evaluate">{{item.time_spent_desc}}</p>
                        <img  src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg" alt="">
                        <div class="lable">
                          <span v-for="k in item.item_ratings">{{k.food_name}}</span>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
      props: ["id"],
        data(){
            return {
                commentType:'',
                index:0,
                comment:[]
            }
        },
        created(){
          // console.log(this.id)
          this.$http.get("http://localhost:8000/ugc/v2/restaurants/"+this.id+"/ratings/tags").then((res)=>{
            // console.log(res);
            this._data.commentType =res.body
          });
          this.$http.get("http://localhost:8000/ugc/v2/restaurants/"+this.id+"/ratings?has_content=true&offset=0&limit=10&tag_name=").then((res)=>{
            // console.log(res);
            this._data.comment =  res.body
            // console.log(res)
          });
          // console.log(this)
        },
        methods:{
          selectType(index){
            this._data.index = index
          }
        }
    }
</script>
<style lang="scss" scoped>
    .commentConent{
      li{
        padding:10px 10px;
        border-top:1px solid #f1f1f1;
        .headPortrait{
          width:35px;
          height:35px;
          border-radius:50%;
        }
        .content{
          padding-left:55px;
          p{
            margin-top: 5px;
            span{
              font-size:12px;
              color:#666;
            }
          }
          .evaluate{
            color:#666;
            font-size:14px;
          }
          img{
            margin-top: 5px;
            width:70px;
            height:70px;
          }
          .lable{
            margin-top: 5px;
            margin-bottom: 10px;
            span{
              display: inline-block;
              width: 50px;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
              font-size: 14px;
              color:#999;
              padding:3px;
              border:0.025rem solid #ebebeb;
              border-radius:3px;
              margin-bottom: 4px;

            }
          }
        }
      }
    }
    .commentActiv{
      background:#3190e8 !important;
      color:#fff !important;
    }
    .comment{
        margin-top: 10px;
        background: #fff;
        .commentType{
            padding-bottom: 5px;
            li{
                font-size: 15px;
                color: #6d7885;
                padding: 7px;
                background: #ebf5ff;
                border-radius: 3px;
                margin: 5px 0px 0px 5px;
            }
        }
    }
    .grade {
        padding: 20px 0px 20px 30px;
        background: #fff;
        .left{
            p{
                text-align: center;
                margin-top: 3px;
            }
            p:nth-of-type(1){
                font-size: 28px;
                color:#f60;
            }
            p:nth-of-type(2){}
            p:nth-of-type(3){
                font-size: 12px;
                color: #999;
            }
        }
        .right{
            margin-left: 15px;
            p{
                margin-top: 5px;
                font-size: 16px;
                color: #666;
            }
        }
    }
</style>
