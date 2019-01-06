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
					<input type="text" placeholder="手机号码" class="phone" v-model="u.mobile" required="required">
				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem align="center">
				<div class="formbar">
					<Flexbox>
						<FlexboxItem>
							<input type="number" placeholder="请输入验证码" v-model="u.code">
						</FlexboxItem>
						<FlexboxItem :span="3">
							<input type="button" value="获取验证码" class="button">
						</FlexboxItem>
					</Flexbox>
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
					<x-button type="warn" @click.native="regist()">注册</x-button>
				</div>
			</FlexboxItem>
		</Flexbox>
    <Flexbox class="link">
      <FlexboxItem>

      </FlexboxItem>
      <FlexboxItem align="right">
        <router-link to="/" class="right">已有账户</router-link>
      </FlexboxItem>
    </Flexbox>

    <Flexbox>
      <FlexboxItem :span="1">	</FlexboxItem>
      <FlexboxItem :span="10" style="margin-left: 0px">
        <div><divider class="other"><p>其他登录方式</p></divider></div>
      </FlexboxItem>
      <FlexboxItem :span="1"></FlexboxItem>
    </Flexbox>

    <Flexbox align="center">
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
				password:'',
				code:''
			}
		}
	},
	methods:{
		regist(){
			console.log('success');
			let self = this;
			console.log(self.u.mobile);
			self.$http.post('/api/user/register',self.u).then(function(res){
				if(res.data.data==null){
					alert(res.data.message);
				}
				else{
					localStorage.setItem("token",res.data.data.token);
					self.$router.push({path:'/main'});
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
img{
  width:15%;
}
.bar{
	background:red;
}
.form{
  width:90%;
}
.formbar{
  border-bottom: 1px solid #aaa;
  height:35px;
  padding:20px 0px 0px 0px;
  width: 80%;
  margin-bottom: 20px;
}
input{
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
.phone2{
  margin-top:20px;
}
.right{
	text-align:left;
	margin-left:20px;
}
a{
	text-decoration: none;
	color:black;
}
button{
  border-radius:20px;
  margin-top:20px;
  opacity:0.9;
  background: rgb(254,78,91);
  margin-bottom: 25px;
  width: 90% !important;
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
.link{
  width: 80%;
}
::-webkit-input-placeholder {
  color: rgb(196, 196, 196);
}
.other{
  color: rgb(196, 196, 196) !important;
}
.images{
  display:block;
  margin:0 auto;
  text-align: center;
}
</style>
