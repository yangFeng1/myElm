<template>
    <div>
        <div class="top">
            <span class="fl"><</span>
            
            <span class="fr">切换城市</span>
            <p>上海</p>
        </div>
        <div class="city-search">
            <input type="" name="" value="" placeholder="输入学校，商务楼，地址">
            <button type="" >提交</button>
        </div>
        <div class="search_History">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                searchHistory:'搜索历史'
            }
        },
        methods:{
            postpois(){
                
            }
        }
    }
</script>
<style lang="scss" scope>
    .top{
        background: #3190e8;
        height: 45px;
        line-height: 45px;
        color:#fff;
        padding: 0px 10px;
        span{
            color:#fff;
        }
        p{
            font-size:18px;
            font-weight:900;
            text-align:center;
            color:#fff;
        }
    }
    .city-search{
        padding:10px 20px;
       background: #fff;
       margin-top: 10px;
       border-top:1px solid #e4e4e4;
       border-bottom:1px solid #e4e4e4;
        input{
            width:100%;
            height: 35px;
            border:1px solid #e4e4e4;
            border-radius:5px;
            padding-left:5px;
            font-size:16px;
        }
        button{
            width:100%;
            background: #3190e8;
             color:#fff;
             height: 35px;
             margin-top: 10px;
             font-size: 16px;
        }
    }
</style>