<template>
  <div>
    Counter: {{ count }}
    <Controller @add="add" @sub="sub" />

    <template v-for="(item, idx) in names">
      <slot :names="names" :item="item">
        <span>{{ item }}</span>
      </slot>
    </template>
  </div>
</template>

<script>
import Controller from './Controller.vue'
export default {
  components: {
    Controller
  },
  props: {
    names: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count += 1
    },
    sub() {
      this.count -= 1
    }
  }
}
</script>

<style>

</style>
