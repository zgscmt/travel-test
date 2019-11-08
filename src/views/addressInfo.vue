<template>
    <div class="address_info">
        <head-search></head-search>
        <div class="head_class">
            <van-swipe :show-indicators="false">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
            <div class="text">
                <span>{{message}}</span>
                <div class="iconfont">
                    <img src="../assets/images/tupian.png" />
                    <span>{{num}}</span>
                </div>
            </div>
        </div>
        <div class="content_class">
            <div class="description">
                <span style="color:#8B8989" class="detail_desc">{{desc}}</span>
                <span class="detail_money">￥{{money}}</span>
            </div>
            <div class="discount" style="marign-top:20px">
                <span class="box_money">现金红包</span>
                <span class="box_money">专享红包</span>
                <span class="box_money">代金券</span>
            </div>
            <discount></discount>
            <span style="color:#cccccc;font-size:15px;margin-right:10px;margin-left:10px;">评价预览</span>
            <van-rate v-model="value" readonly allow-half void-icon="star" void-color="#eee" />
        </div>

        <price></price>
        <remark></remark>
        <bottom></bottom>
    </div>
</template>
<script>
import headSearch from "../components/headSearch.vue";
import bottom from "../components/bottom.vue";
import discount from "../components/discount.vue";
import price from "../components/price.vue";
import remark from "../components/remark.vue";
export default {
    components: { headSearch, bottom, discount, price, remark },
    data() {
        return {
            message: "故宫（AAAA景区）",
            num: 4,
            //具体位置
            images: [
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1598006635,1380721473&fm=26&gp=0.jpg",
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2407733532,2562889344&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2107872343,2242869999&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2107872343,2242869999&fm=26&gp=0.jpg"
            ],
            desc:
                "威海出发-跟团游，五星金秋|碧桂园独栋别墅|张家界凤凰|天安门玻璃桥|故宫游+魅力表演 ",
            money: "999起/人",
            value: 2.5
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            // 通过接口获取   某个地址的值  参数id唯一值
        }
    }
};
</script>
<style lang="stylus" scoped>
.address_info {
    width: 100%;
    background:#f5f5f5;
    .van-swipe-item {
        width: 100%;
    }

    img {
        display: block;
        height: 200px;
        width: 100%;
        z-index: 1;
    }

    .text {
        display: flex;
        width: 100%;
        margin-top: -35px !important;
        z-index: 10;

        span {
            z-index: 10;
            color: white;
            width: 70%;
            margin-left: 5%;
        }

        .iconfont {
            display: flex;
            width: 25%;
            margin-left: 35%;

            img {
                display: block;
                width: 15px;
                height: 15px;
                padding-right: 3px;
            }

            span {
                z-index: 10;
                color: white;
            }
        }
    }

    .content_class {
        background: white !important;
        margin-top: 15px;
        border-radius: 20px;
        width: 100%;
        height: 200px;
        z-index: 1000;

        .description {
            width: 100%;
            z-index: 20000;
            padding-top: 15px;
            display: flex;
            flex-flow: column;

            .detail_desc {
                width: 90%;
                z-index: 20000;
                font-size: 18px;
                margin: 0 auto;
            }

            .detail_money {
                color: #FF890D;
                padding-left: 20px;
                padding-top: 10px;
            }
        }

        .discount {
            width: 100%;
            display: flex;
            padding-top: 8px;

            .box_money {
                border: 1px solid #FF890D;
                color: #FF890D;
                margin-left: 20px;
            }
        }
    }
}
</style>