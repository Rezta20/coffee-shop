<template>
  <div class="background">
    <div class="order-card-wrapper"><OrderCard /></div>
    <div class="total">
      <div class="wrapper">
        <div class="name">總共</div>
        <div class="price">$1,013</div>
      </div>
      <button class="btn-build">建立訂單</button>
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue';

export default {
  name: 'OrderList',
  components: {
    OrderCard,
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/index';
.background {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: $base-border-radius;
  width: 88%;
  height: 88%;
  margin: 0 auto;
  position: relative;

  .order-card-wrapper {
    width: 100%;
    height: 80%;
    overflow-y: scroll;
  }

  .total {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    border-top: solid 3px $brown;
    width: 88%;
    position: absolute;
    right: 20px;
    bottom: 20px;

    .wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      div {
        font-size: 22px;
        font-family: $oleo;
        font-weight: 400;
        margin-top: 5px;
      }
    }

    .btn-build {
      width: 120px;
      height: 40px;
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
