<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png" @click="back()">
			<p>添加收货地址</p>
			<p @click="addAddress()">保存</p>
		</div>
		<div>
			<form>
				<input type="text" placeholder="收货人" name="signer_name" v-model="items.signerName">
				<input type="text" placeholder="手机号码" name="signer_mobile" v-model="items.signerMobile">
				<input type="text" placeholder="所在地区" name="place" v-model="place">
				<input type="text" placeholder="详细地址:如道路,门牌号,小区,楼栋号,单元室等" name="address" v-model="items.address">
			</form>
		</div>
		<div style="background: white;margin-top:20px">
			<group>
				<cell title="地址标签" :is-link="true" class="label"></cell>
				<x-switch title="设为默认地址" style="height: 25px"class="label"></x-switch>
			</group>
		</div>
	</div>
</template>
<script>
import { XSwitch, Group, Cell } from 'vux'

export default {
	data(){
		return{
			items:{
				signerName:"",
				signerMobile:"",
				province:"",
				city:"",
				district:"",
				address:""
			},
			place:""
		}
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	methods:{
		back(){
			this.$router.push({path:'/address'})
		},
		addAddress(){
			let self = this;
			var flag = true;
			if(self.items.signerName==""||self.items.signerMobile==""||self.items.address=="")
				flag=false;
			if(flag==false)
				alert("请填写完整");
			else{
				var places = self.place.split(" ");
				self.items.province = places[0];
				self.items.city = places[1];
				self.items.district = places[2];
				var data = self.items;
				self.$http.post('http://localhost:8080/api/address/',data).then(function(res){
					if(res.data.code=="OK"){
						alert("添加成功");
					}
				}).catch(function(error){
					console.log(error);
				})
			}
		}
	},
	components: {
		XSwitch,
		Group,
		Cell
	}
}
</script>
<style scoped>
img{
	width:100%;
	height:100%;
}
p{
	margin:0px;
}
hr{
	margin-bottom:3px;
}
.head{
    width:100%;
	height:50px;
	margin-bottom:5px;
	background:white;
	padding: 10px 10px 0 10px;
	box-sizing: border-box;
	text-align: center;
	/*border:1px solid #aaa;*/
}
.head img{
	width:30px;
	height:30px;
	float:left;
}
.head p:nth-child(2){
	color:#333;
	font-size:16px;
	font-weight: bold;
	display: inline-block;
}
.head p:nth-child(3){
	float:right;
	color:#ff8c00;
	font-size: 14px;
	margin-top:5px;
}
.container{
	margin:0 10px;
}
form input{
	width:100%;
	border:0px;
	padding:13px 12px;
	box-sizing: border-box;
	margin-bottom:1px;
	font-size: 13px;
}
.label{
	height:20px;
	font-size: 13px;
	padding-left:5px;
}
</style>