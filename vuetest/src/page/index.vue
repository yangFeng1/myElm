<template>
    <div id="index">
        <div class="top">
                <svg class="icon fl" aria-hidden="true">
                        <use xlink:href="#icon-search"></use>
                </svg>
                <svg class="icon fr" aria-hidden="true">
                        <use xlink:href="#icon-my"></use>
                </svg>


                <p>福田地铁站</p>
        </div>
        <div class="swiper-container content">
            <div class="swiper-wrapper Carousel">
                <div class="swiper-slide first">
                    <ul>
                        <router-link v-for="item in navDataFirst"  :to="{path:'food',query:{foodName:item.title}}">
                                <li>
                                        <img :src="'https://fuss10.elemecdn.com'+item.image_url"  alt="">
                                        <p>{{item.title}}</p>
                                    </li>
                        </router-link>

                    </ul>
                </div>
                <div class="swiper-slide second">
                        <ul>
                                <router-link v-for="item in navDataSecond"  :to="{path:'food',query:{foodName:item.title}}">
                                <li >
                                    <img :src="'https://fuss10.elemecdn.com'+item.image_url"  alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </router-link>
                            </ul>

                </div>
            </div>
        </div>

        <commodityList></commodityList>
        <myFoot></myFoot>
    </div>

</template>
<script>
    import '../common/js/iconfont.js';
    // import Swiper from '../common/js/swiper.js';
    import Swiper from 'swiper';
    import myFoot from '../components/myFoot.vue';
    import commodityList from '../components/commodityList.vue';
    export default {
        data() {
            return {
                navDataFirst: [],
                navDataSecond: [],
                merchant: []
            }
        },
        components: {
            myFoot,
            commodityList
        },
        created() {
            this.$http.get('http://localhost:8000/v2/index_entry?geohash=22.539797,114.055028&group_type=1&flags[]=F').then((res) => {
                this._data.navDataFirst = res.body.slice(0, 8);
                this._data.navDataSecond = res.body.slice(8, 16);
                // console.log(res.body)
            })

        },
        mounted() {
            new Swiper('.swiper-container', {
                // autoplay: true, //可选选项，自动滑动
            })
        }
    }
</script>
<style lang="scss" scoped>
    #index {
        padding-top: 45px;
        padding-bottom: 45px;
    }

    .top {
        height: 45px;
        background: #3190e8;
        position: fixed;
        width: 100%;
        top: 0px;
        z-index: 9999;
        .icon {
            color: #fff;
            font-size: 22px;
        }
        .icon:nth-child(1) {
            margin: 11px 0px 0px 13px;
        }
        .icon:nth-child(2) {
            margin: 11px 12px 0px 0px;
            font-weight: 900;
        }
        p {
            height: 45px;
            line-height: 45px;
            /* font-weight: 900; */
            color: #fff;
            text-align: center;
            font-size: 18px;
        }
    }

    .content {
        height: 210px;
        width: 100%;
        border-bottom: 1px solid #e4e4e4
    }

    .Carousel {
        height: 210px;
        width: 100%;
        background: #fff;
        li {
            width: 25%;
            height: 100px;
            float: left;
            img {
                width: 42px;
                height: 42px;
                margin: 0 auto;
                margin: 12px 0px 2px 23px;
            }
            p {
                font-size: 13px;
                text-align: center;
                color: #666
            }
        }
        .first {
            height: 210px;
            background: #fff;
        }
        .second {
            height: 210px;
            background: #fff;
        }
    }

    @import 'swiper/dist/css/swiper.min.css';
</style>
