<template>
<div>
  <div v-for="(coffee, index) in selected" :key="index" class="wrapper">
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
        <div class="amount">x {{ coffee.amount }}</div>
      </div>
      <div class="notes">
        {{ coffee.notes }}
      </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'OrderCard',
  components: {},
  data() {
    return {
      selected: [
        {
          name: '曼特寧',
          price: '65',
          ice: 'Cold',
          size: 'S',
          amount: 2,
          notes: '',
        },
        {
          name: '拿鐵',
          price: '95',
          ice: 'Hot',
          size: 'M',
          amount: 1,
          notes: '這是備註可以隨意增加打字的地方',
        },
        {
          name: '美式',
          price: '45',
          ice: 'Cold',
          size: 'L',
          amount: 1,
          notes: '',
        },
        {
          name: '曼特寧',
          price: '65',
          ice: 'Cold',
          size: 'S',
          amount: 2,
          notes: '這是備註可以隨意增加打字的地方',
        },
        {
          name: '曼特寧',
          price: '65',
          ice: 'Cold',
          size: 'S',
          amount: 2,
          notes: '這是備註可以隨意增加打字的地方',
        },
        {
          name: '曼特寧',
          price: '65',
          ice: 'Cold',
          size: 'S',
          amount: 2,
          notes: '這是備註可以隨意增加打字的地方',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';
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
