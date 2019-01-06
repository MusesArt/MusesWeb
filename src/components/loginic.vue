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
        <img src="../assets/logo.png" style="width: 150px" class="logo-icon">
      </FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<div class="form">
					<input type="text" placeholder="手机号码" class="phone login-input" v-model="u.mobile" required="required">
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<div class="formbar">
					<Flexbox>
						<FlexboxItem>
							<input type="number" placeholder="请输入验证码" v-model="u.password" class="login-input">
						</FlexboxItem>
						<FlexboxItem :span="3">
							<input type="button" value="获取验证码" class="button login-input">
						</FlexboxItem>
					</Flexbox>
				</div>
				
			</FlexboxItem>
		</Flexbox>
    <Flexbox>
      <FlexboxItem align="center">
        <div class="form">
          <x-button type="warn" style="width: 90%" @click.native="submit()" class="login-btn">登录</x-button>
        </div>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="link">
      <FlexboxItem>
        <router-link to="/" class="left">密码登录</router-link>
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
				mobile:'',
				password:''
			}
		}
	},
	methods:{
		submit(){
			let self = this;
			self.$http.post('/api/user/login/mobile',self.u).then(function(res){
				if(res.data.code=="OK"){
					self.$router.push({path:'/main'});
					localStorage.setItem("token",res.data.data.token);
					localStorage.setItem("userId", res.data.data.userId);
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
<style scoped>
.main{
  height:50px;
  margin-top: 15px;
}
.logo-icon{
  width:15%;
}
.form{
  width:90%;
}
.formbar{
	border-bottom: 1px solid #aaa;
	height:35px;
	padding:20px 0px 0px 0px;
	/*margin:0 0 10px 20px;*/
  width: 80%;
}
.login-input{
	border:0px;
	outline:none;
  font-size: 16px;
}
.button{
  border-radius:10px;
	width:100%;
	height:30px;
	color:white;
  font-size: 12px;
  background: rgb(80, 182, 116);
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
.right{
  text-align:right;
}
.right{
	text-align:left;
	margin-left:20px;
}
.img1{
  margin-right: 15px;
  width:15%;
}
.img2{
  margin-left: 15px;
  margin-right: 15px;
  width:15%;
}
.img3{
  margin-left: 15px;
  width:15%;
}
.images{
  display:block;
  margin:0 auto;
  text-align: center;
}
.login-btn{
  border-radius:20px;
  margin-top:40px;
  opacity:0.9;
  background: rgb(254,78,91);
  margin-bottom: 25px;
}
.link{
  width: 80%;
}
.other{
  color: rgb(196, 196, 196) !important;
}
::-webkit-input-placeholder {
  color: rgb(196, 196, 196);
}
</style>
