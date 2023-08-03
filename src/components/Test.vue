<template>
	<span> {{ prodName }}: </span>
	<span> R$: {{ unitValue }}</span>
	<button @click="(unitValue as any)++">{{ unitValue }}</button>
</template>

<script setup lang="ts">

	export interface Props {
		unitValue : number,
		prodName : string
	}

	const props = withDefaults(defineProps<Props>(), {

		unitValue : 30,
		prodName : "ferro de passar"

	})

</script>