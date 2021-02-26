<template>
  <div class="page bg-white overflow-hidden">
    <div class="container-fluid">
      <div class="row justify-content-center header-color" :style="`background-color:${data.color};`">
        <div class="col-11 col-sm-10 text-white">
          <div style="cursor:pointer;" class="d-flex mt-5 align-items-center w-50 w-sm-25" @click.prevent="$router.go(-1)">
            <font-awesome-icon icon="arrow-left" />
            <p class="px-2 m-0">回首頁</p>
          </div>
        </div>
        <div class="col-11 col-sm-10 col-xl-7 position-absolute page-title text-white">
          <h1 class="pt-5 pb-3">{{ data.title }}</h1>
          <div class="d-flex">
            <span class="pe-3" v-for="(item, i) in data.remarks" :key="i">{{ item }}</span>
          </div>
          <div class="main-img mt-5">
            <img :src="`${data.img}`" class="w-100">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
        <!-- white-section img -->
        <img src="@/assets/img/banner-b@1x.svg" class="position-relative w-100 bottom-banner">
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-10 col-xl-7 page-info pb-5">
          <div class="d-flex mb-5 justify-content-between">
            <div class="w-50">
              <h2>我們的使命</h2>
              <div :style="`background-color: ${data.color};`" class="line mb-3"></div>
              <p>網站範例文字 網站範例文字 網站範例文字 網站範例文字 網站範例文字 網站範例文字</p>
            </div>
            <div class="w-45" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <img :src="data.imgs[0]" alt="img" class="w-100 elementor-img">
            </div>
          </div>
          <div class="d-flex mt-5 justify-content-between">
            <div class="w-45" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <img :src="data.imgs[1]" alt="img" class="w-100 elementor-img">
            </div>
            <div class="w-50">
              <h2>我們的使命</h2>
              <div :style="`background-color: ${data.color};`" class="line mb-3"></div>
              <p>網站範例文字 網站範例文字 網站範例文字 網站範例文字 網站範例文字 網站範例文字</p>
            </div>
          </div>
          <div class="d-flex mt-5 mb-5 justify-content-between">
            <div class="w-50">
              <h2>我們的使命</h2>
              <div :style="`background-color: ${data.color};`" class="line mb-3"></div>
              <p>網站範例文字 網站範例文字 網站範例文字 網站範例文字 網站範例文字 網站範例文字</p>
            </div>
            <div class="w-45" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <img :src="data.imgs[2]" alt="img" class="w-100 elementor-img">
            </div>
          </div>
        </div>
      </div>
      <div style="background: #f4f6e3;" class="row flex-column justify-content-center align-items-center">
        <div class="col-10 pt-5">
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
              <div class="col-6 col-lg-4" v-for="(item, index) in allData" :key="index">
                <div class="qqball-card m-0 w-100"  @click="goAnthorPage(item)">
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
          <div class="footer mt-5 position-relative">
            <div class="footer-content position-absolute w-100">
              <div class="section-title-swag d-none d-sm-flex align-items-center justify-content-center">
                <img src="@/assets/img/swagleft.svg" class="grass-left">
                <p>Say Hi</p>
                <img src="@/assets/img/swagright.svg" class="grass-right">
              </div>
              <div class="mt-2 mt-md-4">
                <h2 class="text-center">聯絡我們</h2>
                <div class="mt-2 mt-sm-3 mt-lg-5 position-absolute footer-items">
                  <div class="d-flex align-items-center">
                    <font-awesome-icon icon="envelope" />
                    <span class="ms-3">hello@gmail.com</span>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <font-awesome-icon icon="phone" />
                    <span class="ms-3">0912 111 123</span>
                  </div>
                  <div class="d-flex mt-3">
                    <font-awesome-icon icon="map-marker-alt" />
                    <div class="ms-3">
                      <b>雙北都可約</b>
                      <p>168 新北市幸福區幸福路二段520號, 台灣No.1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="@/assets/img/18e62af.png" alt="white-circle" class="footer-bg w-100 h-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/assets/page.json';

export default {
  name: 'Page',
  data(){
    return{
      allData: [],
      data: {}
    }
  },
  created(){
    const copyData = JSON.parse(JSON.stringify(db.item));
    copyData.forEach((item, index, arr) => {
      if(this.$route.params.id === item.index){
        this.data = item;
        arr.splice(index, 1);
      }
    })
    this.allData = copyData;
  },
  methods:{
    goAnthorPage(item){
      this.$router.push({name: 'Page', params: { id: item.index}});
      location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.header-color{
  height: 600px;
  .fa-arrow-left{
    position: relative;
    display: block;
    font-size: 24px;
    -webkit-animation-name: fmove;
    animation-name: fmove;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  .page-title{
    top: 80px;
    z-index: 5;
  }
  .main-img{
    padding: 5px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 12px 22px 0 rgba(0, 0, 0, .1);
  }
}
.bottom-banner{
  top: calc(-5.33333vw + 3px);
  z-index: 2;
}
.page-info{
  margin-top: 250px;
  .w-45{
    width: 45%;
  }
  .line{
    width: 50px;
    height: 3.5px;
  }
  .elementor-img{
    border-radius: 4px;
    box-shadow: 10px 10px 0 1px rgba(0, 0, 0, .1);
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

@keyframes fmove{
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  30% {
    -webkit-transform: translate(-5px);
    transform: translate(-5px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

@media (max-width: 768px) {
  .header-color{
    height: 500px;
  }
  .page-info{
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .header-color{
    height: 420px;
  }
  .page-info{
    .elementor-img{
      box-shadow: 5px 5px 0 1px rgba(0, 0, 0, .1);
    }
  }
  .bottom-banner{
    top: calc(-5.63333vw + 3px);
  }
}

@media (max-width: 425px) {
  .bottom-banner{
    top: calc(-6.63333vw + 3px);
  }
}
</style>
