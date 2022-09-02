<template>
  <!-- 抽奖圆盘 -->
  <div class="lottery-circle-wrapper">
    <div class="lottery-circle-container">
      <div class="lottery-circle">
        <div
          class="lottery-circle-img-container lotteryRound-anim"
          :style="`animation-play-state:${rotateAnimState};`"
        >
          <img
            class="lottery-circle-img"
            src="@/assets/image/turntable.png"
            alt=""
            :style="`transform:rotate(${roundRotateDeg}deg);`"
          />
        </div>

        <div class="lottery-arrow-wrapper" @click="clickLotteryButton()">
          <img
            class="lottery-arrow-img"
            src="@/assets/image/arrows.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <!-- 底部返回按钮 -->
  <div class="bottom-content">
    <div class="bottom-content-wrapper">
      <div class="bottom-content-container">
        <div class="lottery-page-container">
          <a class="lottery-page" href="/">返回首页</a>
        </div>

        <div class="remaining-number-container">
          <span class="remaining-number">今日剩余次数：3次</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import rewards from '@/utils/constants';

// 常量区
// 默认角度
const roundRotateDeg = ref(30);
// 默认旋转动画状态
const rotateAnimState = ref('paused');
// 默认的旋转状态
const isRotate = ref(false);

// computed

// 生命周期区
onMounted(() => {
  console.log(rewards);
});
//方法区

// 主函数区
const clickLotteryButton = () => {
  //   如果圆盘没在旋转，那么就让他旋转
  let isRotateState = isRotate.value;

  if (!isRotateState) {
    rotateAnimState.value = 'paused';

    let randomNum = parseInt(Math.random() * 5);
    let rewardName = rewards[randomNum];
    console.log('点击抽奖按钮', randomNum, rewardName);
    let realRoundRotateDeg = randomNum * 60 + 30;
    //   设置旋转的子函数 详情在子函数区
    rotateFun(realRoundRotateDeg);
  }
};
/// 子函数区
// 用于设置旋转圈数的函数
const rotateFun = (angle) => {
  //定时器
  let timer = null;

  //当前的角度
  let nowAngle = 0;

  //基本的旋转角度
  //必须为360的倍数，仅是增加圈数
  let basicAngle = 720;

  //设置圆盘在旋转状态
  isRotate.value = true;

  timer = setInterval(() => {
    // 当前的角度大于需要旋转的角度时，重置当前角度，清空定时器
    // 否则就不断给当前角度nowAngle 增加角度，产生旋转效果 ，增加几无所谓，只要合适，本次使用的是10
    //Math.ceil(basicAngle+angle-nowAngle)*0.05 是加的圈数+需要转的角度 - 当前的角度 *0.05
    //也是说 加的圈数+需要转的角度 是一定的，当前的角度是逐渐增大的，换句话说 当前的角度越大，给的值就越小，看起转的就越慢
    if (nowAngle >= angle + basicAngle) {
      nowAngle = 0;
      clearInterval(timer);
      isRotate.value = false;
    } else {
      nowAngle = nowAngle + Math.ceil(basicAngle + angle - nowAngle) * 0.05;
      roundRotateDeg.value = nowAngle;
    }
  }, 50);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 抽奖圆盘*/
.lottery-circle-wrapper {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
.lottery-circle-container {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.lottery-circle {
  position: relative;
  display: flex;

  height: fit-content;
  width: fit-content;
  overflow: hidden;
}
.lottery-circle-img-container {
  position: relative;
}
.lottery-circle-img {
  position: relative;
  width: 8.5rem;
  height: 8.5rem;
  transform: rotate(30deg);
}

.lottery-arrow-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
}
.lottery-arrow-container {
  position: relative;
  display: flex;
  cursor: pointer;
}
.lottery-arrow-img {
  height: 2.5rem;
  cursor: pointer;
}

.lotteryRound-anim {
  /*旋转10s */
  animation: lotteryRoundRotate 16s linear infinite;
}
/*旋转动画*/
@keyframes lotteryRoundRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* 底部内容 */
.bottom-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
}
.bottom-content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 4rem;
  width: fit-content;
}
.bottom-content-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
}
.start-game-container {
  width: fit-content;
}
.start-game-btn {
  width: 5rem;
}
.remaining-number-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.4rem;
  color: black;
  font-weight: 550;
  opacity: 1;
  margin-top: 0.2rem;
}
.remaining-number {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lottery-page-container a {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white !important;
  text-shadow: 0px 0px 8px green;
  font-size: 0.5rem;
  font-weight: bold;
  opacity: 1;
  text-decoration: underline;
}
</style>
