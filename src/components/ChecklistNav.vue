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
		<ChecklistNavItem
			icon=""
			title="Settings"
			@click.native="openSettingsPanel = !openSettingsPanel"
			:class="{'-active': openSettingsPanel}"
		/>
		<div class="panel" v-if="openSettingsPanel">
			<div class="checkbox">
				<input type="checkbox" id="collapseProperties" v-model="$store.state.settings.collapseHeaders">
				<label for="collapseProperties">Collapse Properties</label>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChecklistNavItem from '@/components/ChecklistNavItem.vue'
import ChecklistNavLink from '@/components/ChecklistNavLink.vue'

export default {
    components: { ChecklistNavItem, ChecklistNavLink },
	data() {
		return {
			openSettingsPanel: false
		}
	},
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
	grid-gap: 8px;
	height: calc(100vh - 64px);
	width: 100%;
	box-sizing: border-box;
	padding: 16px 0;
	background: $background-dark;
	
	> .properties {
		padding: 8px 0;
		box-sizing: border-box;
		height: 100%;
		overflow: auto;
		background: $background-overlay;
		
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
	
	> .settings {
		position: relative;
		
		> .-active {
			background: rgba($blue, 1);
			opacity: 1;
		}
		> .panel {
			position: absolute;
			bottom: 42px;
			
			background: $background-dark;
			width: 100%;
			padding: 8px 0;
			
			> .checkbox {
				height: 42px;
				user-select: none;
				
				> input[type="checkbox"] { display: none; }
				
				> label {
					position: relative;
					display: block;
					padding: 11.5px 16px;
					padding-left: 64px;
					color: white;
					cursor: pointer;
					
					&:before,
					&:after {
						content: '';
						display: block;
						position: absolute;
					}
					&:before {
						top: 5px;
						left: 16px;
						width: 32px;
						height: 32px;
						box-sizing: border-box;
						border: 2px solid white;
						transition: 0.15s ease;
					}
					&:after {
						top: 6px;
						left: 28px;
						box-sizing: border-box;
						border: 2px solid white;
						border-color: transparent white white transparent;
						height: 24px;
						width: 10px;
						transform: rotate(45deg) scale(0);
						opacity: 0;
						transition: 0.15s ease;
					}
				}
				
				> input[type="checkbox"]:checked + label {
					&:before {
						background: $blue;
						border: none;
					}
					&:after {
						opacity: 1;
						transform: rotate(45deg) scale(1);
					}
				}
			}
		}
	}
}
</style>
