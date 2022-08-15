<template>
  <div class="cover" @click.self="resetCoffee">
    <div class="dialogue-background">
      <div class="wrapper">
        <div class="image"></div>
        <div class="item">
          <div class="name">{{ name }}</div>
          <div class="price">$ {{  currentCoffeePrice }}</div>
        </div>

        <div class="options">
          <div class="ice-wrapper">
            <div @click="changeIce(ice)" v-for="ice in currentCoffeeIce" :key ='ice'
            :class="{'ice-chosen':ice=== chosenIce}"  class="ice">
              {{ ice }}
            </div>
          </div>

          <div class="size-wrapper">
            <div @click="changeSize(size)" v-for="size in currentCoffeeSize" :key='size'
            :class="{'size-chosen':size=== chosenSize}" class="size">
              {{ size }}
            </div>
          </div>
        </div>
        <div class="note-wrapper">
          <div class="name">備註</div>
          <textarea
            type="text"
            class="note"
            placeholder="少糖，去冰之類的"
            v-model="note"
          />
        </div>
      </div>
      <button @click ="orderDrink" class="btn-order">點飲料</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Dialogue',
  props: {
    name: String,
  },
  data() {
    return {
      chosenIce: '',
      chosenSize: '',
      note: '',
    };
  },
  created() {
    this.initialOptions();
  },
  computed: {
    currentCoffeeSize() {
      const set = this.currentCoffeeSet(this.name);
      const multiSizes = set.map((x) => x.size);
      return [...new Set(multiSizes)];
    },
    currentCoffeeIce() {
      const set = this.currentCoffeeSet(this.name);
      const multiIces = set.map((x) => x.ice);
      return [...new Set(multiIces)];
    },
    currentCoffeePrice() {
      const set = this.currentCoffeeSet(this.name);
      const that = this;

      function current(coffee) {
        return (coffee.size === that.chosenSize) && (coffee.ice === that.chosenIce);
      }
      return set.find(current).price;
    },
    ...mapState(['menuList']),
  },

  methods: {
    resetCoffee() {
      this.$emit('resetCoffee', '');
    },
    currentCoffeeSet(currentCoffee) {
      let currentCoffeeSet;
      this.menuList.flatMap((eachCoffee) => {
        if (eachCoffee[0].name !== currentCoffee) {
          return;
        }
        currentCoffeeSet = eachCoffee;
      });
      return currentCoffeeSet;
    },
    changeSize(size) {
      this.chosenSize = size;
    },
    changeIce(ice) {
      this.chosenIce = ice;
    },
    initialOptions() {
      [this.chosenIce] = this.currentCoffeeIce;
      [this.chosenSize] = this.currentCoffeeSize;
      this.note = '';
    },
    orderDrink() {
      const order = {};
      order.name = this.name;
      order.price = this.currentCoffeePrice;
      order.ice = this.chosenIce;
      order.size = this.chosenSize;
      order.note = this.note;
      order.uuid = +new Date();
      this.$emit('order', order);
      this.initialOptions();
      this.resetCoffee();
    },

  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';
.cover {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .dialogue-background {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 650px;
    background-color: $white;
    border-radius: $base-border-radius;
    border: solid 1px $orange;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    .wrapper {
      margin: 45px auto;

      .image {
        width: 340px;
        height: 250px;
        border-radius: $base-border-radius;
        background-color: $brown;
      }

      .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
        font-size: 24px;
        font-family: $oleo;
      }

      .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 18px auto;

        .ice-wrapper,
        .size-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ice,
        .size {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .ice {
          color: $brown;
          background-color: rgba(206, 148, 97, 0.2);
          &:hover {
            color: $orange;
            background-color: rgba(222, 160, 87, 0.2);
            cursor: pointer;
            box-shadow: $pressed-box-shadow;
          }
        }

        .ice-chosen {
            color: $orange;
            background-color: rgba(222, 160, 87, 0.2);
            cursor: pointer;
            box-shadow: $pressed-box-shadow;
          }
        .ice-wrapper {
          width: 30%;
        }
        .size-wrapper {
          width: 160px;
          .size {
            color: $light-brown;
            border: solid 1px $light-brown;
            &:hover {
              color: $orange;
              border: solid 1px $orange;
              cursor: pointer;
              box-shadow: $pressed-box-shadow;
            }
          }

          .size-chosen{
              color: $orange;
              border: solid 1px $orange;
              cursor: pointer;
              box-shadow: $pressed-box-shadow;
          }
        }
      }

      .note-wrapper {
        .name {
          color: $brown;
          font-size: 16px;
        }

        .note {
          margin-top: 8px;
          padding: 10px 16px;
          box-sizing: border-box;
          border-radius: $base-border-radius;
          border: solid 1px $brown;
          resize: none;
          width: 100%;
          height: 120px;
          color: $brown;

          &:focus {
            outline: none !important;
            box-shadow: 0 0 4px $orange;
          }

          &::placeholder {
            color: rgba(0, 0, 0, 0.25);
          }
        }
      }
    }

    .btn-order {
      position: absolute;
      bottom: 15px;
      width: 120px;
      height: 30px;
      border-radius: 10px;
      background-color: $brown;
      color: $white;

      &:hover {
        background-color: $orange;
      }
    }
  }
}
</style>
