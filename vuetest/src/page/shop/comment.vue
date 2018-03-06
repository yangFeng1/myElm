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
                    <li v-for="item in commentType" class="fl">{{item}}</li>
                </ul>
            </div>
            <div class="commentConent">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                commentType:['全部','全部','全部','全部','全部','全部','全部','全部']
            }
        }
    }
</script>
<style lang="scss" scoped>
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
