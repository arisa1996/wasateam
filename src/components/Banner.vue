<template>
  <div class="index-wasa-sec d-flex flex-column align-items-center" @mouseover="changeEyes($event)">
      <div class="bg-loader" :style="bgObj">
        <img src="@/assets/img/0f989db.png" class="back-img">
        <div class="bg-loader-move">
          <div class="pendulum-item tree-01">
            <img src="@/assets/img/47e30bc.svg">
          </div>
          <div class="pendulum-item tree-02">
            <img src="@/assets/img/fccd75e.svg">
          </div>
          <div class="pendulum-item tree-03">
            <img src="@/assets/img/8ddcae8.svg">
          </div>
          <div class="pendulum-item tree-04">
            <img src="@/assets/img/9789238.svg">
          </div>
          <div class="pendulum-item tree-05">
            <img src="@/assets/img/78381d9.svg">
          </div>
          <div class="pendulum-item tree-06">
            <img src="@/assets/img/9547e6b.svg">
          </div>
          <div class="pendulum-item tree-07">
            <img src="@/assets/img/8145f89.svg">
          </div>
          <div class="pendulum-item tree-08">
            <img src="@/assets/img/c1dcf74.svg">
          </div>
        </div>
      </div>
      <div class="floating-item left-green">
        <div class="parallel-scroll-item" :style="greenObj">
          <img src="@/assets/img/305a70b.png">
        </div>
      </div>
      <div class="floating-item left-yellow">
        <div class="parallel-scroll-item" :style="yellowObj">
          <img src="@/assets/img/efbd45d.png">
        </div>
      </div>
      <div class="floating-item right-yellow">
        <div class="parallel-scroll-item" :style="yellowObj">
          <img src="@/assets/img/efbd45d.png">
        </div>
      </div>
      <div class="floating-item right-green">
        <div class="parallel-scroll-item" :style="greenObj">
          <img src="@/assets/img/711c169.png">
        </div>
      </div>
      <img src="@/assets/img/BBBBBB_M.png" class="logo" :style="bgObj">
      <div class="leading-role-item" :style="bgObj">
        <div class="leading-role-item-move">
          <div class="mojo" ref="componentBox">
            <img src="@/assets/img/a3a5c0d.svg">
            <div class="mojo-eyes mojo-eyes-left" :style="eyesObj">
              <div class="mojo-eye-left mojo-eye" :style="eyeObj"></div>
            </div>
            <div class="mojo-eyes mojo-eyes-right" :style="eyesObj">
              <div class="mojo-eye-right mojo-eye" :style="eyeObj"></div>
            </div>
          </div>
          <img src="@/assets/img/0f989db.png" class="index-bottom-bg">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return{
      bgObj: {
        transform: 'translate(0px, 0px)'
      },
      yellowObj: {
        transform: 'translate(0px, 0px)'
      },
      greenObj: {
        transform: 'translate(0px, 0px)'
      },
      eyesObj: {
        transform: 'translate(0px, 0px)'
      },
      eyeObj: {
        transform: 'translate(0px, 0px)'
      },
    }
  },
  created(){
    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || document.querySelector('.element').scrollTop;
        this.bgObj.transform = `translate(0px, -${scrollTop}px)`;
        this.greenObj.transform = `translate(0px, -${scrollTop + 30}px)`;
        this.yellowObj.transform = `translate(0px, -${scrollTop - 40}px)`;
      }
    }, true);
  },
  methods:{
    changeEyes(event) {
      var x = event.clientX - window.innerWidth/2;
      var y = event.clientY - window.innerHeight/2;
      this.eyesObj.transform = `translate(${x * 0.01}%, ${y * 0.01}%)`;
      this.eyeObj.transform = `translate(${x * 0.09}%, ${y * 0.09}%)`;
    },
  }
}
</script>

<style lang="scss" scoped>
.index-wasa-sec{
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  margin-bottom: 250px;
  .logo{
    position: relative;
    z-index: 2;
    padding-top: 248px;
    transition: all 1s;
  }
  .bg-loader{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0);
    transition: all 1s;
    pointer-events: none;
    .back-img{
      position: absolute;
      z-index: 0;
      left: calc(50% - 600px);
      top: 0;
    }
    .pendulum-item{
      position: absolute;
      z-index: 1;
      transform: scale(1);
      transition: all .2s;
      animation-name: pendulum;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      img{
        transform-origin: 30% 60%;
      }
    }
  }
  .floating-item{
    position: absolute;
    z-index: 0;
    animation-name: floating;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    .parallel-scroll-item{
      transition: all 1s;
    }
  }
  .left-green{
    top: 60px;
    left: -144px;
    animation-duration: 2.7s;
  }
  .left-yellow{
    top: 234px;
    left: 67px;
    animation-duration: 2.8s;
  }
  .right-yellow{
    top: 276px;
    right: -125px;
    animation-duration: 2.9s;
  }
  .right-green{
    top: 500px;
    right: -200px;
    animation-duration: 3s;
  }
}
.tree-01{
  left: calc(50% - 286px);
  top: 110px;
  animation-duration: 3s;
  img{
    transition-delay: .5s;
  }
}
.tree-02{
  left: calc(50% - 225px);
  top: 58px;
  animation-duration: 2.7s;
  img{
    transform-origin: 35% 70%;
    transition-delay: .6s;
  }
}
.tree-03{
  left: calc(50% - 190px);
  top: 58px;
  animation-duration: 2.8s;
  img{
    transition-delay: .7s;
  }
}
.tree-04{
  left: calc(50% + 290px);
  top: 120px;
  animation-duration: 2.9s;
  img{
    transition-delay: .8s;
  }
}
.tree-05{
  left: calc(50% + 312px);
  top: 163px;
  animation-duration: 3s;
  img{
    transition-delay: .9s;
  }
}
.tree-06{
  left: calc(50% + 333px);
  top: 182px;
  animation-duration: 3.1s;
  img{
    transition-delay: 1s;
  }
}
.tree-07{
  left: calc(50% + 380px);
  top: 610px;
  animation-duration: 3.2s;
  img{
    transition-delay: 1.1s;
  }
}
.tree-08{
  left: calc(50% + 363px);
  top: 640px;
  animation-duration: 3.3s;
  img{
    transition-delay: 1.2s;
  }
}

.leading-role-item{
  width: 480px;
  position: absolute;
  z-index: 3;
  bottom: -180px;
  transition: all 1s;
  .mojo{
    position: absolute;
    z-index: 1;
    img{
      width: 100px;
      position: absolute;
      z-index: 0;
      top: -35px;
      left: calc(50% + 190px);
    }
    .mojo-eyes{
      position: absolute;
      z-index: 1;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      top: -10px;  
      overflow: hidden;
    }
    .mojo-eyes-left{
      left: calc(50% + 202px);
    }
    .mojo-eyes-right{
      left: calc(50% + 240px);
    }
    .mojo-eye{
      position: absolute;
      z-index: 3;
      background: #6f8a40;
      width: 4px;
      height: 4px;
      top: 14px;
      border-radius: 50%;
      transition: all .1s linear;
    }
    .mojo-eye-left{
      left: calc(50% - 5px);
    }
    .mojo-eye-right{
      left: calc(50% - 3px);
    }
  }
  .index-bottom-bg{
    width: 100%;
    position: relative;
    z-index: 1;
  }
}

@keyframes pendulum{
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes floating{
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
