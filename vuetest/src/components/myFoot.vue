<template>
    <div>
        <div id="food">
            <ul>
                <li class="elm">
                        <svg class="icon fl" aria-hidden="true">
                                <use xlink:href="#icon-changyonglogo40"></use>
                        </svg>
                        <p>外卖</p>
                </li>
                <li class="search">
                        <svg class="icon fl" aria-hidden="true">
                                <use xlink:href="#icon-3sousuo2"></use>
                        </svg>
                        <p>搜索</p>
                        
                </li>
                <li class="indent">
                        <svg class="icon fl" aria-hidden="true">
                                <use xlink:href="#icon-icondd1"></use>
                        </svg>
                        <p>订单</p>
                        
                </li>
                <li class="mine">
                        <svg class="icon fl" aria-hidden="true">
                                <use xlink:href="#icon-myhome"></use>
                        </svg>
                        <p>我的</p>
                        
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #food {
        width: 100%;
        height: 45px;
        position: fixed;
        bottom: 0px;
        z-index: 99999;
        background: #fff;
        li {
            width: 25%;
            float: left;
            text-align: center;
            color: #333;
            svg {
                margin-left: 35px;
                font-size: 18px;
                /* color: #333; */
            }
            p {
                margin-top: 22px;
                text-align: center;
                color: #333;
                font-size: 14px;
            }
        }
    }
</style>
<script>
    export default {
        name: 'fooder'
    }
</script>