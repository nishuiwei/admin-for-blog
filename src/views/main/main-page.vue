<template>
	<default-layout>
		<template #main>
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>
		</template>
	</default-layout>
</template>

<script lang="ts" setup>
import defaultLayout from '../../layout/default-layout.vue'
</script>
