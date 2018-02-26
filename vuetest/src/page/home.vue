<template>
    <div>
        <div class="top">
            <span class="URL">ele.me</span>
            <span class="person"></span>
        </div>
        <div class="city_nav">
           <div class="city_tip">
                <span>当前定位城市 :</span>
                <span class="fr">定位不准时，请在城市列表中选择</span>
           </div>
           <div class="city_recommend">
               <span>{{guessCity}}</span>
               <span class="fr">></span>
           </div>
           <div class="city_hot clear">
                <div class="title">热门城市</div>
                <ul>
                    <li v-for="item in hotCity">{{item.name}}</li>
                </ul>
           </div>
           <div class="city_group clear">
                <div class="item clear" v-for="(value,key,index) in groupcity">
                    <h4>{{key}}</h4>
                    <ul>
                        <li v-for="item in value" :uid="item.id">{{item.name}}</li>
                    </ul>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                guessCity: '',
                hotCity: '',
                groupcity: ''
            }
        },
        created() {
            this.$http.get("http://localhost:8000/v1/cities?type=guess").then((res) => {
                console.log(res)
                this._data.guessCity = res.body.name
            });
            this.$http.get("http://localhost:8000/v1/cities?type=hot").then((res) => {
                //  console.log(res.body)
                this._data.hotCity = res.body
            });
            this.$http.get("http://localhost:8000/v1/cities?type=group").then((res) => {
                // console.log(res.data)
                function objKeySort(obj) { //排序的函数
                    var newkey = Object.keys(obj).sort();　　 //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
                    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
                    for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
                        newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
                    }
                    return newObj; //返回排好序的新对象
                }
                var obj = objKeySort(res.data)
                this._data.groupcity = obj
            });

        }
    }
</script>
<style lang="scss" scope>
    .top {
        background: #3190e8;
        height: 45px;
        span {
            color: #fff;
        }
        .URL {
            padding-left: 10px;
            line-height: 50px;
        }
    }
    
    .city_nav {
        .city_tip {
            height: 43px;
            padding: 10px 10px 0px;
            font-size: 14px;
            line-height: 33px;
            border-bottom: 1px solid #e4e4e4;
            background: #fff;
            span:nth-of-type(1) {
                color: #666;
            }
            span:nth-of-type(2) {
                color: #9f9f9f;
                font-weight: 900;
            }
        }
        .city_recommend {
            height: 42px;
            line-height: 42px;
            font-size: 19px;
            border-bottom: 2px solid #e4e4e4;
            background: #fff;
            span:nth-of-type(1) {
                color: #3190e8;
                margin-left: 10px;
            }
            span:nth-of-type(2) {
                padding-right: 10px;
                color: #666;
                font-size: 30px;
            }
        }
        .city_hot {
            margin-top: 10px;
            background: #fff;
            .title {
                height: 33px;
                line-height: 33px;
                font-size: 14px;
                color: #666;
                padding-left: 10px;
                border-top: 2px solid #e4e4e4;
                border-bottom: 1px solid #e4e4e4;
            }
            ul {
                li {
                    float: left;
                    width: 25%;
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
                    color: #3190e8;
                    border-bottom: 0.025rem solid #e4e4e4;
                    border-right: 0.025rem solid #e4e4e4;
                    font-size: 14px;
                }
                li:nth-of-type(4n) {
                    border-right: none;
                }
            }
        }
        .city_group {
            .item {
                margin-top: 10px;
                background: #fff;
                h4 {
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #e4e4e4;
                    padding-left: 10px;
                }
                li {
                    float: left;
                    width: 25%;
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 0.025rem solid #e4e4e4;
                    border-right: 0.025rem solid #e4e4e4;
                    font-size: 14px;
                    overflow: hidden;
                    color: #666;
                }
            }
        }
    }
</style>