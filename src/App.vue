<template>
  <div class="main-background">
    <section class="left-wrapper">
      <h3 class="logo-title">Coffee Shop</h3>
      <div class="beverage-cards">
        <BeverageCard :coffees="coffees" />
      </div>
    </section>

    <OrderList />
    <Dialogue />
  </div>
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import BeverageCard from '@/components/BeverageCard.vue';
import Dialogue from './components/Dialogue.vue';

export default {
  name: 'App',
  components: {
    OrderList,
    BeverageCard,
    Dialogue,
  },
  data() {
    return {
      coffees: [
        {
          name: '曼特寧',
          price: '65',
          ice: ['Cold', 'Hot'],
          size: ['S', 'M', 'L'],
        },
        {
          name: '美式',
          price: '55',
          ice: ['Cold', 'Hot'],
          size: ['S', 'M', 'L'],
        },
        {
          name: '拿鐵',
          price: '95',
          ice: ['Cold', 'Hot'],
          size: ['S', 'M', 'L'],
        },
        {
          name: '摩卡冰沙',
          price: '110',
          ice: ['Cold'],
          size: ['M', 'L'],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';

.main-background {
  background-color: $main-background;
  position: fixed;
  // 記得拿掉
  height: 100vh;
  width: 100%;

  .left-wrapper {
    margin: 20px 30px;
    width: 70%;
  }
}

.beverage-cards {
  width: 100%;
}
</style>
