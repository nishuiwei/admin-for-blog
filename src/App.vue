<script setup lang="ts">
document.cookie = 'name=123456;'
</script>

<template>
	<router-view v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style scoped></style>
