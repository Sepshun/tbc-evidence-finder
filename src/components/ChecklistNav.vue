<template>
<div id="checklist-nav">
	<div class="filters">
		<ChecklistNavItem
			:class="{'active': $store.state.currentFilter === undefined}"
			icon=""
			title="Not Checked"
			:num="getFilterAmount(undefined)"
			@click.native="$store.state.currentFilter = undefined"
		/>
		<ChecklistNavItem
			:class="{'active': $store.state.currentFilter === 1}"
			icon=""
			title="Completed"
			:num="getFilterAmount(1)"
			@click.native="$store.state.currentFilter = 1"
		/>
		<ChecklistNavItem
			:class="{'active': $store.state.currentFilter === 2}"
			icon=""
			title="No Evidence"
			:num="getFilterAmount(2)"
			@click.native="$store.state.currentFilter = 2"
		/>
		<ChecklistNavItem
			:class="{'active': $store.state.currentFilter === 0}"
			icon=""
			title="All Properties"
			@click.native="$store.state.currentFilter = 0"
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
				:state="property.state"
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
	computed: { ...mapGetters(['sections', 'properties']) },
	methods: {
		getFilterAmount(filter) {
			let filtered = this.properties.filter(data => data.state === filter)
			return filtered.length
		}
	}
}
</script>

<style lang="scss">
#checklist-nav {
	display: grid;
	grid-template-rows: 168px auto 42px;
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
