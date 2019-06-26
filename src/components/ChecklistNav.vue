<template>
<div id="checklist-nav">
	<div class="filters">
		<ChecklistNavItem icon="" title="Not Checked" class="active" :num="9" />
		<ChecklistNavItem icon="" title="Completed" :num="4" />
		<ChecklistNavItem icon="" title="No Evidence" :num="2" />
	</div>
	
	<div class="properties">
		<ChecklistNavItem v-for="property in this.$store.state.properties" icon="" :title="property.title" />
	</div>
	
	<div class="settings">
		<ChecklistNavItem icon="" title="Settings" />
	</div>
</div>
</template>

<script>
import ChecklistNavItem from '@/components/ChecklistNavItem.vue'

export default {
    components: { ChecklistNavItem },
	data() {
		return {
			
		}
	}
}
</script>

<style lang="scss">
#checklist-nav {
	display: grid;
	grid-template-rows: 126px auto 42px;
	grid-gap: 16px;
	height: calc(100vh - 64px);
	width: 100%;
	box-sizing: border-box;
	padding: 16px 0;
	background: $background-dark;
	
	> .properties {
		height: 100%;
		overflow: auto;
	}
}
</style>
