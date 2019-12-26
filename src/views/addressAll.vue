<template>
    <div class="address_all">
        <head-search></head-search>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option" @change="changeMessage()" />
            <van-dropdown-item v-model="value1" :options="option2"></van-dropdown-item>
        </van-dropdown-menu>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="address_content" v-for="(item,index) in addressAll" :key="index">
            <van-card :title="item.title" :thumb="item.imgs" @click="jumpaddress(item.title)">
                <div slot="desc" style="margin-top:5px;">
                    <van-rate
                        v-model="item.value"
                        allow-half
                        void-icon="star"
                        void-color="#eee"
                        readonly
                        size="12px"
                    />
                    {{item.remark}}
                </div>
                <div class="price_local" slot="price">
                    <span style="color:#FF890D;width:30%">{{item.price}}起</span>
                </div>

                <div slot="bottom">
                    <van-button
                        type="default"
                        size="mini"
                        style="color:#FF890D; border: 1px solid #FF890D"
                    >赠券</van-button>
                </div>
                <div slot="footer">
                    <span class="location">{{item.location}}</span>
                </div>
            </van-card>
            <van-cell-group>
                <van-cell :title="item.description" :value="item.money" />
                <van-cell class="goroup" :title="item.description2" :value="item.money2" />
            </van-cell-group>
        </div>
          </van-list>
        <!-- 分页 -->
       <!--  <div class="pagination">
            <van-pagination
                style=" margin-top:10px;"
                v-model="currentPage"
                :page-count="2"
                mode="simple"
                @change="pagination"
            />
        </div> -->
       
    </div>
