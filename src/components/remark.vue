<template>
    <div class="remark">
        <div class="remark_text">用户评论</div>

        <van-cell v-for="(item,index) in msginfo" :key="index">
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
                <div class="title">
                    <img :src="item.img" height="40px;" style="border-radius:20px" />
                    <div class="title_center">
                        <span>{{item.account}}</span>
                        <span>{{item.description}}</span>
                    </div>
                    <div class="title_right">
                        <span>{{item.grade}}分</span>
                        <span>{{item.satisfaction}}</span>
                    </div>
                </div>
                <hr />
                <van-cell class="group">{{item.content}}</van-cell>
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msginfo: [
                {
                    id: 0,
                    img:
                        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3721990951,2750770129&fm=26&gp=0.jpg",
                    account: 2457748545,
                    description: "2017年8月7号出行，2017年8月10号发表",
                    grade: 5,
                    satisfaction: "非常满意",
                    content:
                        "[导游服务好] [酒店赞] [行程安排合理] 都不错 都很好 就是大巴车很一般"
                },
                {
                    id: 1,
                    img:
                        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2064503480,296739193&fm=26&gp=0.jpg",
                    account: 2581234586,
                    description: "2017年8月19号发表",
                    grade: 5,
                    satisfaction: "非常满意",
                    content:
                        "[导游服务好] [酒店赞] [行程安排合理] 都不错 都很好 "
                }
            ]
        };
    }
};
</script>
<style lang="stylus" scoped>
.remark {
    width: 100%;
    /* background: #cccccc !important; */
    margin-top: 20px;
    margin-bottom: 10px;
  
    .remark_text {
        color: #cccccc;
        padding-left: 10px;
        padding-top: 10px;
        background: white;
    }

    .van-cell {
        width: 100%;
        padding-bottom :10px;
        // margin-bottom:20px;
        .title {
            display: flex;
            height: 50px;
            width: 100%;
            margin: 0 auto;

            img {
                width: 10%;
            }

            .title_center {
                display: flex;
                flex-flow: column;
                font-size: xx-small;
                padding-left: 1%;
                height: 20px !important;
                width: 70%;
            }

            .title_right {
                display: flex;
                flex-flow: column;
                color: #FF890D;
                font-size: xx-small;
                padding-left: 2%;
                width: 17%;
            }
        }

        hr {
            border: none;
            background-color: #cccccc;
            height: 1px;
        }
    }
}
</style>