<template>
<div :id="`prop-${value.title.replace(/\s+/g, '-').toLowerCase()}`" class="property" :class="[`-state-${value.state}`]">
	<div class="header">
		<div class="actions">
			<div class="btn" @click="setState(1)"><i class="material-icons">check</i></div>
			<div class="btn" @click="setState(2)"><i class="material-icons">close</i></div>
		</div>
		
		<img src="" alt="" class="icon">
		
		<p class="title">{{ value.title }}</p>
		<p class="num">{{ value.locations.length }} Locations</p>
	</div>
	<div class="location-list" :class="{'-collapse': $store.state.settings.collapseHeaders}">
		<ChecklistLocation v-for="loc in value.locations" :key="value.title + loc.title" :data="loc" />
	</div>
</div>
</template>

<script>
import ChecklistLocation from '@/components/ChecklistLocation.vue'

export default {
	components: { ChecklistLocation },
    props: ['value'],
	methods: {
		setState(state) {
			this.$set(this.value, 'state', state)
			this.$emit('input', this.value)
		}
	}
}
</script>

<style lang="scss">
.property {
	background: $background-dark;
	width: calc(100% + 4px);
	&:not(:last-of-type) { margin-bottom: 16px; }
	
	> .header {
		background: rgba($blue, 0.5);
		height: 48px;
		display: grid;
		grid-template-columns: 80px 32px auto auto;
		grid-gap: 8px;
		box-sizing: border-box;
		padding: 8px 16px;
		align-items: center;
		
		> .actions {
			display: grid;
			grid-template-columns: 32px 32px;
			grid-gap: 8px;
			
			> .btn {
				color: white;
				border-radius: 32px;
				padding: 4px;
				opacity: 0.5;
				transition: 0.1s ease;
				cursor: pointer;
				
				> i { display: block; }
				
				&:hover {
					opacity: 1;
					background: hsla(0,0%,100%,0.2);
				}
			}
		}
		
		> .icon {
			width: 32px;
			height: 32px;
			background: white;
		}
		
		> .title, > .num {
			margin: 0;
			color: white;
			font-size: 20px;
		}
		> .num {
			justify-self: end;
			opacity: 0.5;
		}
	}
	&.-state-1 > .header { background: rgba($green, 0.5); }
	&.-state-2 > .header { background: rgba($red, 0.5); }
	
	> .location-list {
		box-sizing: border-box;
		padding: 8px;
		@include clearfix();
		
		&.-collapse {
			display: none;
		}
	}
}
</style>