</template>
<script>
import headSearch from "../components/headSearch.vue";
export default {
    components: { headSearch },
    data() {
        return {
            value: 0,
            value1: "a",
            currentPage: 1,
            option: [
                { text: "全部分类", value: 0, icon: "wap-nav" },
                { text: "自然风光", value: 1, icon: "map-marked" },
                { text: "农家度假", value: 2, icon: "star" },
                { text: "游乐场", value: 3, icon: "thumb-circle" },
                { text: "文化古迹", value: 4, icon: "underway" },
                { text: "运动健康", value: 5, icon: "cluster" }
            ],

            option2: [
                { text: "推荐排序", value: "a" },
                { text: "离我最近", value: "b" },
                { text: "人气最高", value: "c" }
            ],
            addressAll:[],
            address: [
                {
                    id: 0,
                    imgs:
                        "https://imgs.qunarzz.com/sight/p0/1507/fa/fa750b3a735af5d6.img.jpg_110x110_99267bb0.jpg",
                    title: "刘公岛（5A）",
                    price: "￥60",
                    value: 5,
                    remark: "2014条评论",
                    location: "威海-环翠区",
                    description: "刘公岛【成人票】 （当天6：00前预定）",
                    description2: "刘公岛【成人票】 （当天14：00前预定）",
                    money: "￥120",
                    money2: "￥160"
                },
                {
                    id: 1,
                    imgs:
                        "https://imgs.qunarzz.com/sight/p0/201405/15/4e713dbe6828f99bea283915f9ea2029.jpg_110x110_4fd233cc.jpg",
                    title: "成山头（4A）",
                    price: "￥20",
                    value: 4,
                    remark: "200条评论",
                    location: "荣成市",
                    description: "【感恩惠民】 成山头+摩天轮成人票",
                    description2: "成山头车辆入园票",
                    money: "￥80",
                    money2: "￥40"
                },
                {
                    id: 2,
                    imgs:
                        "https://imgs.qunarzz.com/tuan/team2/1507/39/09b7c7bdb72f78.jpg_110x110_619f1c4e.jpg",
                    title: "威海华夏城景区（5A）",
                    price: "￥78",
                    value: 4,
                    remark: "200条评论",
                    location: "威海市-环翠区",
                    description: "华夏城成人票",
                    description2: "华夏城儿童票",
                    money: "￥80",
                    money2: "￥50"
                },
                {
                    id: 3,
                    imgs:
                        "https://imgs.qunarzz.com/sight/p0/1807/44/44fb6eb8cfb0ccc7a3.img.jpg_110x110_0ce01258.jpg",
                    title: "威海威高海洋公园",
                    price: "￥120",
                    value: 4,
                    remark: "1540条评论",
                    location: "威海市-环翠区",
                    description: "万圣节 家庭票",
                    description2: "【重阳节专享】 家庭票",
                    money: "￥140",
                    money2: "￥180"
                },
                {
                    id: 4,
                    imgs:
                        "https://imgs.qunarzz.com/sight/p0/1807/44/44fb6eb8cfb0ccc7a3.img.jpg_110x110_0ce01258.jpg",
                    title: "定远舰（3A）",
                    price: "￥120",
                    value: 4,
                    remark: "1840条评论",
                    location: "威海市-环翠区",
                    description: "【成人票】 定远舰门票",
                    description2: "【成人票】刘公岛+环岛车+潜水艇+东红游览区",
                    money: "￥140",
                    money2: "￥180"
                }
            ],
            address2: [
                {
                    id: 0,
                    imgs:
                        "http://img1.qunarzz.com/tuan/team2/1507/d4/7e04ca359e98d3.jpg_110x110_d9f6624c.jpg",
                    title: "鸡鸣岛",
                    price: "￥55",
                    value: 5,
                    remark: "480条评论",
                    location: "荣成市",
                    description: "【成人票】鸡鸣岛往返车票",
                    description2: "【学生票】鸡鸣岛往返车票",
                    money: "￥55",
                    money2: "￥40"
                },
                {
                    id: 1,
                    imgs:
                        "http://img1.qunarzz.com/sight/p0/201305/31/09d2e0a9df3f2990c8d65eac.jpg_110x110_cfbe2346.jpg",
                    title: "摩天岭",
                    price: "￥20",
                    value: 4,
                    remark: "259条评论",
                    location: "西霞口旅游度假区",
                    description: "【提前一天预定】 摩天岭成人票",
                    description2: "【当日可定】 摩天岭成人票",
                    money: "￥50",
                    money2: "￥60"
                },
                {
                    id: 2,
                    imgs:
                        "http://img1.qunarzz.com/sight/p0/1603/a6/a6e13ceda79d75f890.img.jpg_110x110_25c35d9b.jpg",
                    title: "海驴岛",
                    price: "￥20",
                    value: 4,
                    remark: "200条评论",
                    location: "西霞口旅游度假区",
                    description: "海驴岛环岛优惠票（不含登岛）",
                    description2: "海驴岛环岛成人票（不含登岛）",
                    money: "￥60",
                    money2: "￥140"
                },
                {
                    id: 3,
                    imgs:
                        "http://img1.qunarzz.com/sight/p0/1710/68/68da73a9772c495fa3.img.jpg_110x110_7e0aa3d2.jpg",
                    title: "仙姑顶（4A）",
                    price: "￥45",
                    value: 5,
                    remark: "479条评论",
                    location: "威海市",
                    description: "仙姑顶成人票",
                    description2: "仙姑顶双人票",
                    money: "￥50",
                    money2: "￥100"
                },
                {
                    id: 4,
                    imgs:
                        "https://imgs.qunarzz.com/sight/p0/1807/44/44fb6eb8cfb0ccc7a3.img.jpg_110x110_0ce01258.jpg",
                    title: "石岛赤山（3A）",
                    price: "￥125",
                    value: 4,
                    remark: "1185条评论",
                    location: "荣成市",
                    description: "石岛赤山成人票",
                    description2: "石岛赤山双人票",
                    money: "￥125",
                    money2: "￥249.9"
                }
            ]

        };
    },
    mounted(){
        this.addressAll=this.address;
    },
    watch:{
        value(newValue,oldValue){
            if(oldValue){
                  this.addressAll=this.address;
            }
            else{
            this.addressAll=this.address2;
            }
        }
    },
    methods: {
         onLoad(){
            
        },
        onConfirm() {
            this.$refs.item.toggle();
        },
        changeMessage() {
            console.log(this.value)
        },
        jumpaddress(area){
            this.$router.push({path:'./addressInfo',query:{area:area}})
        },
        pagination(page) {
            console.log(page);
        }
    }
};
</script>
<style lang="stylus" scoped>
.address_all {
    width: 100%;
    background:#f5f5f5;
    .address_content {
        width: 100%;

        .van-cell {
            color: #616161;
        }

        .goroup {
            margin-bottom:10px !important;
        }

        .van-cell__title {
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .van-cell__value {
            color: #FF890D;
        }

        .van-card {
            width: 100%;
            background-color: #fff !important;
            font-size: 15px;
            overflow: hidden;

            .price_local {
                margin-top: 5px;
                margin-bottom: 5px;
            }

            .location {
                color: #cccccc;
                font-size: 12px;
                margin-top: -20px;
            }
        }
    }
    .pagination{
        background:#fff;
    }
}
</style>
