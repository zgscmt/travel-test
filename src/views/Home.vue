<template>
<div class="home">
   <head-search></head-search>
    <swiper></swiper>
    <tabs></tabs>
    <hot-go></hot-go>
    <where-go></where-go>
    <bottom></bottom>
</div>
</template>

<script>
import headSearch from "../components/headSearch.vue";
import swiper from "../components/swiper.vue"
import hotGo from "../components/hotGo.vue"
import tabs from "../components/tabs.vue"
import whereGo from "../components/whereGo.vue"
import bottom from "../components/bottom.vue"
export default {
    name: "home",
    components: {headSearch,swiper,tabs,hotGo,whereGo,bottom},
    data(){
        return {

        }
    }
};
</script>
