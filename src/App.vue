<template>
<div id="app">
	<AppHeader />
    <router-view />
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
    components: { AppHeader }
}
</script>

<style lang="scss">
@import '@/styles/_styles.scss';

#app {
	
}
</style>
