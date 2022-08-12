<template>
  <div v-for="coffee in coffees" :key="coffee.name" class="wrapper">
    <div class="image"></div>
    <div class="detail">
      <div class="upper">
        <h3 class="name">{{ coffee.name }}</h3>
        <div class="price">
          <span>$</span>{{ coffee.price }} <span class="up-to">起</span>
        </div>
      </div>
      <div class="lower">
        <div class="type-wrapper">
          <div v-for="ice in coffee.ice" :key="ice" class="type">
            {{ ice }}
          </div>
        </div>
        <div class="size-wrapper">
          <div v-for="size in coffee.size" :key="size" class="size">
            {{ size }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeverageCard',
  components: {},
  props: ['coffees'],
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/index';

.wrapper {
  box-sizing: border-box;
  border-radius: 10px;
  background-color: $white;
  width: 300px;
  height: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;

  .image {
    width: 80px;
    height: 70px;
    background-color: $brown;
    border-radius: 10px;
  }

  .detail {
    width: 50%;
    .upper,
    .lower {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      padding-left: 5px;
      .up-to {
        font-size: 14px;
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
        width: 50%;
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
