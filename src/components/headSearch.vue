<template>
    <div class="head_search">
        <div class="main_box">
            <van-nav-bar left-arrow @click-left="onClickLeft" />

            <form class="box" action="/">
                <van-search
                    v-model="search"
                    placeholder="请输入搜索关键词"
                    @focus="onSearch"
                    @cancel="onCancel"
                />
            </form>

            <div class="po">
                <div @click="selectAddress()">
                    {{address}}
                    <span class="iconfont">
                        <img src="@/assets/images/xiala.png" width="10px" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            address: "威海"
        };
    },

    methods: {
        onSearch() {
            this.$router.push({path:'searchAddress',query:{arae:this.address}});
        },
        searchArea(areas) {
            this.$router.push({ path: "./addressAll", query: { area: areas } });
        },
        onCancel() {},
        onClickLeft() {
            this.$router.go(-1);
            // console.log("初始页面")
        },
        selectAddress() {
            this.$router.push("/selectAddress");
        }
    }
};
</script>

<style lang="stylus" scoped>
.main_box {
    width: 100%;
    display: flex;
    background: #00BCD4 !important;

    .van-nav-bar {
        background: #00BCD4 !important;
        margin: 0 auto;
        line-height: 40px;
    }

    .van-icon-arrow-left:before {
        color: white !important;
    }

    .van-search {
        background: #00BCD4 !important;
        width: 100% !important;
    }

    .box {
        width: 85%;
        margin-left: 10%;
    }

    .po {
        color: white;
        width: 20%;
        text-align: center;
        line-height: 55px;
        margin-right: 2%;
    }
}
</style>>

