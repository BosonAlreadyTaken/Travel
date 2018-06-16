<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_200x200_e0efe6da.jpg',
        title: '东部华侨城',
        desc: '佛心无形观宇宙，茶禅一味悟人生。一场禅茶东方文化的精彩演出'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg',
        title: '世界之窗',
        desc: '佛心无形观宇宙，茶禅一味悟人生。一场禅茶东方文化的精彩演出'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/17/176c2114bb8ae255a3.water.png_200x200_a1b6cfdf.png',
        title: '深圳欢乐谷',
        desc: '佛心无形观宇宙，茶禅一味悟人生。一场禅茶东方文化的精彩演出'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem;
    line-height .8rem;
    background #25a4bb
    text-indent .2rem
  .item
    display flex;
    overflow hidden;
    height 1.9rem;
    .item-img
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    .item-info
      flex 1;
      padding: .1rem;
      min-width 0;
      .item-title
        line-height .54rem;
        font-size .32rem;
        ellipsis()
      .item-desc
        line-height .44rem;
        ellipsis()
        font-size .24rem;
        color: #ccc
      .item-btn
        line-height: .44rem;
        margin-top .2rem;
        background: #ff9300;
        padding 0 .2rem;
        border-radius .06rem;
        color: #fff;
</style>
