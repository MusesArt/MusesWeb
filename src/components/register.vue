<template>
	<div>
		<Flexbox>
			<FlexboxItem :span="10"></FlexboxItem>
			<FlexboxItem>
				<div class="main">
					<router-link to="/main">跳过</router-link>
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem :span="3"></FlexboxItem>
			<FlexboxItem :span="6">
				<img src="../assets/logo.png">
			</FlexboxItem>
		</Flexbox>
		<form action="" method="post">
			<Flexbox>
				<FlexboxItem :span="11">
					<div class="form">
						<input type="text" placeholder="手机号码" class="phone">
					</div>
				</FlexboxItem>
			</Flexbox>
			<Flexbox>
				<FlexboxItem :span="12">
					<div class="formbar">
						<Flexbox>
							<FlexboxItem>
								<input type="number" placeholder="请输入验证码" style="font-size:16px;padding-left:15px">
							</FlexboxItem>
							<FlexboxItem :span="3">
								<input type="button" value="发送验证码" class="button">
							</FlexboxItem>
						</Flexbox>
					</div>
					
				</FlexboxItem>
			</Flexbox>
			<Flexbox>
				<FlexboxItem :span="11">
					<div class="form">
						<input type="text" placeholder="请输入密码" class="phone" style="margin-top:30px">
					</div>
				</FlexboxItem>
			</Flexbox>
			<Flexbox>
				<FlexboxItem :span="11">
					<div class="form">
						<x-button style="border-radius:20px;margin:35px 10px 10px 15px;opacity:0.9" type="warn">登录</x-button>
					</div>
				</FlexboxItem>
			</Flexbox>
		</form>
		<Flexbox>
			<FlexboxItem :span="7"></FlexboxItem>
			<FlexboxItem :span="5">
				<router-link to="/" class="right">登录已有账户</router-link>
			</FlexboxItem>
		</Flexbox>	
		<Flexbox>
		<FlexboxItem :span="1">	</FlexboxItem>
		<FlexboxItem :span="10">
			<div><divider><p>其他登录方式</p></divider></div>
		</FlexboxItem>
		<FlexboxItem></FlexboxItem>

		</Flexbox>
			<Flexbox>
			<FlexboxItem :span="2"></FlexboxItem>
			<FlexboxItem :span="2">
				<img src="../assets/qq.png">
			</FlexboxItem>
			<FlexboxItem :span="2">
				<img src="../assets/weibo.png" class="chat1">
			</FlexboxItem>
			<FlexboxItem :span="2">
				<img src="../assets/weixin.png" class="chat2">
			</FlexboxItem>
		</Flexbox>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider, XButton } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    XButton
  }
}
</script>
<style scoped>
	.main{
	height:40px;
}
img{
	width:100%;
}
.bar{
	background:red;
}
.form{
	width:100%;
}
.formbar{
	border-bottom: 1px solid #aaa;
	width:90%;
	height:35px;
	padding:20px 0px 0px 0px;
	margin:0 0 10px 20px;
}
.formbar input{
	border:0px;
	outline:none;
}
.button{
	width:100%;
	height:30px;
	color:white;
}
.phone{
	margin:70px 10px 20px 20px;
	width:90%;
	height:34px;
	outline:none;
	padding-left: 15px;
	border:0px;
	border-bottom: 1px solid #aaa;
	font-size:16px;
}
.phone2{
	margin-top:10px;
}

.left{
	margin-left:15px;
}
.right{
	text-align:left;
	margin-left:20px;
}
.chat1{
	margin-left:15px;
}
.chat2{
	margin-left:30px;
}
a{
	text-decoration: none;
	color:black;
}
</style>