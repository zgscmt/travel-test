<template>
    <div class="hot_go">
        <div class="text_font">
            <span class="bgc">热销推荐</span>
        </div>
        <div class="addres_info">
            <van-card
                v-for="(item,index) in address"
                :key="index"
                :desc="item.description"
                :title="item.title"
                :thumb="item.imgs"
            >
                <div slot="tags">
                    <van-button type="default" @click="$router.push({path:'/addressInfo',query:{id:item.id}})">查看详情</van-button>
                </div>
            </van-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            address: [
                {
                    id: 0,
                    description:
                        "武夷山位于不知道什么未知的地方的未知景点，推荐各位有时间可以去看一看",
                    title: "武夷山",
                    imgs:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3294729890,733134834&fm=26&gp=0.jpg"
                },
                {
                    id: 1,
                    description:
                        "故宫传承与华夏几百年间，主要是从明朝开始作为我国的首都，至今为止依然是我国的重要发展城市一线城市",
                    title: "故宫",
                    imgs:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1815424135,692196445&fm=26&gp=0.jpg"
                },
                {
                    id: 2,
                    description:
                        "华夏城传承与华夏几百年，坐落于山东省威海市环翠区，这里地理位置优越，环境适宜，是全国卫生示范城市",
                    title: "华夏城",
                    imgs:
                        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2271204365,3958069672&fm=26&gp=0.jpg"
                },
                {
                    id: 3,
                    description:
                        "天安门传承与华夏几百年，目前一个主要的特色就是每天早晨的升国旗奏国歌，可以说是一个庄重威严的事情",
                    title: "天安门",
                    imgs:
                        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2588098043,2431088778&fm=26&gp=0.jpg"
                }
            ]
        };
    },
    // methods: {
    //     addressInfo(id) {
    //         this.$router.push({path:"/addressInfo",query:{id:id}});
    //     }
    // }
};
</script>
<style lang="stylus" scoped>
.hot_go {
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
}
</style>