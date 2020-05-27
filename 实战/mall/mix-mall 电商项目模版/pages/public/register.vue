<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				马上注册！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">用户名</text>
					<input 
						type="string" 
						:value="username" 
						placeholder="请输入用户名"
						maxlength="11"
						data-key="username"
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="mobile" 
						value="" 
						placeholder="8-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
					/>
				</view>
				<view class="input-item">
					<text class="tit">手机号</text>
					<input
					 type="number" 
					 maxlength="11" 
					 placeholder="请输入手机号"
					   data-key="telephone"
					   @input="inputChange"
					   />
				</view>
				<view class="input-item input-item1">
					<text class="tit">短信验证码</text>
					<input 
					type="string" maxlength="6" 
					placeholder="短信验证码" data-key="authCode" 
					@input="inputChange" 
					:value="authCode">
					</input>
					<view class="codeimg" @tap="getsmscode">{{smsbtn.text}}</view>
				</view>
				<view class="message">
					{{ msg.data }}
				</view>
			</view>
			<button class="confirm-btn" @click="toRegister" :disabled="logining">立即注册</button>
		</view>
	</view>
</template>

<script>
	import {  
        mapMutations  
    } from 'vuex';
	
	export default{
		data(){
			return {
				username: '',
				password: '',
				telephone:'',
				authCode:'',
				logining: false,
				msg:'',
				smsbtn: {
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				timerId: null,
			}
		},
		onLoad(){
			
		},
		methods: {
			...mapMutations(['login']),
			getsmscode: function() {
				const data={
					telephone:this.telephone
				}
				uni.request({
					url:'http://localhost:8085/sso/getAuthCode',
					method:'get',
					data,
					header:{'content-type': 'application/x-www-form-urlencoded'},
					success: (res) => {
						this.smsbtn.status = true; // 这段代码其实应该加在你request请求 短信发送成功后
						console.log(res);
						this.msg = res.data
						
					},
					fail:(err)=>{
						console.log(err);
					}
				})
				if (this.smsbtn.status == true ) {
					console.log('message：', "别着急！短信已经发送了~");
					return false;
				}
				this.timerId = setInterval(() => {
						var codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重新获取";
							this.smsbtn.codeTime = 60;
							this.smsbtn.status = false;
						}
					},
					1000);
				return false;
			},
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack();
			},
			async toRegister(){
				this.logining = true;
				const {username, password,telephone,authCode} = this;
				const sendData = {
					username,
					password,
					telephone,
					authCode
				};
				console.log(sendData);
				uni.request({
					url:"http://localhost:8085/sso/register",
					method:"post",
					data:sendData,
					header:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					success:(res)=>{
						console.log(res);
						var data=res.data;
						// console.log(data.code);
						if(data.code === 200){
							// console.log(data.data);
							uni.navigateTo({
								url:"./login"
							});  
						}else{
							this.$api.msg(data.msg);
							this.logining = false;
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 50px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	
	.registercontent {
		width: 85%;
		margin: 0 auto;
	}/* 
	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}*/
	.input-item1{
		position: relative;
	}
	.codeimg{
		position: absolute;
		right: 10%;
		height: 50upx;
		line-height: 56upx;
		font-size: $font-sm+2upx;
	}
	/* .codeimg {
		position: absolute;
		right: 12%;
		z-index: 999;
		width: 200rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	} */
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.left-top-sign{
		font-size: 120upx;
		color: $page-color-base;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.message{
		position: fixed;
		right: 10%;
		bottom: 10%;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:$page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}	
	}

	.confirm-btn{
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}
	.register-section{
		position:absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
</style>
