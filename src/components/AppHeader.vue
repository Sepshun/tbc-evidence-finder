<template>
<div id="app-header">
	<img src="../assets/evidence_found.png" alt="" class="icon">
	<p class="title">TBC Evidence Finder</p>
	<div class="nav">
		<router-link to="/">Overview</router-link>
		<router-link to="/checklist">Checklist</router-link>
		<router-link to="/submit">Submit</router-link>
		<router-link to="/about">About</router-link>
	</div>
</div>
</template>

<style lang="scss">
#app-header {
	height: 64px;
	width: 100vw;
	background: $gradient;
	display: grid;
	grid-template-columns: 64px auto auto;
	
	> .icon {
		width: 32px;
		height: 32px;
		padding: 16px;
	}
	
	> .title {
		font-size: 24px;
		color: white;
		margin: 0;
		padding: 17.5px 0;
	}
	
	> .nav {
		justify-self: end;
		padding-right: 8px;
		
		> a {
			display: inline-block;
			font-size: 18px;
			color: rgba(white, 0.5);
			padding: 21px 8px;
			font-weight: 300;
			text-decoration: none;
			
			&:hover { background: rgba(white, 0.1); }
			&.router-link-exact-active {
				color: white;
			}
		}
	}
}
</style>
