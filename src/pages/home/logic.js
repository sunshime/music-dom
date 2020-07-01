import {
  Swiper,
  SwiperSlide,
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600, //config参数同swiper4,与官网一致
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: 'li', //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: false, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 5, //动态分页器的主指示点的数量
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
      },
      name: 'hahahh'
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },

}
