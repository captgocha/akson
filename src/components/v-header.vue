<template>
  <header class="v-header">
    <div class="top-menu">
      <div class="container">
        <div class="top-menu__wrapper">
          <div 
            class="city-select"
            :class="{'active': isOpen}"
            @click="isOpen =! isOpen"
          >
            <span class="city-select__location">{{ cityName }}</span>
          </div>
        </div>
        <transition name="show-modal">
          <v-modal 
            v-if="isOpen"
            @hiddenModal="hiddenModal"
            @sendCityName="getFromChildCityName"
          ></v-modal>
        </transition>
      </div>
    </div>
    <nav class="navigation">
      <div class="container">
        <div class="navigation__wrapper">
          <router-link
            class="navigation__item"
            v-for="item in navigationItems"
            :key="item.id"
            :to="item.path"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import vModal from '@/components/v-modal'

export default {
  name: 'v-header',
  components: {
    vModal
  },
  data: () => ({
    // Название города работает плохо, только по двойному клику
    cityName: 'Москва',
    isOpen: false,
    navigationItems: [
      { id: 1, name: 'Строительные материалы', path: '/construction_materials' },
      { id: 2, name: 'Краски', path: '/paints' },
      { id: 3, name: 'Сантехника', path: '/plumbing' },
      { id: 4, name: 'Керамическая плитка', path: '/ceramic_tile' },
      { id: 5, name: 'Товары для дома', path: '/household_products' },
      { id: 6, name: 'Новый год', path: '/new_year' },
    ]
  }),
  methods: {
    hiddenModal() {
      this.isOpen = false;
    },
    getFromChildCityName(data) {
      this.cityName = data;
    }
  }
}
</script>

<style lang="scss" scoped>
.top-menu {
  height: 36px;
  background-color: #f5f5f6;
  border-bottom: 1px solid #e1e1e1;

  &__wrapper {
    display: flex;
    align-items: center;
    height: 36px;
  }
}

.city-select {
  display: flex;
  align-items: center;
  width: 120px;
  height: inherit;
  border-right: 1px solid #e1e1e1;
  cursor: pointer;

  &__location {
    position: relative;
    padding: 0 12px 0 20px;
    font-size: 12px;
    font-weight: 600;
    color: $primaryTextColor;
  }

  &__location::before {
    content: url('~@/assets/images/location-icon.svg');
    position: absolute;
    top: 2px;
    left: 0;
  }

  &__location::after {
    content: url('~@/assets/images/city-select-arrow.svg');
    position: absolute;
    top: -1px;
    right: 0;
    transition: transform .3s ease-out;
  }

  &.active &__location::after {
    transform: rotate(-180deg);
    top: 0;
  }
}

.navigation {
  border-bottom: 1px solid #E1E1E1;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 50px;
  }

  &__item {
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    color: $mainTextColor;
    transition: All 0.3s ease 0s;
  }

  &__item:hover {
    color: #c44400;
  }
}

/*             Анимация появления модального окна              */

.show-modal-enter-active {
  transition: all .3s ease;
}

.show-modal-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1);
}

.show-modal-enter, .show-modal-leave-to {
  opacity: 0;
}

/*             END Анимация появления модального окна            */
</style>
