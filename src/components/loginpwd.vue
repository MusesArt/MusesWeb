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
				<FlexboxItem :span="11">
					<div class="form">
						<input type="password" placeholder="密码" class="phone phone2">
					</div>
				</FlexboxItem>
			</Flexbox>
			<Flexbox>
				<FlexboxItem :span="11">
					<div class="form">
						<x-button style="border-radius:20px;margin:55px 10px 10px 15px;opacity:0.9" type="warn">登录</x-button>
					</div>
				</FlexboxItem>
			</Flexbox>
		</form>
		<Flexbox>
			<FlexboxItem :span="4">
				<router-link to="/IC" class="left">验证码登录</router-link>
			</FlexboxItem>
			<FlexboxItem :span="4">
				
			</FlexboxItem>
			<FlexboxItem :span="4">
				<router-link to="/register" class="right">注册账户</router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
	height:50px;
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
.submit{
	margin:55px 10px 20px 15px;
	width:100%;
	height:55px;
	background:#FF3030;
	outline:none;
	border:0px;
	color:white;
	border-radius:40px;
	opacity:0.9;
	font-size:22px;
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
