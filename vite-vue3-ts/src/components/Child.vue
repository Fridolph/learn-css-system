<template>
  <div>
    <template v-for="(item, idx) in data">
      <slot :item="item" :index="idx"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
