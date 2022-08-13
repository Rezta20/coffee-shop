<template>
  <div class="cover">
    <div class="dialogue-background">
      <div class="wrapper">
        <div class="image"></div>
        <div class="item">
          <div class="name">曼特寧</div>
          <div class="price">$65</div>
        </div>

        <div class="options">
          <div class="ice-wrapper">
            <div class="cold">C</div>
            <div class="hot">H</div>
          </div>
          <div class="size-wrapper">
            <div class="small">S</div>
            <div class="medium">M</div>
            <div class="large">L</div>
          </div>
        </div>
        <div class="note-wrapper">
          <div class="name">備註</div>
          <textarea type="text" class="note" placeholder="少糖，去冰之類的" />
        </div>
      </div>
      <button class="btn-order">點飲料</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialogue',
  components: {},
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
          div {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
        }

        .ice-wrapper {
          width: calc(100% - 220px);
          justify-content: space-between;

          div {
            color: $brown;
            background-color: rgba(206, 148, 97, 0.2);
          }

          div:hover {
            color: $orange;
            background-color: rgba(222, 160, 87, 0.2);
            cursor: pointer;
            box-shadow: $pressed-box-shadow;
          }
        }
        .size-wrapper {
          justify-content: space-between;
          width: 160px;

          div {
            color: $light-brown;
            border: solid 1px $light-brown;
          }

          div:hover {
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
