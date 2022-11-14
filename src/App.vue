<template>
  <div id="app">
    <header>
      <img alt="Lego logo" class="logo" src="@/assets/logo.png" height="75" />
    </header>
    <main class="stopwatch">
      <div class="brick">
        <div class="brick__bits">
          <div class="brick__bits__bit"></div>
          <div class="brick__bits__bit"></div>
          <div class="brick__bits__bit"></div>
          <div class="brick__bits__bit"></div>
        </div>
        <div class="brick__body">
          <p class="stopwatch__time">{{ time }}</p>
          <div class="stopwatch__actions">
            <button class="button stopwatch__start" @click="start">
              Start
            </button>
            <button class="button stopwatch__stop" @click="stop">Stop</button>
            <button class="button stopwatch__reset">Reset</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "00:00:00.000",
      timeBegan: null,
      tmeStopped: null,
      stoppdDuration: 0,
      started: null,
      running: false,
    };
  },
  methods: {
    start() {
      console.log("start timer");
    },
    
    stop() {
      console.log("stop timer");
    },

    clockRunning() {
      console.log("clock running: ", this.time);
    },

    formatNumber(val, noOfDigits) {
      let zero = "";
      for (let i = 0; i < noOfDigits; i++) {
        zero += "0";
      }
      return (zero + val).slice(-noOfDigits);
    },
  },
}
</script>

<style scoped lang="scss">
  header {
  margin-top: var(--gap--default);
}

.logo {
  display: block;
  margin: 0 auto;
}

.brick {
  max-width: 350px;
  margin: var(--gap--default) auto;

  &__bits {
    display: flex;
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;

    &__bit {
      height: 16px;
      width: 40px;
      margin: 0;
      background: var(--lr-red);
      background: linear-gradient(
        90deg,
        var(--lr-red--a) 0%,
        var(--lr-red--a--soft) 5%,
        var(--lr-red--a) 50%,
        var(--lr-red--a--soft) 97%,
        var(--lr-red--a) 100%
      );
      border-radius: 4px 4px 0 0;
    }
  }
  &__body {
    background-color: var(--lr-red);
    padding: var(--gap--default);
    border-radius: 2px;
    text-align: center;

    .stopwatch {
      &__time {
        width: 300px;
        margin: 0 auto;
        text-align: left;
        color: white;
        font-size: 24px;
      }
      &__actions {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 10px;
      }
    }

    .button {
      background-color: var(--lr-yellow);
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-weight: bold;
      font-size: 18px;
      border: none;
      border-radius: 2px;
      padding: 8px 16px;
    }
  }
}
</style>
