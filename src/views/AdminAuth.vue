<template>
<div id="auth" class="view">
	<div class="login-panel">
		<p class="title">Authentication</p>
		<input type="text" placeholder="Email Address" v-model="email">
		<input type="password" placeholder="Password" v-model="password">
		<button @click="signin">{{ loggingIn ? '...' : 'Login' }}</button>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			loggingIn: false
		}
	},
	methods: {
		signin() {
			this.loggingIn = true
			this.$auth
				.signInWithEmailAndPassword(this.email, this.password)
				.then(() => { this.$router.replace('/admin') })
				.catch(err => {
					this.loggingIn = false
					console.log(err.code, err.message)
				})
		}
	},
	mounted() {
		this.$auth.onAuthStateChanged(user => {
			if (user) this.$router.replace('/admin')
		})
	}
}
</script>

<style lang="scss">
#auth {
	.login-panel {
		width: 320px;
		background: $background-dark;
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
		> .title {
			color: white;
			font-size: 18px;
			margin: 16px;
		}
		
		> input {
			background: $background-overlay;
			color: white;
			border: none;
			font-size: 18px;
			display: block;
			width: 100%;
			padding: 9px 16px;
			box-sizing: border-box;
			
			&:focus {
				outline: none;
				background: darken($background-overlay, 2%);
			}
		}
		
		> button {
			background: transparent;
			color: white;
			font-size: 18px;
			border: none;
			width: 100%;
			text-align: center;
			padding: 10px;
			cursor: pointer;
			
			&:hover { background: rgba(white, 0.1); }
			&:focus { outline: none; }
		}
	}
}
</style>
