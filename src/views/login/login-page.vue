<template>
	<div class="login-page">
		<div class="login-box">
			<!-- left -->
			<div class="login-box-left">
				<h2 class="title">Sign in to Hi - Blog</h2>
				<p class="subtitle">use your email account.</p>
				<el-form :model="loginForm">
					<el-form-item>
						<el-input v-model="loginForm.email" placeholder="Email" />
					</el-form-item>
					<el-form-item>
						<el-input
							v-model="loginForm.password"
							type="password"
							placeholder="Password"
							show-password
						/>
					</el-form-item>
				</el-form>
				<p class="subtitle forget">Forgot your Password?</p>
				<el-button
					type="primary"
					:disabled="!isDisabled"
					@click="handleClickSignIN"
				>
					SIGN IN
				</el-button>
			</div>
			<!-- right -->
			<div class="login-box-right">
				<!--  -->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { loginRequest } from './../../service/login'

const router = useRouter()

const loginForm = ref({
	email: '',
	password: ''
})

const isDisabled = computed(() => {
	return !!loginForm.value.email && !!loginForm.value.password
})

const handleClickSignIN = async () => {
	const payload = loginForm.value
	console.log('登陆 ===> ', payload)
	const response = await loginRequest(payload)
	console.log(response)
	if (response.success) {
		router.push('/main')
	}
}
</script>

<style lang="less" scoped>
@width: 300px;
.login {
	&-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background-color: var(--background-color);
	}
	&-box {
		box-shadow: 0px 10px 20px 0px var(--person-item-border-color);
		width: 1128px;
		height: 700px;
		background: var(--login-box-bg);
		border-radius: 8px;
		display: flex;
		overflow: hidden;
		&-left {
			width: 696px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title {
				font-size: 30px;
				font-weight: bold;
				color: var(--login-text-title-color);
				margin-bottom: 95px;
			}
			.subtitle {
				font-size: 14px;
				font-weight: 500;
				color: #8291a9;
				margin-bottom: 35px;
			}
			.el-form {
				width: @width;
				margin-bottom: 28px;
				.el-input {
					.el-input__wrapper {
						.el-input__inner {
							font-weight: 500;
							color: #242a38;
						}
					}
					::placeholder {
						font-weight: 500;
						color: #242a38;
					}
				}
			}
			.el-button {
				width: @width;
				height: 40px;
				background-color: var(--send-btn-bg);
				border: none;
				&:disabled {
					opacity: 0.7;
				}
			}
			.forget {
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		&-right {
			flex: 1;
			background: linear-gradient(212deg, #ff3d57 1%, #ff8a48 101%);
		}
	}
}
</style>
