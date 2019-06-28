<template>
<div id="checklist-nav">
	<div class="filters">
		<ChecklistNavItem
			icon=""
			title="Not Checked"
			:num="2"
			@click.native=""
		/>
		<ChecklistNavItem
			icon=""
			title="Completed"
			:num="2"
			@click.native=""
		/>
		<ChecklistNavItem
			icon=""
			title="No Evidence"
			:num="2"
			@click.native=""
		/>
	</div>
	
	<scrollactive
		class="properties"
		active-class="active"
		:offset="128"
		:scrollOffset="16"
		:scrollContainerSelector="'.property-list'"
		:modifyUrl="false"
	>
		<div class="section" v-for="(properties, name) in sections">
			<p class="title">{{ name }}</p>
			<ChecklistNavLink
				v-for="(property, i) in properties"
				:key="`nav${property.title}`"
				icon=""
				:title="property.title"
				:href="`#prop-${property.title.replace(/\s+/g, '-').toLowerCase()}`"
			/>
		</div>
	</scrollactive>
	
	<div class="settings">
		<ChecklistNavItem icon="" title="Settings" />
	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChecklistNavItem from '@/components/ChecklistNavItem.vue'
import ChecklistNavLink from '@/components/ChecklistNavLink.vue'

export default {
    components: { ChecklistNavItem, ChecklistNavLink },
	computed: { ...mapGetters(['sections']) }
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
		
		> .section {
			margin-bottom: 16px;
			> .title {
				color: white;
				text-transform: capitalize;
				margin: 0 0 8px 0;
				padding: 0 16px;
			}
		}
	}
}
</style>
