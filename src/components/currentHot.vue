<template>
    <div class="current_hot">
        <div>
            <div class="current">
                <span class="text" style="color:#8B8989" >当前城市</span>
                <div class="btn">
                    <van-button type="default" @click="currentArea()">{{current}}</van-button>
                </div>
            </div>
            <div class="hot">
                <span class="text" style="color:#8B8989">热门城市</span>
                <div>
                    <van-button
                        type="default"
                        v-for="(item,index) in hotAddress"
                        :key="index"
                         @click="selectArea(item.address)"
                    >{{item.address}}</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: "威海",
            hotAddress: [
                { id: 0, address: "济南" },
                { id: 1, address: "上海" },
                { id: 2, address: "北京" },
                { id: 3, address: "南京" },
                { id: 4, address: "杭州" },
                { id: 3, address: "苏州" }
            ]
        };
    },
    methods:{
         selectArea(area) {
            this.$router.push({ path: "./addressAll", query: { area: area } });
        },
        currentArea(){
            this.$router.push({ path: "./addressAll", query: { area: this.current } });
        }
    }
};
</script>
<style lang="stylus" scoped>
.current_hot {
    width: 100%;

    .text {
        background-color: #f5f5f5;
        height: 30px;
        line-height: 30px;
    }

    .current {
        display: flex;
        flex-flow: column;
        background: white;

        .btn {
            .van-button {
                width: 80px;
                background-color: white !important;
                margin-top: 3px !important;
                margin-bottom: 3px !important;
                margin-left: 3px !important;
            }
        }
    }

    .hot {
        display: flex;
        flex-flow: column;
        background: white;

        .van-button {
            width: 80px;
            background: white !important;
            margin-left: 3px !important;
            margin-top: 3px !important;
            margin-bottom: 3px !important;
        }
    }
}
</style>