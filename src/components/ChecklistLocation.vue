<template>
<div
	class="location"
	:style="tileBackground"
>
	<div class="overlay"></div>
	<p class="title">{{ data.title }}</p>
	
	<div class="info">
		<p class="title">{{ data.title }}</p>
		<p
			class="item"
			v-for="(item, i) in data.items"
			@mouseenter="imageState = i"
			@mouseleave="imageState = 'cover'"
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
					image: 'https://trello-attachments.s3.amazonaws.com/5d125aa5ec302a8a17e84692/5d129a50118d956c1cd8618a/bab72a8a1883cccece248693363e19fd/unknown.png',
					items: [
						{
							title: 'Item 1 Name',
							image: 'https://trello-attachments.s3.amazonaws.com/5d125aa5ec302a8a17e84692/5d129a50118d956c1cd8618a/5ab421604bcf5ae072a16ee349600069/unknown.png'
						},
						{
							title: 'Item 2 Name',
							image: 'https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						}
					],
					meta: {
						addedDate: 'July 5th, 2019',
						addedBy: 'Sepshun',
						confirmed: 'July 8th, 2019',
						timesRecorded: 24
					}
				}
			}
		}
	},
	data() {
		return {
			imageState: 'cover'
		}
	},
	computed: {
		tileBackground() {
			if (this.imageState === 'cover') {
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
	
	> .overlay {
		// background: hsla(0,0%,10%,0.4);
		width: 100%;
		height: 100%;
		pointer-events: none;
		
		opacity: 0;
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
