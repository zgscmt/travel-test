<template>
    <div class="where_go">
        <div class="text_font">
            <span class="bgc">周末去哪</span>
        </div>
        <div class="search">
            <van-grid square :column-num="2">
                <van-grid-item v-for="(item,index) in goAddress" :key="index">
                    <img :src="item.image" />
                    <p style="font-size:12px;margin-top:3px;">{{item.content}}</p>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goAddress: [
                {
                    id: 1,
                    image:
                        "http://img0.imgtn.bdimg.com/it/u=388371861,3251178225&fm=11&gp=0.jpg",
                    content: "驾一叶扁舟，寻瓯江往事"
                },
                {
                    id: 2,
                    image:
                        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2982672516,3184808444&fm=26&gp=0.jpg",
                    content: "不负盛夏美好时光，偲浮安逸"
                },
                {
                    id: 3,
                    image:
                        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3967093027,986974731&fm=26&gp=0.jpg",
                    content: "探访游乐园，一部家庭游玩画册"
                },
                {
                    id:4,
                    image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3519933745,2432185189&fm=26&gp=0.jpg",
                    content:"厦门观光，带娃幸福出行"
                }
            ]
        };
    }
};
</script>
<style lang="stylus" scoped>
.where_go {
    width: 100% !important;
    margin-top: 5px;

    .text_font {
        width: 100%;
        height: 35px;
        background: #f5f5f5;
        line-height: 30px;

        span.bgc {
            font-size: 15px;
            margin-left: 10px;
            vertical-align: middle;
        }
    }

    img {
        display: block;
        border-radius: 10px;
        width :90%;
        height:80%;
    }
}
</style>