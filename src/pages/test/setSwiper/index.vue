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
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600, //config参数同swiper4,与官网一致
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: false, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 5, //动态分页器的主指示点的数量
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      },
      name: "hahahh"
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="less" scoped>
.indicator /deep/ .swiper-pagination-bullet {
  background-color: #eee;
}

.icons {
  width: 30px;
  height: 30px;
  display: block;
  color: red;
}
</style>

