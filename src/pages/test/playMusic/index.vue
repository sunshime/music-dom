<template>
  <div class="playmusic">
    <div class="bottom-music">
      <div class="music-lt">
        <div class="lt-avator">
          <img src="/static/img/avator.jpg" alt />
        </div>
        <div class="lt-title">
          <span class="title">你，好不好？</span>
          <span class="name">周兴哲</span>
        </div>
      </div>
      <div class="music-rt">
        <div class="progress-circle" id="progressCircle" @click="operation">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" id="mySvg">
            <circle class="progress-background" cx="50%" cy="50%" r="50%" fill="transparent" />
            <circle
              class="progress-bar"
              cx="50%"
              cy="50%"
              r="50%"
              fill="transparent"
              :stroke-dasharray="dashArray"
              :stroke-dashoffset="dashOffset"
            />
          </svg>
          <span
            :class="isStatus?'iconfont icon-bofang3 icons':'iconfont icon-bofang2 icons icons1'"
          ></span>
        </div>
        <span class="iconfont icon-yinleliebiao menu"></span>
        <audio :src="music" @timeupdate="timeupdate" id="audio" @ended="ended"></audio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      music: "/static/audios/周兴哲 - 你，好不好？.mp3",
      // music: "/static/audios/青鸟飞鱼、张芸京、郑中基 - 此生不换+偏爱+答应不爱你.mp3",
      dashArray: 0,
      current: 0,
      dashOffset: 0,
      isStatus: false // 播放状态  false 暂停  true 播放
    };
  },
  computed: {
    // 实时监听播放进度条
    getDashOffset() {
      let percent = 0;
      if (document.getElementsByTagName("audio")[0]) {
        // 计算播放进度比例
        let duration = document.getElementsByTagName("audio")[0].duration;
        percent = Math.min(1, this.current / duration);
        this.dashOffset = (1 - percent) * this.dashArray;
      } else {
        this.dashOffset = (1 - 0) * this.dashArray;
      }
    }
  },
  methods: {
    // 实时获取音频当前播放时长
    timeupdate(e) {
      // console.log("e===>", e.target.currentTime);
      this.current = e.target.currentTime;
      let duration = document.getElementsByTagName("audio")[0].duration;

      let percent = Math.min(1, this.current / duration);
      this.dashOffset = (1 - percent) * this.dashArray;
    },
    ended() {
      console.log("播放结束~~~");
      this.isStatus = false;
      let circleWidth = document.getElementById("progressCircle").offsetWidth;
      this.dashArray = Math.PI * circleWidth;
      this.dashOffset = Math.PI * circleWidth;
    },
    // 操作音乐播放/暂停
    operation() {
      console.log("播放/暂停音乐");
      let audio = document.getElementById("audio");
      console.log("this.audio.paused===>", audio.paused);

      if (audio.paused) {
        audio.play();
        this.isStatus = true;
      } else {
        audio.pause();
        this.isStatus = false;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //  初始化圆的周长
      let circleWidth = document.getElementById("progressCircle").offsetWidth;
      this.dashArray = Math.PI * circleWidth;
      this.dashOffset = Math.PI * circleWidth;
    });
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>