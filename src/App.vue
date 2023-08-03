<template>
  <span> bermuda R$ {{ unitPrice }}</span> <br>
  <span> quantidade: {{ count }}</span>
  <hr>
  <button @click="count++"> adicionar </button>
  <button @click="count >= 1 ? count-- : 0"> remover </button>
  <span> {{ count }} </span>
  <hr>
  <span>total: R$ {{ (count * unitPrice).toFixed(2) }}</span>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      count: Number,
      msg : {type: String, required: true}
    },
      data() {
      return {
        count : 0,
        unitPrice : 29.69,
      }
    },
    mothods : {
      log(){
        console.log(this.count)
      }
    },
    mounted() {
      this.msg
    }
  })

</script>


