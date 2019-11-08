<template>
    <div class="index_bar">
        <div class="safetyInfo">
            <form class="box" action="/">
                <van-search
                    v-model="search"
                    placeholder="输入城市名或者拼音"
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
            <ul v-for="(list,index) in searchData" :key="index">
                <li>
                    <van-cell v-show="barSee" @click="searchArea(list.name)">{{list.name}}</van-cell>
                </li>
            </ul>
        </div>
        <!-- 当前/热门城市  -->
        <current-hot v-show="currentHot"></current-hot>

        <div
            v-show="seeBar"
            :class="{'index-bar-margin-bottom':hasIndexBarMarginBottom}"
            @touchmove="moveIndexBar"
        >
            <van-index-bar
                :index-list="indexList"
                :sticky="false"
                @select="selectIndexBar()"
                highlight-color="#00FF00"
            >
                <div v-for="(item,nav) in letters" :key="nav">
                    <van-index-anchor :index="indexList[nav]" class="header_text">{{item.letter}}</van-index-anchor>

                    <van-cell
                        v-for="(address,ol) in item.areas"
                        :key="ol"
                        @click="selectArea(address.name)"
                    >{{address.name}}</van-cell>
                </div>
            </van-index-bar>
        </div>
        <!-- <van-index-bar highlight-color="#00FF00">
            <div v-for="(item,nav) in letters" :key="nav">
                <van-index-anchor :index="item.letter" class="header_text"></van-index-anchor>
                <van-cell
                    v-for="(address,ol) in item.areas"
                    :key="ol"
                    @click="selectArea(address.name)"
                >{{address.name}}</van-cell>
            </div>
        </van-index-bar>-->
    </div>
</template>

<script>
import currentHot from "./currentHot.vue";
export default {
    components: { currentHot },
    data() {
        return {
            search: "",
            seeBar: true,
            barSee: false,
            currentHot: true,
            searchData: "",
            allDatas: "",
            arrData: "",
            indexList: [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "J",
                "K",
                "L",
                "M",
                "N",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z"
            ],
            hasIndexBarMarginBottom: false,
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
    watch: {
        search(newValue, oldValue) {
            if (newValue) {
                this.seeBar = false;
                this.currentHot = false;
                this.barSee = true;
            } else {
                this.seeBar = true;
                this.currentHot = true;
                this.barSee = false;
            }
        }
    },
    mounted() {},
    methods: {
        inintData() {
            this.allDatas = [];
            // console.log("数组对象")
            let obj = this.letters;
            for (let i in obj) {
                // console.log(obj[i])
                for (let j in obj[i]) {
                    // console.log(j)
                    // console.log(typeof obj[i][j])
                    let objareas = obj[i][j];
                    for (let n in objareas) {
                        // console.log(objareas[n])
                        for (let m in objareas[n]) {
                            // console.log(objareas[n][m]);
                        }
                        this.allDatas.push(objareas[n]);
                    }
                }
            }
            // console.log( '数据',this.allDatas)
            var arr = this.allDatas;
            //  console.log(arr)
            for (let p = 0; p < arr.length; p++) {
                if (typeof arr[p] === "string") {
                    arr.splice(p, 1);
                }
            }
            this.arrData = arr;
            console.log(this.arrData);
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
        },
        onCancel() {},
        selectIndexBar() {
            this.hasIndexBarMarginBottom = true;
        },
        moveIndexBar() {
            this.hasIndexBarMarginBottom = false;
        },
        selectArea(area) {
            this.$router.push({ path: "./addressAll", query: { area: area } });
        },
        searchArea(areas) {
            this.$router.push({ path: "./addressAll", query: { area: areas } });
        }
    }
};
</script>

<style lang="stylus" scoped>
/* .header_text :active{
    color:#00FF00
} */
.index_bar {
    width: 100%;

    .index-bar-margin-bottom {
        margin-bottom: 260px;
    }
}
</style>>

