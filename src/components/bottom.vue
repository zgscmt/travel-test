<template>
    <div class="bottom">
        <div class="text_content">
            <span>出门想去哪儿，我们帮你做绝定</span>
            <span>联系电话：0635-668958</span>
            <span class="last">违反举报邮箱：21345698748@qq.com</span>
        </div>
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
.bottom {
    width: 100%;
    margin-bottom: 20px !important;
    margin-top: 5px;
    background: #fff;

    .text_content {
        padding-top:10px;
        span {
            font-size: 13px;
            color: #cccccc;
            text-align: center;
            padding-left: 10px;
        }

        .last {
            padding-left: 20% !important;
            margin: 0 auto;
        }
    }
}
</style>