<template>
  <div class="wrapper">
    <swiper :option="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/qs/1806/98/57120f8844f23e02.jpg'
      }, {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/qs/1805/ed/6dd1d32e17ea8002.jpg'
      }, {
        id: '003',
        imgUrl: 'https://img1.qunarzz.com/qs/1806/8f/e1141f1b52114402.jpg'
      }, {
        id: '004',
        imgUrl: 'https://img1.qunarzz.com/qs/1805/79/895429b453f08002.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrappper
  overflow hidden;
  height 0;
  pdding-bottom: 31.25%;
  background: #eee;
.swiper-img
    width: 100%
</style>
