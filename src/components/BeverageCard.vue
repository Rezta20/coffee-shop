<template>
<div>

  <div
    v-for="coffee in allCoffeeName"
    :key="coffee"
    class="wrapper"
    @click="selectedCoffee(coffee)"
  >
    <div class="image"></div>
    <div class="detail">
      <div class="upper">
        <h3 class="name">{{ coffee }}</h3>
        <div class="price">
          <span>$</span>{{coffeeBasePrice(coffee)}} <span class="up-to">起</span>
        </div>
      </div>
      <div class="lower">
        <!-- <div class="type-wrapper">
          <div v-for="ice in coffee.ice" :key="ice" class="type">
            {{ ice }}
          </div>
        </div> -->
        <div class="size-wrapper">
          <div v-for="size in currentCoffeeSize(coffee)" :key="size" class="size">
            {{ size }}
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BeverageCard',
  components: {},
  props: [],
  computed: {
    allCoffeeName() {
      const eachName = [
        ...new Set(
          this.menuList.flatMap((eachCoffee) => eachCoffee.map((coffee) => coffee.name)),
        ),
      ];
      return eachName;
    },
    currentCoffeeSize() {
      return (currentCoffee) => {
        const set = this.currentCoffeeSet(currentCoffee);
        const multiSizes = set.map((x) => x.size);
        return [...new Set(multiSizes)];
      };
    },
    currentCoffeePrice() {
      return (currentCoffee) => {
        const set = this.currentCoffeeSet(currentCoffee);
        const multiPrices = set.map((x) => x.price);
        return [...new Set(multiPrices)];
      };
    },
    coffeeBasePrice() {
      return (currentCoffee) => {
        const price = this.currentCoffeePrice(currentCoffee);
        let min = Infinity;

        price.forEach((x) => {
          if (min > x) {
            min = x;
          }
        });
        return min;
      };
    },
    ...mapState(['menuList']),
  },
  methods: {

    selectedCoffee(coffee) {
      this.$emit('selectedCoffee', coffee);
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
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';

.wrapper {
  box-sizing: border-box;
  border-radius: 10px;
  background-color: $white;
  width: 300px;
  height: 110px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20px 20px;

  .image {
    width: 80px;
    height: 70px;
    background-color: $brown;
    border-radius: 10px;
  }

  .detail {
    width: 60%;
    .upper,
    .lower {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      width: 65px;
      padding-left: 5px;
      text-align: right;
      .up-to {
        font-size: 14px;
      }
    }

    .upper {
      .name {
        font-size: 16px;
        font-weight: 500;
      }
    }

    .lower {
      padding-top: 10px;
      color: $brown;

      .type-wrapper,
      .size-wrapper {
        display: flex;
        justify-content: space-between;
      }

      .type-wrapper {
        width: 45%;
      }

      .size-wrapper {
        width: 35%;
      }
    }
  }

  &:hover {
    border: solid 2px $orange;
    box-shadow: $pressed-box-shadow;
  }

  .separate-slide:last-child {
    // display: none;
    color: black;
  }
}
</style>
