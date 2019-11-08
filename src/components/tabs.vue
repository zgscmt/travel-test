<template>
    <div class="tabs">
        <van-grid :column-num="4">
            <van-grid-item @click="$router.push('/addressAll')">
                <img src="../assets/images/景点门票.png" width="50px" />
                <p>景点门票</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/当地游玩.png" width="50px" />
                <p>当地游玩</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/自然风光.png" width="60px" />
                <p>自然风光</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/打卡圣地.png" width="50px" />
                <p>打卡圣地</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/全部.png" width="50px" />
                <p>全部娱乐</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/当地购物.png" width="50px" />
                <p>当地游玩</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/服务信息.png" width="50px" />
                <p>服务信息</p>
            </van-grid-item>
            <van-grid-item>
                <img src="../assets/images/服务定位.png" width="50px" />
                <p>服务定位</p>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="stylus" scoped>
.tabs {
    width: 100%;
    background: #f5f5f5 !important;

    >>>.van-grid-item__content {
        padding: 8px 4px !important;
    }

    p {
        font-size: 10px;
        margin-top: 2px;
    }
}
</style>