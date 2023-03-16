<template>
	<default-layout>
		<template #main>
			<router-view v-slot="{ Component, route }">
				<!-- 使用任何自定义过渡和回退到 `fade` -->
				<transition :name="route.meta.transition as string || 'fade'">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</template>
	</default-layout>
</template>

<script lang="ts" setup>
import defaultLayout from '../../layout/default-layout.vue'
</script>
