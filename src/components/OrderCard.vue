<template>
<div class="root-wrapper">
  <div v-if="!orderList.length" class="text-no-item">點些飲料吧 !</div>
  <div v-if="orderList.length">
  <div  v-for="coffee in orderList" :key="coffee" class="wrapper">
    <div class="actions">
      <div class="edit">E</div>
      <div class="delete">D</div>
    </div>
    <div class="image"></div>
    <div class="detail">
      <div class="upper">
        <h3 class="name">{{ coffee.name }}</h3>
        <div class="price">${{ coffee.price }}</div>
      </div>
      <div class="lower">
        <div class="ice">{{ coffee.ice }}</div>
        <div class="size">{{ coffee.size }}</div>
        <!-- <div class="amount">x {{ coffee.amount }}</div> -->
      </div>
      <div class="notes">
        {{ coffee.note }}
      </div>
    </div>
  </div>
  </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OrderCard',
  components: {},
  computed: {
    ...mapState(['orderList']),
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';

.root-wrapper{
  height:94%;
}
.text-no-item{
  display:flex;
  justify-content: center;
  align-items: center;
  color:$brown;
  font-size:18px;
  height:100%;

}
.wrapper {
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  width: 85%;
  margin: 30px auto;
  .actions {
    height: 70px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    color: $light-brown;

    .edit:hover {
      color: $orange;
      cursor: pointer;
    }
    .delete:hover {
      color: $orange;
      cursor: pointer;
    }
  }
  .image {
    width: 80px;
    height: 70px;
    background-color: gray;
    border-radius: 10px;
  }

  .upper,
  .lower,
  .notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 135px;
  }
  .notes {
    word-break: break-all;
  }

  .lower .notes {
    font-weight: 300;
  }

  .upper {
    font-weight: 400;
    margin-top: 5px;
    font-family: $oleo;
  }

  .lower {
    margin: 5px auto;
    color: $brown;
  }
}
</style>
