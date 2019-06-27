<template>
<div
	class="location"
	:style="tileBackground"
>
	<p class="title">{{ data.title }}</p>
	
	<!-- <div class="info">
		<p class="title">{{ data.title }}</p>
		<p
			class="item"
			v-for="(item, i) in data.items"
			@click="imageState = i"
		>{{ i+1 }}) {{ item.title }}</p>
	</div> -->
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
				return {
					backgroundImage: `url(${this.data.image})`
				}
			} else {
				return {
					backgroundImage: `url(${this.data.items[this.imageState].image})`
				}
			}
		}
	}
}
</script>

<style lang="scss">
.location {
	width: 256px;
	height: 256px;
	background: white;
	background-size: cover;
	background-position: center;
	position: relative;
	
	float: left;
	margin: 8px;
	
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
		transition: 0.15s ease 0.5s;
	}
	
	> .info {
		position: absolute;
		top: 0;
		left: 256px;
		background: hsla(0,0%,10%,0.95);
		height: 100%;
		width: 512px;
		box-sizing: border-box;
		padding: 16px;
		z-index: 9999;
		
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transition: 0.15s ease;
		
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
		> .title { opacity: 0; pointer-events: none; }
		> .overlay, > .info { opacity: 1; }
		> .info {
			visibility: visible;
			transition: 0.15s ease 0.5s;
			pointer-events: auto;
		}
	}
}
</style>
