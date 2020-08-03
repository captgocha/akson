<template>
  <div class="v-modal">

    <div class="v-modal-header">
      <h2 class="v-modal-title">Ваш город Череповец</h2>
      <div 
        class="v-modal-close"
      >
        <span class="v-modal-close__line"></span>
        <span class="v-modal-close__line"></span>
      </div>
      <div class="input-group">
        <div class="input">
          <input
            class="input__field input__field_search-city"
            type="text"
            name="search-city"
            placeholder="Введите город"
          >
          <div class="input__clear">
            <span class="input__clear__line"></span>
            <span class="input__clear__line"></span>
          </div>
        </div>
        <button class="button button_search-city">Найти</button>
      </div>
    </div>

    <div class="v-modal-body">
      <v-tabs>
        <v-tab
          name="Наши магазины"
          :selected="true"
        >
          
        </v-tab>
        <v-tab
          name="Пункты выдачи заказа"
        >

        </v-tab>
      </v-tabs>
    </div>

    <div class="v-modal-footer">
      Не нашли свой населенный пункт в списке? Воспользуйтесь <span>поиском</span>.
    </div>

  </div>
</template>

<script>
import VTabs from '@/components/v-tabs'
import VTab from '@/components/v-tab'

export default {
  name: 'v-modal',
  components: {
    VTabs,
    VTab
  },
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.v-modal {
  position: absolute;
  width: 640px;
  padding: 24px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.25);
  z-index: 999;

  &-header {
    position: relative;
    margin-bottom: 22px;
  }

  &-body {
    margin-bottom: 16px;
  }

  &-footer {
    font-size: 14px;
    line-height: 19px;
    color: #666;

    span {
      text-decoration: underline;
      cursor: pointer;
    }

    span:hover {
      color: #f00;
    }
  }

  &-title {
    font-weight: bold;
    font-size: 24px;
    color: #333;
    margin-bottom: 26px;
  }

  &-close {
    position: absolute;
    top: 12px;
    right: 0;
    width: 18px;
    height: 12px;
    transition: .2s;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: -8px;
      left: -8px;
      bottom: -8px;
      right: -8px;
    }

    &__line {
      position: absolute;
      display: block;
      width: 18px;
      height: 1px;
      background: #6d6d6d;

      &:first-child {
        top: 0;
        transform: translateY(5px) rotate(45deg) translateZ(0);
      }

      &:last-child {
        bottom: 0;
        transform: translateY(-6px) rotate(-45deg) translateZ(0);
      }
    }
  }
}

.input-group {
  display: flex;
  align-items: center;
}

.input {
  position: relative;

  &__field {
    width: 400px;
    height: 56px;
    padding: 0 12px;
    margin-right: 16px;
    font-size: 16px;
    line-height: 22px;
    background: #FFFF;
    border: 1px solid #DCDCDC;
    border-radius: 4px;
    outline: none;
  }

  &__clear {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 34px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #b4b4b4;
    cursor: pointer;

    &:hover {
      background: #5c5c5c;
    }

    &__line {
      position: absolute;
      display: block;
      width: 12px;
      height: 1px;
      background: #fff;

      &:first-child {
        top: 0;
        transform: translateY(7.5px) translateX(2px) rotate(45deg) translateZ(0);
      }

      &:last-child {
        bottom: 0;
        transform: translateY(-7.5px) translateX(2px) rotate(-45deg) translateZ(0);
      }
    }
  }
}

.button_search-city {
  height: 56px;
  padding: 0 24px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  background: #700C78;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #54095B;
  }
}
</style>
