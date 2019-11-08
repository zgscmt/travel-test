<template>
    <div class="head_search">
        <div class="main_box">
            <form class="box" action="/">
                <van-nav-bar left-arrow @click-left="onClickLeft" />
                <van-search
                    v-model="search"
                    placeholder="请输入城市名或者拼音"
                    @search="onSearch"
                    @cancel="onCancel"
                />
                <div class="po">
                    <div @click="selectAddress()">
                        {{address}}
                        <span class="iconfont">
                            <img src="@/assets/images/xiala.png" width="10px" />
                        </span>
                    </div>
                </div>
            </form>
            <ul v-for="(list,index) in searchData" :key="index" class="cell_box">
                <li>
                    <van-cell @click="searchArea(list.name)">{{list.name}}</van-cell>
                </li>
            </ul>
        </div>
        <hot-search></hot-search>
    </div>
</template>

<script>
import hotSearch from "../components/hotSearch.vue";
export default {
    components: { hotSearch },
    data() {
        return {
            search: "",
            address: "威海",
            searchData: "",
            barSee: false,
            allDatas: "",
            arrData: "",
            letters: [
                {
                    letter: "A",
                    areas: [
                        { id: 56, name: "阿贝", spell: "abei" },
                        { id: 57, name: "阿克苏", spell: "akesu" }
                    ]
                },
                {
                    letter: "B",
                    areas: [
                        { id: 58, name: "北京", spell: "beijing" },
                        { id: 59, name: "保定", spell: "baoding" }
                    ]
                },
                {
                    letter: "C",
                    areas: [
                        { id: 60, name: "朝城", spell: "chaocheng" },
                        { id: 61, name: "潮汕", spell: "chaoshan" }
                    ]
                },
                {
                    letter: "D",
                    areas: [
                        { id: 62, name: "长丰", spell: "changfeng" },
                        { id: 63, name: "曹县", spell: "caoxian" }
                    ]
                },
                {
                    letter: "E",
                    areas: [
                        { id: 64, name: "恩施", spell: "enshi" },
                        { id: 65, name: "恩平", spell: "enping" }
                    ]
                },
                {
                    letter: "F",
                    areas: [
                        { id: 66, name: "佛山", spell: "foshan" },
                        { id: 67, name: "丰都", spell: "fengdu" }
                    ]
                },
                {
                    letter: "G",
                    areas: [
                        { id: 68, name: "广州", spell: "guangzhou" },
                        { id: 69, name: "贵州", spell: "guizhou" }
                    ]
                },
                {
                    letter: "H",
                    areas: [
                        { id: 70, name: "哈尔滨", spell: "haerbin" },
                        { id: 71, name: "邯郸", spell: "handan" }
                    ]
                },
                {
                    letter: "J",
                    areas: [
                        { id: 72, name: "济南", spell: "jinan" },
                        { id: 73, name: "济宁", spell: "jining" }
                    ]
                },
                {
                    letter: "K",
                    areas: [
                        { id: 74, name: "开封", spell: "kaifeng" },
                        { id: 75, name: "昆仑", spell: "kunlun" }
                    ]
                },
                {
                    letter: "L",
                    areas: [
                        { id: 76, name: "莱阳", spell: "laiyang" },
                        { id: 77, name: "莱州", spell: "laizhou" }
                    ]
                },
                {
                    letter: "M",
                    areas: [
                        { id: 78, name: "妹仲", spell: "meizhou" },
                        { id: 79, name: "孟州", spell: "mengzhou" }
                    ]
                },
                {
                    letter: "N",
                    areas: [
                        { id: 80, name: "南京", spell: "nanjing" },
                        { id: 81, name: "南乐", spell: "nanle" }
                    ]
                },
                {
                    letter: "P",
                    areas: [
                        { id: 84, name: "攀枝花", spell: "panzhihua" },
                        { id: 85, name: "莆田", spell: "putian" }
                    ]
                },
                {
                    letter: "Q",
                    areas: [
                        { id: 86, name: "青岛", spell: "qingdao" },
                        { id: 87, name: "齐河", spell: "qihe" }
                    ]
                },
                {
                    letter: "R",
                    areas: [
                        { id: 88, name: "日照", spell: "rizhao" },
                        { id: 89, name: "荣成", spell: "rongcheng" }
                    ]
                },
                {
                    letter: "S",
                    areas: [
                        { id: 90, name: "深圳", spell: "shenzhen" },
                        { id: 91, name: "沈阳", spell: "shenyang" }
                    ]
                },
                {
                    letter: "T",
                    areas: [
                        { id: 92, name: "天津", spell: "tianjin" },
                        { id: 93, name: "泰安", spell: "taian" }
                    ]
                },

                {
                    letter: "W",
                    areas: [
                        { id: 98, name: "潍坊", spell: "weifang" },
                        { id: 99, name: "威海", spell: "weihai" }
                    ]
                },
                {
                    letter: "X",
                    areas: [
                        { id: 100, name: "厦门", spell: "xiamen" },
                        { id: 101, name: "西安", spell: "xian" }
                    ]
                },
                {
                    letter: "Y",
                    areas: [
                        { id: 102, name: "兖州", spell: "yanzhou" },
                        { id: 103, name: "延安", spell: "yanan" }
                    ]
                },
                {
                    letter: "Z",
                    areas: [
                        { id: 104, name: "张寨", spell: "zhangzhai" },
                        { id: 105, name: "张楼", spell: "zhanglou" }
                    ]
                }
            ]
        };
    },
    // watch: {
    //     search(newValue, oldValue) {
    //         if (newValue) {
    //             this.barSee = true;
    //         } else {
    //             this.barSee = false;
    //         }
    //     }
    //},
    mounted() {
        // this.getData();
    },
    methods: {
        setSearch() {
            let searchWord = localStorage.getItem("searchWord");
            if (searchWord == null) {
                localStorage.setItem("searchWord", this.search);
            } else {
                let arr = localStorage.getItem("searchWord");
                    arr = arr.split(",");
                if (arr.indexOf(this.search) != -1) {
                    arr = arr;
                } else {
                    arr.unshift(this.search);
                }
                self.historyWord = arr;
                if (self.historyWord.length > 5) {
                    self.historyWord.pop();
                }
                localStorage.setItem("searchWord", self.historyWord);
            }
        },
        onSearch() {
            this.allDatas = [];
            let obj = this.letters;
            for (let i in obj) {
                for (let j in obj[i]) {
                    let objareas = obj[i][j];
                    for (let n in objareas) {
                        for (let m in objareas[n]) {
                        }
                        this.allDatas.push(objareas[n]);
                    }
                }
            }

            var arr = JSON.parse(JSON.stringify(this.allDatas));
            for (let p = 0; p < arr.length; p++) {
                if (typeof arr[p] === "string") {
                    arr.splice(p, 1);
                }
            }
            this.arrData = arr;
            // console.log(this.arrData);

            let search = this.search;
            this.searchData = this.arrData.filter(function(product) {
                // console.log("过滤", product);
                let searchField = {
                    name: product.name,
                    spell: product.spell
                };
                return Object.keys(searchField).some(function(key) {
                    // console.log("key值", key);
                    return (
                        String(product[key])
                            .toLowerCase()
                            .indexOf(search) > -1
                    );
                });
            });
            this.setSearch();
        },
        searchArea(areas) {
            this.$router.push({ path: "./addressAll", query: { area: areas } });
        },
        onCancel() {},
        onClickLeft() {
            this.$router.go(-1);
        },
        selectAddress() {
            this.$router.push("/selectAddress");
        }
    },
    computed: {
        // search(val){
        //  val = val.trim(); // 清除空格
        //     if (this.HistoryList.length > 0) {
        //         // 有数据的话 判断
        //         if (this.HistoryList.indexOf(val) !== -1) {
        //             // 有相同的，先删除 再添加
        //             this.HistoryList.splice(this.HistoryList.indexOf(val), 1);
        //             this.HistoryList.unshift(val);
        //         } else {
        //             // 没有相同的 添加
        //             this.HistoryList.unshift(val);
        //         }
        //     } else {
        //         // 没有数据 添加
        //         this.HistoryList.unshift(val);
        //     }
        //     if (this.HistoryList.length > 6) {
        //         // 保留六个值
        //         this.HistoryList.pop();
        //     }
        //     localStorage.setItem(
        //         "HistoryList",
        //         JSON.stringify(this.HistoryList)
        //     );
        // }
    }
};
</script>

<style lang="stylus" scoped>
.main_box {
    width: 100%;
    background: #00BCD4 !important;

    .van-nav-bar {
        background: #00BCD4 !important;
        margin: 0 auto;
        line-height: 40px;
    }

    .van-icon-arrow-left:before {
        color: white !important;
        margin-left: -80px !important;
    }

    .van-search {
        background: #00BCD4 !important;
        width: 95% !important;
    }

    .box {
        width: 90%;
        margin-left: 10%;
        display: flex;
    }

    .po {
        color: white;
        width: 20%;
        text-align: center;
        line-height: 55px;
        margin-right: 2%;
    }
}
</style>>

