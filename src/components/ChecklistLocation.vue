<template>
<div class="location" :class="[`anchor-${anchor}`]">
	<div class="img" :style="tileBackground"></div>
	<p class="title">{{ data.title }}</p>
	<div class="arrows" v-if="data.items.length > 1">
		<i class="material-icons -left" @click="changeSelected(0)">chevron_left</i>
		<i class="material-icons -right" @click="changeSelected(1)">chevron_right</i>
	</div>
	
	<div class="info">
		<p class="title">{{ data.title }}</p>
		<p class="count type-subtitle">{{ data.items.length }} Item<template v-if="data.items.length > 1">s</template></p>
		<p
			class="item"
			v-for="(item, i) in data.items"
			:class="{'-active': selectedItem === i}"
			@click="selectedItem = i"
		>{{ i+1 }}) {{ item.title }}</p>
		<p class="description-title type-subtitle">Description</p>
		<p class="description">{{ data.items[selectedItem].desc }}</p>
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
			selectedItem: 0,
			anchor: 'center'
		}
	},
	methods: {
		anchorLocation(e) {
			console.log('calculating...')
			let el = this.$el
			let parent = el.parentNode
			if (el.offsetLeft - parent.offsetLeft == 16) this.anchor = 'left'
			else if (document.body.offsetWidth - (el.offsetLeft + el.clientWidth) <= 146) this.anchor = 'right'
			else this.anchor = 'center'
		},
		changeSelected(dir) {
			// LEFT
			if (dir == 0) {
				if (this.selectedItem <= 0) this.selectedItem = this.data.items.length - 1
				else this.selectedItem = this.selectedItem - 1
			}
			// RIGHT
			if (dir == 1) {
				if (this.selectedItem === this.data.items.length - 1) this.selectedItem = 0
				else this.selectedItem = this.selectedItem + 1
			}
		}
	},
	computed: {
		tileBackground() {
			if (this.selectedItem === '0') return { backgroundImage: `url(${this.data.img})` }
			else return { backgroundImage: `url(${this.data.items[this.selectedItem].img})` }
		}
	},
	mounted() {
		this.$nextTick(() => { window.addEventListener('resize', this.anchorLocation) })
		this.anchorLocation()
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.anchorLocation)
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
	> .arrows {
		position: absolute;
		top: 0;
		left: 0;
		width: 256px;
		height: 100%;
		opacity: 0;
		transition: 0.15s ease;
		user-select: none;
		
		> i {
			color: white;
			position: absolute;
			top: 50%;
			transform: translate(0,-50%);
			cursor: pointer;
			border-radius: 50%;
			padding: 8px;
			&:hover { background: rgba(white, 0.15); }
			transition: 0.1s ease;
		}
		> i.-left { left: 16px; }
		> i.-right { right: 16px; }
		
	}
	> .info {
		position: absolute;
		top: 232px;
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
		
		> .title {
			color: white;
			font-size: 24px;
			margin: 0;
		}
		
		> .type-subtitle {
			color: rgba(white, 0.8);
			margin: 16px 0 0 0;
			font-weight: 500;
		}
		
		> .description {
			color: white;
			margin: 0;
		}
		
		> .item {
			color: rgba(white, 0.8);
			margin: 0;
			cursor: pointer;
			&:hover { color: white; }
		}
		> .item.-active { color: lighten($blue, 10%); }
	}
	
	&:hover {
		z-index: 9999;
		
		> .img {
			width: 512px;
			left: -128px;
			top: -24px;
			box-shadow: 4px 8px 32px rgba(0,0,0,0.5);
		}
		> .title {
			opacity: 0;
			pointer-events: none;
		}
		> .arrows {
			top: -24px;
			left: -128px;
			width: 512px;
			opacity: 1;
			transition: 0.15s ease 0.15s;
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
	
	&.anchor-left {
		&:hover {
			> .img { left: -16px; }
			> .info { left: -16px; }
			> .arrows { left: -16px; }
		}
	}
	&.anchor-right {
		> .img { left: auto; right: 0; }
		> .info { left: auto; right: 0; }
		&:hover {
			> .img { right: -16px; }
			> .info { right: -16px; }
			> .arrows { right: -16px; }
		}
	}
}
</style>
