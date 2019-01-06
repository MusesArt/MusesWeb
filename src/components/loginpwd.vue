<template>
	<div align="center">
		<Flexbox>
			<FlexboxItem :span="10"></FlexboxItem>
			<FlexboxItem>
				<div class="main">
					<router-link to="/main">跳过</router-link>
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<img src="../assets/logo.png" style="width: 150px" >
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<div class="form">
					<input type="text" placeholder="手机号码" class="phone" v-model="u.username" required="required">
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<div class="form">
					<input type="password" placeholder="密码" class="phone phone2" v-model="u.password" required="required">
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<div class="form">
					<x-button type="warn" style="width: 90%" @click.native="submit()">登录</x-button>
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox class="link">
			<FlexboxItem>
				<router-link to="/IC" class="left">验证码登录</router-link>
			</FlexboxItem>
			<FlexboxItem align="right">
				<router-link to="/register" class="right">注册账户</router-link>
			</FlexboxItem>
		</Flexbox>

		<Flexbox>
      <FlexboxItem :span="1">	</FlexboxItem>
      <FlexboxItem :span="10" style="margin-left: 0px">
        <div><divider class="other"><p>其他登录方式</p></divider></div>
      </FlexboxItem>
		  <FlexboxItem :span="1"></FlexboxItem>
		</Flexbox>

    <Flexbox>
      <FlexboxItem class="images">
        <img src="../assets/qq.png" class="img1">
        <img src="../assets/weibo.png" class="img2">
        <img src="../assets/weixin.png" class="img3">
      </FlexboxItem>
  </Flexbox>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider, XButton } from 'vux'

export default {
	data(){
		return{
			u:{
				username:'',
				password:''
			}
		}
	},
	methods:{
		submit(){
			let self = this;
			self.$http.post('http://localhost:8080/api/user/login/username',self.u).then(function(res){
				if(res.data.code=="OK"){
					self.$router.push({path:'/main'});
					localStorage.setItem("token",res.data.data.token);
				}
				console.log(res.data);
			}).catch(function(error){
				console.log(error);
			})
		}
	},
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
  margin-top: 15px;
}
img{
	width:15%;
}
.bar{
	background:red;
}
.form{
	width:90%;
}
.phone{
	margin:70px 20px 20px 20px;
	width:90%;
	height:34px;
	outline:none;
	border:0px;
	border-bottom: 1px solid rgb(196, 196, 196);
	font-size:16px;
}
.phone2{
	margin-top:19px;
  margin-bottom: 0px;
}
.submit{
	margin:55px 10px 20px 0px;
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
.right{
	text-align:right;
}
.img1{
  margin-right: 15px;
}
.img2{
  margin-left: 15px;
  margin-right: 15px;
}
.img3{
  margin-left: 15px;
}
a{
	text-decoration: none;
	color:black;
}
::-webkit-input-placeholder {
  color: rgb(196, 196, 196);
}
input{
  padding-left: 0px;
  border-color: rgb(196, 196, 196);
}
button{
  border-radius:20px;
  margin-top:40px;
  opacity:0.9;
  background: rgb(254,78,91);
  margin-bottom: 25px;
}
.link{
  width: 80%;
}
.images{
  display:block;
  margin:0 auto;
  text-align: center;
}
.other{
  color: rgb(196, 196, 196) !important;
}
</style>
