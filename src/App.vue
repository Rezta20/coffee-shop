<template>
  <div class="main-background">
    <section class="left-wrapper">
      <h3 class="logo-title">Coffee Shop</h3>
      <div class="beverage-cards">
        <BeverageCard :coffees="coffees" />
      </div>
    </section>

    <section class="right-wrapper">
      <h3 class="logo-title">Order List</h3>
      <OrderList />
    </section>

    <Dialogue v-show="false" />
  </div>
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import BeverageCard from '@/components/BeverageCard.vue';
import Dialogue from './components/Dialogue.vue';

export default {
  name: 'App',
  components: {
    BeverageCard,
    Dialogue,
    OrderList,
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
          name: '美式',
          price: '55',
          ice: ['Cold', 'Hot'],
          size: ['S', 'M', 'L'],
        },
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
          name: '美式',
          price: '55',
          ice: ['Cold', 'Hot'],
          size: ['S', 'M', 'L'],
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
  height: 100%;
  width: 100%;
  display: flex;

  .left-wrapper {
    width: calc(100% - 400px);
    height: 100%;
  }

  .right-wrapper {
    width: 400px;
    height: 100%;
    background-color: rgba(224, 216, 176, 0.5);
    position: fixed;
    right: 0;
    top: 0;
  }
}

.beverage-cards {
  width: 100%;
  height: 850px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;
  position: relative;
}
</style>
