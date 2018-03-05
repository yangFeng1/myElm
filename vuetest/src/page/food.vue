<template>
    <div id="food">
        <nav>
                <div class="top">
                        <span class="callback" @click="callback()"> <</span>
                        <h4>{{foodName}}</h4>
                    </div>
                    <commodityList></commodityList>
        </nav>
    </div>
</template>
<script>
    import commodityList from '../components/commodityList.vue';

    export default {
        data() {
            return {
                foodName: ''
            }
        },
        created() {
            this._data.foodName = this.$route.query.foodName;
        },
        components: {
            commodityList
        },
        methods: {
            callback() {
                this.$router.back(-1)
            }
        }
    }
</script>
<style lang="scss" scoped>
    #food {
        padding-top: 40px;
    }
    
    nav {
        .top {
            height: 40px;
            width: 100%;
            background: #3190e8;
            position: fixed;
            top: 0px;
            color: #fff;
            .callback {
                float: left;
                font-size: 30px;
                color: #fff;
                margin-left: 10px;
            }
            h4 {
                color: #fff;
                text-align: center;
                height: 40px;
                line-height: 40px;
                font-weight: 900;
                font-size: 20px;
            }
        }
    }
</style>