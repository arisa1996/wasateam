<template>
  <div id="home">
    <div class="container-fluid top-banner">
      <Banner />
    </div>
    <div class="container-fluid p-0">
      <!-- white-section img -->
      <img src="@/assets/img/banner-b.svg" class="position-relative w-100 bottom-banner">
    </div>
    <div class="container center-content">
      <div class="row flex-column justify-content-center align-items-center">
        <div class="col-12 col-md-10 mb-5">
          <div class="mb-5">
            <div class="section-title-swag d-flex align-items-center">
              <img src="@/assets/img/swagleft.svg" class="grass-left">
              <p>Wow</p>
              <img src="@/assets/img/swagright.svg" class="grass-right">
            </div>
            <div class="section-title mb-5">
              <h2 class="mt-2">服務項目</h2>
              <p class="m-0">給予您網站全面的專業服務，</p>
              <p>學習更多關於我們專業技術的資訊！</p>
            </div>
            <div class="section-service d-lg-flex justify-content-between">
              <div class="service-list">
                <div class="service mb-5">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/4b07e19.svg" alt="icon">
                    <h3 class="ms-3">網頁設計</h3>
                  </div>
                  <p>聞臺加 相玩 處我麼 他生戰女取。</p>
                </div>
                <div class="service mb-5">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/2fb946b.svg" alt="icon">
                    <h3 class="ms-3">UIUX規劃</h3>
                  </div>
                  <p>聞臺加 相玩 處我麼 他生戰女取。</p>
                </div>
                <div class="service mb-5">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/a560e80.svg" alt="icon">
                    <h3 class="ms-3">APP設計</h3>
                  </div>
                  <p>聞臺加 相玩 處我麼 他生戰女取。</p>
                </div>
                <div class="service">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/16d9a61.svg" alt="icon">
                    <h3 class="ms-3">動態圖表設計</h3>
                  </div>
                  <p>聞臺加 相玩 處我麼 他生戰女取。</p>
                </div>
              </div>
              <div class="service-imgs d-none d-lg-block">
                <div class="dialog position-relative">
                  <div class="dialog-title position-relative">我們是...</div>
                  <div class="dialog-content position-relative">理性感性兼具的團隊|</div>
                  <img src="@/assets/img/b25ed57.svg" alt="service-pic" class="position-absolute top-0">
                </div>
                <img src="@/assets/img/f@1x.svg" alt="service-pic" class="computer-pic mx-5">
              </div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="mb-5" ref="steps">
            <div class="section-title-swag d-flex align-items-center">
              <img src="@/assets/img/swagleft.svg" class="grass-left">
              <p>How</p>
              <img src="@/assets/img/swagright.svg" class="grass-right">
            </div>
            <div class="section-title mb-5">
              <h2 class="mt-2">合作流程</h2>
              <p>想幫公司前端設計開外掛？</p>
            </div>
            <div class="step-list row g-3">
              <div class="col-6 col-lg-4 col-xl-2 mb-5">
                <div class="step d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/img/b75a32f.svg" alt="step-icon">
                  <h3 class="title title1">諮詢</h3>
                  <div class="step-content text-center step-pd">
                    <p class="mb-0">聆聽需求</p>
                    <p class="mb-0">了解專案目標</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xl-2 mb-5">
                <div class="step d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/img/7802536.svg" alt="step-icon">
                  <h3 class="title title2">規劃</h3>
                  <div class="step-content text-center">
                    <p class="mb-0">架構規劃</p>
                    <p class="mb-0">規格確認</p>
                    <p class="mb-0">報價簽約</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xl-2 mb-5">
                <div class="step d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/img/c887589.svg" alt="step-icon">
                  <h3 class="title title3">設計</h3>
                  <div class="step-content text-center step-pd">
                    <p class="mb-0">頁面流程規劃</p>
                    <p class="mb-0">介面視覺設計</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xl-2 mb-5">
                <div class="step d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/img/b4c4c54.svg" alt="step-icon">
                  <h3 class="title title4">開發</h3>
                  <div class="step-content text-center">
                    <p class="mb-0">程式開發</p>
                    <p class="mb-0">前端互動</p>
                    <p class="mb-0">客製化功能</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xl-2 mb-5">
                <div class="step d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/img/eb976ba.svg" alt="step-icon">
                  <h3 class="title title5">上架</h3>
                  <div class="step-content text-center">
                    <p class="mb-0">弱點掃描</p>
                    <p class="mb-0">SEO設定</p>
                    <p class="mb-0">交接教學</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xl-2 mb-5">
                <div class="step d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/img/7fccaea.svg" alt="step-icon">
                  <h3 class="title title6">維護</h3>
                  <div class="step-content text-center step-pd">
                    <p class="mb-0">程式維護</p>
                    <p class="mb-0">使用諮詢</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="mb-5">
            <div class="section-title-swag d-flex align-items-center">
              <img src="@/assets/img/swagleft.svg" class="grass-left">
              <p>Projects</p>
              <img src="@/assets/img/swagright.svg" class="grass-right">
            </div>
            <div class="section-title mb-5">
              <h2 class="mt-2">設計案例</h2>
              <p>互動網站 x APP設計</p>
            </div>
            <div class="row g-3 mb-5 flex-wrap">
              <div class="col-6 col-lg-4" v-for="(item, index) in data" :key="index">
                <div class="qqball-card m-0 w-100"  @click="$router.push({name: 'Page', params: { id: item.index}})">
                  <svg preserveAspectRatio="none" viewBox="0,0,480,456" fill-rule="evenodd" fill="#fff" :class="`qqball ${item.index}`">
                    <path d="M 0 0 H 480 V 456 H 0 L 0 0 Z M 240 38 C 270 38 304.2 44.95 330 57.95 C 355.8 70.95 379.8 92.45 394.8 116 C 409.8 139.55 419.22 172.675 420 199.25 C 420.78 225.825 414.81 254.425 399.48 275.45 C 384.15 296.475 354.6 314.975 328.02 325.4 C 301.44 335.825 269.34 338 240 338 C 210.66 338 178.56 335.925 151.98 325.4 C 125.4 314.875 95.85 295.875 80.52 274.85 C 65.19 253.825 59.22 225.725 60 199.25 C 60.78 172.775 70.2 139.55 85.2 116 C 100.2 92.45 124.2 70.95 150 57.95 C 175.8 44.95 210 38 240 38 Z"></path>
                  </svg>
                  <div class="item-title">
                    <span>{{item.title}}</span>
                  </div>
                  <div class="color-cover" :style="`background-color: ${item.color};`">
                    <h4>看案例</h4>
                    <p>See More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './Banner';
