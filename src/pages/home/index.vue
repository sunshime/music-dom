<template>
  <div class="home">
    初始化项目咯
    

    <div class="block">
   
        <span class="iconfont icon-pinglun"></span>

      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide>
          <img src="http://p1.music.126.net/RFQUmYcTB9AA88gXbModwQ==/109951165101310399.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="http://p1.music.126.net/pNGNI636luB4Z8WTYVOqbQ==/109951165100946685.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="http://p1.music.126.net/oEq115Ht2nkm1YYWwNu0xg==/109951165101317472.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="http://p1.music.126.net/tUEK1VJ4rmY9_0HdAytLsg==/109951165100967089.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="http://p1.music.126.net/VGS7pri7iauMz3KBOkgouQ==/109951165101944740.jpg" alt />
        </swiper-slide>
        <div class="swiper-pagination indicator" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script type="text/javascript" src="./logic.js"></script>
<style lang="less" scoped>
.indicator /deep/ .swiper-pagination-bullet {
  background-color: #eee;
}

.icons{
    width: 30px;
    height: 30px;
    display: block;
    color: red;
}
</style>

