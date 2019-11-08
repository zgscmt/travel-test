<template>
    <div class="select_address">
        <div class="header">
            <div class="header_top">
                <van-nav-bar left-arrow @click-left="onClickLeft" />
                <span>城市搜索</span>
            </div>

            <index-bar></index-bar>
        </div>
    </div>
</template>
<script>
import indexBar from "../components/indexBar.vue";
export default {
    name: "selectAdderss",
    components: { indexBar },
    data() {
        return {};
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
};
</script>
<style lang="stylus" scoped>
.select_address {
    width: 100%;

    .header {
        background: #00BCD4 !important;

        .header_top {
            display: flex;
            width: 100%;

            .van-icon-arrow-left:before {
                color: white !important;
            }

            span {
                margin-left: 40%;
                line-height: 50px;
            }
        }

        .box {
            width: 100%;
        }
    }
}
</style>