import Footer from './Footer';
import db from '@/assets/page.json';

export default {
  name: 'Home',
  data(){
    return{
      data: []
    }
  },
  components: {
    Banner, Footer
  },
  created () {
    this.data = db.item;
  },
  mounted() {
    // 監聽滾動事件
    window.addEventListener('scroll', this.debounce(this.onScroll), false);
  },
  beforeDestroy() {
    // 必須移除監聽器, 不然當該vue組件被銷毀, 監聽器還在就會出錯
    window.removeEventListener('scroll', this.debounce(this.onScroll));
  },
  methods: {
    onScroll() {
      const element = this.$refs.steps;
      const h3 = document.querySelectorAll('.title');
      // 滑動頁面的底部距離扣掉圖片一半的高
      if(element){
        const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
        // 圖片底部距離頂端的距離
        const imgBottom = element.offsetTop + element.offsetHeight;
        // 已滑過了圖片的一半
        const isHalfShow = slideInAt > element.offsetTop;
        // 未完全滑過圖片
        const isNotScrollPast = window.scrollY < imgBottom;

        h3.forEach(i =>{
          if (isHalfShow && isNotScrollPast) {
            i.classList.add('step-name');
          } else {
            i.classList.remove('step-name');
          }
        })
      }
    },
    debounce(func, delay=100) {
      var timer = null;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          func.apply(context, args)
        }, delay);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  overflow: hidden;
}
.top-banner{
  background-image: radial-gradient(circle at 51% 38%,#c5d69f,#b9cd94 40%,#b9cd94 61%);
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.bottom-banner{
  top: calc(-5.33333vw + 3px);
  z-index: 5;
}
.service{
  h3{
    color: #6f8a40;
  }
  p{
    padding-left: 75px;
    letter-spacing: .8px;
    line-height: 1.3;
    white-space: pre-wrap;
  }
}
.service-imgs{
  .dialog{
    color: #6f8a40;
    top: -50px;
    img{
      right: 10px;
    }
    .dialog-title{
      font-size: 1.125rem;
      z-index: 1;
      font-weight: 600;
      line-height: 1.33;
      letter-spacing: 1px;
      top: 40px;
      left: 280px;
    }
    .dialog-content{
      font-size: 1.375rem;
      z-index: 1;
      font-weight: 600;
      line-height: 1.09;
      letter-spacing: 1.22px;
      top: 55px;
      left: 280px;
    }
  }
  .computer-pic{
    margin-top: 3.5rem;
  }
}
.step{
  border-radius: 20px;
  border: 2px solid #93ad65;
  padding-bottom: 28px;
  height: auto;
  img{
    margin-top: -38px;
  }
  h3{
    color: #6f8a40;
  }
  h3, .step-content{
    font-weight: 600;
    line-height: 1.43;
    letter-spacing: .4px;
  }
  .step-pd{
    padding-bottom: 22.4px;
  }
  .step-name{
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-name: wave;
    animation-name: wave;
    -webkit-animation-iteration-count: 2;
    animation-iteration-count: 2;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
  .title1{
    -webkit-animation-delay: .1s;
    animation-delay: .1s;
  }
  .title2{
    -webkit-animation-delay: .2s;
    animation-delay: .2s;
  }
  .title3{
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
  }
  .title4{
    -webkit-animation-delay: .4s;
    animation-delay: .4s;
  }
  .title5{
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
  }
  .title6{
    -webkit-animation-delay: .6s;
    animation-delay: .6s;
  }
}
.qqball1{
  background-image: url('../assets/img/1535119696.jpg');
}
.qqball2{
  background-image: url('../assets/img/1535221595.jpg');
}
.qqball3{
  background-image: url('../assets/img/1535119195.jpg');
}
.qqball4{
  background-image: url('../assets/img/1535449595.jpg');
}
.qqball5{
  background-image: url('../assets/img/1535229595.jpg');
}
.qqball6{
  background-image: url('../assets/img/1535119595.jpg');
}

@keyframes wave{
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  100% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
}
</style>