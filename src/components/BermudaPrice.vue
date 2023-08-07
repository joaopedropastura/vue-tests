<template>
    <hr>
    <span> bermuda R$ {{ unitPrice }}</span> <br>
    <span> quantidade: {{ count }}</span>
    <button @click="increment"> + </button>
    <button @click="count >= 1 ? count-- : 0"> - </button>
    <hr>
    <span>total: R$ {{ (count * unitPrice).toFixed(2) }}</span>
    <hr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count : 0,
      unitPrice : 29.69,
    }
  },
  methods : {
    increment() {
        console.log("mais um")
        this.count++
    }
  }
})
</script>