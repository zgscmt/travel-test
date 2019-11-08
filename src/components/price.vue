<template>
    <div class="price">
        <div class="text_desc">售票分类</div>

        <van-collapse v-model="activeName" accordion>
            <van-collapse-item icon="gold-coin" title="成人票" name="1">
                <van-collapse v-model="activeName" accordion>
                    <!-- <van-collapse-item icon="coupon-o" title="成人三馆联票" name="5">
                    </van-collapse-item>
                    <van-collapse-item icon="coupon-o" title="成人五馆联票" name="6"></van-collapse-item>-->
                    <van-cell title="成人三馆联票" icon="gold-coin" />
                    <van-cell title="成人五馆联票" icon="gold-coin" />
                </van-collapse>
            </van-collapse-item>
            <van-collapse-item icon="gold-coin" title="学生票" name="2"></van-collapse-item>
            <van-collapse-item icon="gold-coin" title="儿童票" name="3"></van-collapse-item>
            <van-cell title="特惠票" icon="gold-coin" />
        </van-collapse>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: ""
        };
    }
};
</script>
<style lang="stylus" scoped>
.price {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px !important;
    height: 180px;

    .text_desc {
        color: #cccccc;
        background: white;
        padding-left: 10px;
        padding-top: 10px;

    }
    // .van-cell{
    //     padding-bottom:10px !important;
    // }
}
</style>