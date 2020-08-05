<template>
  <div
    class="v-modal"
    ref="vModal"
  >

    <div class="v-modal-header">
      <h2 class="v-modal-title">Ваш город {{ radioButtonValue }}</h2>
      <div 
        class="v-modal-close"
        @click="hiddenModal"
      >
        <span class="v-modal-close__line"></span>
        <span class="v-modal-close__line"></span>
      </div>
      <div class="input-group">
        <div class="input">
          <input
            class="input__field input__field_search-city"
            ref="searchInput"
            type="text"
            name="search-city"
            placeholder="Введите город"
            v-model="searchInputValue"
            @input="searchCity(searchInputValue)"
          >
          <transition name="fade">
            <div 
              class="input__clear"
              v-show="searchInputValue.length > 0"
              @click="clearInput"
            >
              <span class="input__clear__line"></span>
              <span class="input__clear__line"></span>
            </div>
          </transition>
        </div>
        <transition name="fade">
          <button 
            class="button button_search-city"
            v-show="searchInputValue.length > 2"
            @click="searchCity(searchInputValue)"
          >
            Найти
          </button>
        </transition>
      </div>
    </div>
    <!-- v-modal-header -->

    <div class="v-modal-body">
      <v-tabs>
        <v-tab
          name="Наши магазины"
          :cityCounter="filteredCityes.length"
          :selected="true"
        >
          <div class="v-tab-content v-tab-content_shops">
            <label
              class="radio-button"
              v-for="city in filteredCityes"
              :key="city.id"
              @click="sendDataToParent"
            >
              <input
                class="radio-button__field"
                type="radio"
                name="cityes"
                :value="city.name"
                :checked="city.checked"
                v-model="radioButtonValue"
              >
              <span class="radio-button__caption">{{ city.name }}</span>
            </label>
          </div>
        </v-tab>
        <v-tab name="Пункты выдачи заказа">
          <div class="v-tab-content v-tab-content_pick-up">
            
          </div>
        </v-tab>
      </v-tabs>
    </div>
    <!-- v-modal-body -->

    <div class="v-modal-footer">
      Не нашли свой населенный пункт в списке? Воспользуйтесь <span @click="focusingOnInput">поиском</span>.
    </div>
    <!-- v-modal-footer -->

  </div>
</template>

<script>
import vTabs from '@/components/v-tabs'
import vTab from '@/components/v-tab'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-modal',
  components: {
    vTabs,
    vTab
  },
  data: () => ({
    cityesData: [],
    searchInputValue: '',
    radioButtonValue: 'Москва'
  }),
  computed: {
    ...mapGetters([
      'CITYES',
      'SEARCH_CITY_VALUE'
    ]),
    filteredCityes() {
      if (this.cityesData.length) {
        return this.cityesData
      } else {
        return this.CITYES
      }
    }
  },
  methods: {
    hiddenModal() {
      this.$emit('hiddenModal');
    },
    focusingOnInput() {
      this.$refs.searchInput.focus();
    },
    sendDataToParent() {
      this.$emit('sendCityName', this.radioButtonValue);
    },
    clearInput() {
      this.searchInputValue = '';
      this.GET_CLEAR_SEARCH_CITY_VALUE();
    },
    searchCity(value) {
      this.GET_SEARCH_CITY_TO_VUEX(value);
    },
    sortCityesBySearchValue(value) {
      this.cityesData = [...this.CITYES];
      if (value) {
        this.cityesData = this.cityesData.filter(function(item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.cityesData = this.CITYES;
      }
    },
    ...mapActions([
      'GET_CITYES_FROM_API',
      'GET_SEARCH_CITY_TO_VUEX',
      'GET_CLEAR_SEARCH_CITY_VALUE'
    ])
  },
  watch: {
    SEARCH_CITY_VALUE() {
      this.sortCityesBySearchValue(this.SEARCH_CITY_VALUE);
    }
  },
  mounted() {
    this.GET_CITYES_FROM_API()
      .then((response) => {
        if (response) {
          this.sortCityesBySearchValue(this.SEARCH_CITY_VALUE)
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.v-modal {
  position: absolute;
  width: 640px;
  height: auto;
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
    color: $mainTextColor;

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
    color: $primaryTextColor;
    margin-bottom: 26px;
  }

  &-close {
    position: absolute;
    top: 12px;
    right: 0;
    width: 18px;
    height: 12px;
    transition: .2s;
    z-index: 9999;
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

.v-tab-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;

  &_shops {
    max-height: 180px;
  }

  &_pick-up {
    max-height: 240px;
    overflow-y: auto;
  }
}

.radio-button {
  position: relative;
  display: block;
  width: 200px;
  padding: 4px 0 4px 8px;
  font-size: 14px;
  color: $primaryTextColor;
  user-select: none;
  cursor: pointer;

  &:hover &__caption {
    color: #FF3030;
  }

  &__field {
    display: none;
  }

  &__field:checked + &__caption {
    color: #800080;
  }

  &__caption {
    display: block;
    user-select: none;
  }
}


/*             Анимация появления кнопок                */

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/*             END Анимация появления кнопок            */
</style>
