import { createStore } from 'vuex';

export default createStore({
  state: {
    menuList: [
      [
        {
          name: '可可瑪奇朵',
          price: 65,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '可可瑪奇朵',
          price: 85,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '可可瑪奇朵',
          price: 105,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '可可瑪奇朵',
          price: 65,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '可可瑪奇朵',
          price: 85,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '可可瑪奇朵',
          price: 105,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '雲朵冰搖濃縮咖啡',
          price: 105,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '雲朵冰搖濃縮咖啡',
          price: 135,
          ice: 'Cold',
          size: 'M',
        },
      ],
      [
        {
          name: '那堤',
          price: 95,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '那堤',
          price: 125,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '那堤',
          price: 145,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '那堤',
          price: 95,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '那堤',
          price: 125,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '那堤',
          price: 145,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '焦糖瑪奇朵',
          price: 110,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '焦糖瑪奇朵',
          price: 130,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '焦糖瑪奇朵',
          price: 110,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '焦糖瑪奇朵',
          price: 130,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '摩卡',
          price: 65,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '摩卡',
          price: 85,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '摩卡',
          price: 105,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '摩卡',
          price: 65,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '摩卡',
          price: 85,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '摩卡',
          price: 105,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '美式',
          price: 55,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '美式',
          price: 75,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '美式',
          price: 95,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '美式',
          price: 55,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '美式',
          price: 75,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '美式',
          price: 95,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '拿鐵',
          price: 95,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '拿鐵',
          price: 135,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '拿鐵',
          price: 165,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '拿鐵',
          price: 95,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '拿鐵',
          price: 135,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '拿鐵',
          price: 165,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '卡布奇諾',
          price: 85,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '卡布奇諾',
          price: 110,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '卡布奇諾',
          price: 150,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '卡布奇諾',
          price: 85,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '卡布奇諾',
          price: 110,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '卡布奇諾',
          price: 150,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '濃縮咖啡',
          price: 85,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '濃縮咖啡',
          price: 135,
          ice: 'Hot',
          size: 'M',
        },
      ],
      [
        {
          name: '特選馥郁那提',
          price: 155,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '特選馥郁那提',
          price: 195,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '特選馥郁那提',
          price: 155,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '特選馥郁那提',
          price: 195,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '馥列白',
          price: 95,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '馥列白',
          price: 135,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '馥列白',
          price: 95,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '馥列白',
          price: 135,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '白巧克力那堤',
          price: 95,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '白巧克力那堤',
          price: 145,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '白巧克力那堤',
          price: 175,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '白巧克力那堤',
          price: 95,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '白巧克力那堤',
          price: 145,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '白巧克力那堤',
          price: 175,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '榛果巧克力起司風味咖啡星冰樂',
          price: 125,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '榛果巧克力起司風味咖啡星冰樂',
          price: 165,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '榛果巧克力起司風味咖啡星冰樂',
          price: 195,
          ice: 'Cold',
          size: 'L',
        },
      ],
      [
        {
          name: '咖啡星冰樂',
          price: 155,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '咖啡星冰樂',
          price: 185,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '咖啡星冰樂',
          price: 205,
          ice: 'Cold',
          size: 'L',
        },
      ],
      [
        {
          name: '焦糖星冰樂',
          price: 105,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '焦糖星冰樂',
          price: 145,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '焦糖星冰樂',
          price: 175,
          ice: 'Cold',
          size: 'L',
        },
      ],
      [
        {
          name: '焦糖可可碎片星冰樂',
          price: 110,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '焦糖可可碎片星冰樂',
          price: 150,
          ice: 'Cold',
          size: 'L',
        },
      ],
      [
        {
          name: '摩卡可可碎片星冰樂',
          price: 125,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '摩卡可可碎片星冰樂',
          price: 155,
          ice: 'Cold',
          size: 'L',
        },
      ],
      [
        {
          name: '醇濃抹茶星冰樂',
          price: 95,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '醇濃抹茶星冰樂',
          price: 135,
          ice: 'Cold',
          size: 'M',
        },
      ],
      [
        {
          name: '巧克力可可碎片星冰樂',
          price: 145,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '巧克力可可碎片星冰樂',
          price: 175,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '巧克力可可碎片星冰樂',
          price: 195,
          ice: 'Cold',
          size: 'L',
        },
      ],
      [
        {
          name: '經典巧克力',
          price: 75,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '經典巧克力',
          price: 105,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '經典巧克力',
          price: 135,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '經典巧克力',
          price: 75,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '經典巧克力',
          price: 105,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '經典巧克力',
          price: 135,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '經典紅茶那堤',
          price: 105,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '經典紅茶那堤',
          price: 135,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '經典紅茶那堤',
          price: 165,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '經典紅茶那堤',
          price: 105,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '經典紅茶那堤',
          price: 135,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '經典紅茶那堤',
          price: 165,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '玫瑰蜜香茶那堤',
          price: 75,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '玫瑰蜜香茶那堤',
          price: 105,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '玫瑰蜜香茶那堤',
          price: 115,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '玫瑰蜜香茶那堤',
          price: 75,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '玫瑰蜜香茶那堤',
          price: 105,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '玫瑰蜜香茶那堤',
          price: 115,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '抹茶那堤',
          price: 75,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '抹茶那堤',
          price: 105,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '抹茶那堤',
          price: 125,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '抹茶那堤',
          price: 75,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '抹茶那堤',
          price: 105,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '抹茶那堤',
          price: 125,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '抹茶咖啡',
          price: 85,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '抹茶咖啡',
          price: 105,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '抹茶咖啡',
          price: 145,
          ice: 'Cold',
          size: 'L',
        },
        {
          name: '抹茶咖啡',
          price: 85,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '抹茶咖啡',
          price: 105,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '抹茶咖啡',
          price: 145,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '西印度櫻桃紅茶',
          price: 65,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '西印度櫻桃紅茶',
          price: 85,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '西印度櫻桃紅茶',
          price: 95,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '茶瓦納洋甘菊花草菜',
          price: 85,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '茶瓦納洋甘菊花草菜',
          price: 105,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '茶瓦納洋甘菊花草菜',
          price: 125,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '茶瓦納英式早餐紅茶',
          price: 85,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '茶瓦納英式早餐紅茶',
          price: 105,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '茶瓦納英式早餐紅茶',
          price: 125,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '熱蜜柚紅茶',
          price: 55,
          ice: 'Hot',
          size: 'S',
        },
        {
          name: '熱蜜柚紅茶',
          price: 125,
          ice: 'Hot',
          size: 'M',
        },
        {
          name: '熱蜜柚紅茶',
          price: 155,
          ice: 'Hot',
          size: 'L',
        },
      ],
      [
        {
          name: '冰搖果茶',
          price: 85,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '冰搖果茶',
          price: 105,
          ice: 'Cold',
          size: 'M',
        },
      ],
      [
        {
          name: '冰搖檸檬紅茶',
          price: 75,
          ice: 'Cold',
          size: 'S',
        },
        {
          name: '冰搖檸檬紅茶',
          price: 95,
          ice: 'Cold',
          size: 'M',
        },
        {
          name: '冰搖檸檬紅茶',
          price: 125,
          ice: 'Cold',
          size: 'L',
        },
      ],
    ],

    orderList: [],
    historyOrderList: [],
  },
  mutations: {
    orderDrink(state, payload) {
      state.orderList.unshift(payload);
    },
    buildOrder(state, payload) {
      state.historyOrderList.unshift(payload);
      state.orderList = [];
    },
  },
  actions: {},
  modules: {},
});
