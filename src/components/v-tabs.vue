<template>
  <div class="v-tabs">
    <ul class="v-tabs__buttons" style="margin-bottom: 20px">
      <li
        class="v-tabs__buttons__item"
        :class="{ 'active': tab.isActive }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(tab)"
      >
        {{ tab.name }}
        <span>{{ cityCounter }}</span>
      </li>
    </ul>
    <div class="v-tabs__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-tabs',
  props: {
    cityCounter: {
      type: Number,
      default: () => 18
    }
  },
  data: () => ({
    tabs: []
  }),
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    }
  },
  created() {
    this.tabs = this.$children;
  }
}
</script>

<style lang="scss" scoped>
.v-tabs__buttons {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #D7D7D7;

  &__item {
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    color: #666;
    padding-bottom: 8px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &.active {
      color: #333;
      border-bottom: 2px solid #800080;
    }

    span {
      margin-left: 4px;
      padding: 0 3px;
      font-size: 10px;
      line-height: 14px;
      font-weight: normal;
      color: #666;
    }

    &.active span {
      color: #800080;
      background-color: #F2F2F2;
      border-radius: 2px;
    }
  }
}
</style>
