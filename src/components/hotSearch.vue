<template>
    <div class="history_class">
        <div v-show="seeHistory">
            <div class="search_history">
                <span class="text_history">搜索历史</span>
                <span class="delete" @click="delHistory()">
                    <img src="@/assets/images/删除.png" width="20px" height="20px" slot="清除" />
                    清除
                </span>
            </div>
            <div class="button_box">
                <van-button v-for="(item,index) in history" :key="index">{{item}}</van-button>
            </div>
        </div>
        <div class="hot_class">
            <div class="hot_search">
                <span class="text_history">热门搜索</span>
                <span class="refresh" @click="refresh()">
                    <img src="@/assets/images/刷新.png" width="20px" height="20px" slot="刷新" />刷新
                </span>
            </div>
            <div class="main_box">
                <div class="hot_search_info">
                    <div class="img_icon">
                        <img src="@/assets/images/景点.png" width="20px" height="20" />
                        <hr size="100" color="#ccc" />
                    </div>
                    <div class="content" v-for="(nav,ol) in cutscenics" :key="ol">
                        <div class="content_text">
                            <span>{{nav.content}}</span>
                            <hr style="border:1px dashed #ccc" size="30" />
                        </div>
                        <div class="content_text">
                            <span>{{nav.add}}</span>
                            <hr style="border:1px dashed #ccc" size="30" />
                        </div>
                    </div>
                </div>
                <hr style="margin-top:-10px;" />
                <div class="hot_address">
                    <div class="img_icon">
                        <img src="@/assets/images/城市.png" width="20px" height="20" />
                        <hr size="40" color="#ccc" />
                    </div>
                    <div class="content" v-for="(nav,ol) in cutscenics" :key="ol">
                        <div class="content_text">
                            <span>{{nav.address}}</span>
                            <hr style="border:1px dashed #ccc" size="30" />
                        </div>
                    </div>
                </div>
                <div style="background:#fff;margin-top:-10px;height:60px;">
                    <van-button type="default" style="width:80%;margin-left:10%;">搜索身边热门景点</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            history: "",
            //分割数据
            cutscenics: [], //存放三个对象
            num2: "", // 用来放三个随机数
            arr: [], // 用来放三个随机数的数组，用来循环
            seeHistory: false,
            scenics: [
                { id: 1, content: "华夏城", add: "迪斯尼", address: "威海" },
                { id: 2, content: "千佛山", add: "刘公岛", address: "杭州" },
                { id: 3, content: "动物园", add: "成山头", address: "深圳" },
                { id: 4, content: "鸡鸣岛", add: "定远舰", address: "聊城" },
                { id: 5, content: "幸福门", add: "养马岛", address: "济南" },
                { id: 6, content: "东昌湖", add: "威高广场", address: "莘县" },
                { id: 7, content: "大明湖", add: "摩天轮", address: "张寨" },
                { id: 8, content: "雁塔", add: "仙姑顶", address: "朝城" },
                { id: 9, content: "趵突泉", add: "海驴岛", address: "妹仲" },
                { id: 10, content: "黑虎泉", add: "石岛赤山", address: "张楼" }
            ]
        };
    },
    mounted() {
        this.history = localStorage.getItem("searchWord");
        if (this.history) {
            this.history = this.history.split(",");
            this.seeHistory = true; //将字符串转成数
        }
        for (var i = 0; i < 3; i++) {
            this.cutscenics.push(this.scenics[i]);
        }
    },
    watch: {
        seeHistory(newVlaue, oldValue) {
            if (newVlaue) {
                this.seeHistory = true;
            } else {
                this.seeHistory = false;
            }
        }
    },
    methods: {
        delHistory() {
            localStorage.removeItem("searchWord");
            this.seeHistory = false;
        },
        refresh() {
            this.cutscenics = [];
            this.num2 = "";
            this.arr = [];
            while (this.arr.length < 3) {
                let num = parseInt(Math.random() * 9); // 随机出三个0-9之间的随机数
                if (this.arr.indexOf(num) == -1) {
                    // 获得不重复的三个数
                    this.arr.push(num);
                    this.num2 = num;
                    this.cutscenics.push(this.scenics[this.num2]); // 将随机数当作下标来便利data里的内容
                }
            }
        }
    }
};
</script>
<style lang="stylus" scoped>
.history_class {
    width: 100%;

    .search_history {
        background: #F0F5F6;
        height: 40px;
        line-height: 40px;
        color: #A9A9A9;
        padding-left: 10px;
        display: flex;

        // width :100%;
        .delete {
            padding-left: 58% !important;
            display: flex;
            color: #6492FE;

            img {
                display: block;
                padding-top: 10px !important;
            }
        }
    }

    .button_box {
        background-color: #ffffff;
        width: 100%;
        height: 100px;

        .van-button {
            margin: 3px;
        }
    }

    .hot_class {
        padding-top: 10px;

        // padding-left:10px;
        .hot_search {
            width: 100%;
            background: #F0F5F6;
            height: 40px;
            line-height: 40px;
            color: #A9A9A9;
            display: flex;

            .refresh {
                padding-left: 58%;
                display: flex;
                color: #6492FE;

                img {
                    display: block;
                    padding-top: 10px !important;
                }
            }
        }

        .hot_search_info {
            display: flex;
            height: 120px;
            background: white;
            padding-top: 20px;

            .img_icon {
                height: 40px;
                display: flex;

                img {
                    margin-top: 35px;
                    margin-right: 10px;
                }
            }

            .content {
                margin-left: 20px;
                margin-top: 10px;
                display: flex;
                flex-flow: column;

                .content_text {
                    display: flex;

                    span {
                        margin-right: 10px;
                        margin-top: 14px;
                    }
                }
            }
        }

        .hot_address {
            background: white;
            height: 80px;
            display: flex;

            .img_icon {
                height: 40px;
                display: flex;

                img {
                    margin-top: 20px;
                    margin-right: 10px;
                }
            }

            .content {
                margin-left: 20px;
                margin-top: 5px;

                // display: flex;
                // flex-flow: column;
                .content_text {
                    display: flex;

                    span {
                        margin-right: 10px;
                        margin-top: 14px;
                    }
                }
            }
        }
    }
}
</style>