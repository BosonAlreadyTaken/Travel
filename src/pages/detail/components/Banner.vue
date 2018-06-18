<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_600x330_cebdcaf0.jpg">
      <div class="banner-info">
        <div class="banner-title">东部华侨城(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgs="imgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1505/ab/ab032b088d0bc01f.water.jpg_r_800x800_e4ffea2c.jpg', 'http://img1.qunarzz.com/sight/p0/1505/f9/f9703e976a1a8aff.water.jpg_r_800x800_8dd04cd2.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative;
  overflow hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img
    width: 100%
  .banner-info
    display flex
    position: absolute
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1;
      font-size .32rem;
      padding: 0 .2rem;
    .banner-number
      padding: 0 .4rem;
      margin-top: .14rem;
      height: .32rem;
      line-height: .32rem;
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size .24rem
      .banner-icon
        margin-right  .05rem;
        font-size .24rem;
</style>
