<template>
  <!-- 背景 -->
  <div class="bgc">
    <div class="bgc-container">
      <img class="bgc-img" src="@/assets/image/home-bg.png" alt="" />
    </div>
  </div>
  <!-- 页面 -->
  <div class="page">
    <!-- 内容 -->
    <div class="content">
      <!-- 顶部的页面图片  -->
      <div class="top-content">
        <img class="title-image" src="@/assets/image/title.png" alt="" />
      </div>
      <!-- 侧边活动按钮 -->
      <div class="activity-button-contanier">
        <div class="activity-button">
          <div class="activity-button-rulebtn-container">
            <img
              class="activity-button-rulebtn"
              src="@/assets/image/rulebtn.png"
              alt=""
            />
          </div>
          <div class="activity-button-orderbtn-container">
            <img
              class="activity-button-orderbtn"
              src="@/assets/image/orderbtn.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <router-view></router-view>
      <!-- 底部开始按钮 -->

      <!-- <div class="bottom-content">
          <div class="bottom-content-wrapper">
            <div class="bottom-content-container">
              <div class="start-game-container">
                <img
                  class="start-game-btn"
                  src="@/assets/image/statrbtn.png"
                  alt=""
                />
              </div>
              <div class="remaining-number-container">
                <span class="remaining-number">今日剩余次数：3次</span>
              </div>
  
              <div class="lottery-page-container">
                <a class="lottery-page" href="/todo">前往抽奖页</a>
              </div>
            </div>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
  font-family: 'SimHei';
}
/* 背景 */
.bgc {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
.bgc-container {
  position: relative;
}
.bgc-img {
  height: 100vh;
  width: 100vw;
}

/* 页面内容  */
.page {
  box-sizing: content-box;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
}
/* 1rem = 75px */
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
}
/* 顶部的内容 */
.top-content {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  padding-top: 1rem;
}
.title-image {
  width: 8rem;
  height: 3rem;
}

/* 中间的内容 */
.activity-button-contanier {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 100vw;
  justify-content: flex-end;
}
.activity-button {
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  width: 2rem;
}
.activity-button-rulebtn-container {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 9999;
}
.activity-button-orderbtn-container {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 9999;
}
.activity-button-rulebtn {
  width: 1.25rem;
  height: 1.25rem;
}
.activity-button-orderbtn {
  width: 1.25rem;
  height: 1.2rem;
}

/* 底部内容 */
/* .bottom-content {
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
    justify-content: center;
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
    color: rgb(120, 120, 120);
    opacity: 1;
  }
  .remaining-number {
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .lottery-page-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  
    font-size: 0.4rem;
    color: black;
    opacity: 1;
    text-decoration: underline;
    margin-top: 20px;
  } */
</style>
