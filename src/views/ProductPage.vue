<script lang="ts">

	import { ComputedRef, defineComponent, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import ProductCard from '@/components/ProductCard.vue'

	export default defineComponent({
		components: {ProductCard},
		setup() {
			const router = useRoute()
			const factId = computed(() => router.params.id) as ComputedRef<string>
			return {factId}
		}
	})
</script>

<template>
	<FactCard :fact-id="parseInt(factId)" />
</template>


