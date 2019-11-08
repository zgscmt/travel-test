<template>
    <div class="swiper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(img,index) in images " :key="index">
                <img :src="img.image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: "",
            // imagess:""
            images2: [],
            images3:[]
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            let params = {
                role_type: 2
            };
            this.$axios
                .post("https://BackMiddle.chengdui.xyz/getBanner", params)
                .then(res => {
                   //console.log(res);
                   let response=res.data;
                    this.images = response.data.data;
                });
        }
    }
};
</script>
<style scoped>
.swiper {
    /* height:100px; */
    width: 100%;
    margin-bottom:0px;
}
.van-swipe-item {
    width: 100%;
}
img {
    display: block;
    height: 150px;
    width: 100%;
}
</style>
