<template>
  <div id="container">
    <h2>test demo</h2>
    zoom:<input type="range" v-model="zoom" min="3" max="19">
    <BMap width="1000" height="500" @click="mapClick" :zoom="zoom"></BMap>
  </div>
</template>

<script>
export default {
    data() {
        return {
            zoom:10
        }
    },
    methods:{
        mapClick(e){
            console.log(e)
        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
}
</style>