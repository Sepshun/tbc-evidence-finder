<template>
<div :id="`prop-${property.title.replace(/\s+/g, '-').toLowerCase()}`" class="property">
	<div class="header">
		<img src="" alt="" class="icon">
		<p class="title">{{ property.title }}</p>
		<p class="num">{{ property.locations.length }} Locations</p>
	</div>
	<div class="location-list">
		<ChecklistLocation v-for="loc in property.locations" :key="property.title + loc.title" :data="loc" />
	</div>
</div>
</template>

<script>
import ChecklistLocation from '@/components/ChecklistLocation.vue'

export default {
	components: { ChecklistLocation },
    props: ['property']
}
</script>

<style lang="scss">
.property {
	background: $background-dark;
	width: calc(100% + 4px);
	min-height: 320px;
	&:not(:last-of-type) { margin-bottom: 16px; }
	
	> .header {
		background: $gradient;
		height: 48px;
		display: grid;
		grid-template-columns: 32px auto auto;
		grid-gap: 8px;
		box-sizing: border-box;
		padding: 8px 16px;
		align-items: center;
		
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
	
	> .location-list {
		box-sizing: border-box;
		padding: 8px;
		@include clearfix();
	}
}
</style>
