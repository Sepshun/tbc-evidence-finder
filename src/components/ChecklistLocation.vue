<template>
<div class="location">
	<div class="img" :style="tileBackground"></div>
	<p class="title">{{ data.title }}</p>
	
	<div class="info">
		<p class="count"># Items</p>
		<p class="title">{{ data.title }}</p>
		<p
			class="item"
			v-for="(item, i) in data.items"
			@click="imageState = i"
		>{{ i+1 }}) {{ item.title }}</p>
	</div>
</div>
</template>

<script>
export default {
    props: {
		data: {
			type: Object,
			default: () => {
				return {
					title: 'Location Name',
					image: '',
					items: [
						{
							title: 'Item 1 Name',
							image: ''
						},
						{
							title: 'Item 2 Name',
							image: ''
						}
					],
					meta: {
						addedDate: 'July 5th, 2019',
						addedBy: 'Sepshun'
					}
				}
			}
		}
	},
	data() {
		return {
			imageState: '0'
		}
	},
	computed: {
		tileBackground() {
			if (this.imageState === '0') {
				return { backgroundImage: `url(${this.data.img})` }
			} else {
				return { backgroundImage: `url(${this.data.items[this.imageState].img})` }
			}
		}
	}
}
</script>

<style lang="scss">
.location {
	position: relative;
	min-width: 256px;
	min-height: 256px;
	margin: 8px;
	float: left;
	
	> .img {
		position: absolute;
		top: 0;
		left: 0;
		width: 256px;
		height: 256px;
		background-size: cover;
		background-position: center;
		transition: 0.15s ease;
	}
	> .title {
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-shadow: 1px 1px 0px rgba(0,0,0,0.8);
		font-size: 24px;
		width: 256px;
		text-align: center;
		margin: 0;
		
		opacity: 1;
		transition: 0.15s ease;
	}
	> .info {
		position: absolute;
		top: 224px;
		left: 0px;
		background: hsla(0,0%,10%,0.95);
		width: 256px;
		box-sizing: border-box;
		padding: 16px;
		z-index: 9999;
		
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transition: 0.15s ease;
		
		> .count {
			color: white;
			margin: 0 0 8px 0;
			opacity: 0.5;
		}
		
		> .title {
			color: white;
			font-size: 24px;
			margin: 0 0 16px 0;
		}
		
		> .item {
			color: white;
			margin: 0;
		}
	}
	
	&:hover {
		z-index: 9999;
		
		> .img {
			width: 512px;
			left: -128px;
			top: -32px;
			box-shadow: 4px 8px 32px rgba(0,0,0,0.5);
		}
		> .title {
			opacity: 0;
			pointer-events: none;
		}
		> .info {
			opacity: 1;
			width: 512px;
			left: -128px;
			visibility: visible;
			pointer-events: auto;
			box-shadow: 4px 8px 32px rgba(0,0,0,0.5);
		}
	}
}
</style>
