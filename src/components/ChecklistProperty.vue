<template>
<div class="property">
	<div class="header">
		<img src="" alt="" class="icon">
		<p class="title">{{ property.title }}</p>
		<p class="num">{{ property.locations.length }} Locations</p>
	</div>
	<div class="location-list">
		<ChecklistLocation v-for="loc in property.locations" :data="loc" />
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
	width: 100%;
	min-height: 320px;
	&:not(:last-of-type) { margin-bottom: 32px; }
	
	> .header {
		background: $gradient;
		height: 48px;
		display: grid;
		grid-template-columns: 32px auto auto;
		grid-gap: 8px;
		box-sizing: border-box;
		padding: 8px;
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
		display: grid;
		grid-template-columns: repeat(5, 256px);
		box-sizing: border-box;
		padding: 16px;
		grid-gap: 16px;
	}
}
</style>
