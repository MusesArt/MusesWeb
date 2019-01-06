<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png">
			<p>编辑收货地址</p>
			<p @click="updateAddress()">保存</p>
		</div>
		<div>
			<form>
				<input type="text" placeholder="收货人" name="signer_name" v-model="myaddress.signerName">
				<input type="text" placeholder="手机号码" name="signer_mobile" v-model="myaddress.signerMobile">
				<input type="text" placeholder="所在地区" name="place" v-model="place">
				<input type="text" placeholder="详细地址:如道路,门牌号,小区,楼栋号,单元室等" name="address" v-model="myaddress.address">
			</form>
		</div>
		<div style="background: white;margin-bottom:10px">
			<group>
				<cell title="地址标签" :is-link="true" class="label"></cell>
				<x-switch title="设为默认地址" style="height: 25px"class="label"></x-switch>
			</group>
		</div>
		<div>
			<group @click.native="deleteAddress()">
				<cell title="删除收货地址" :is-link="true" class="label" style="color:red"></cell>
			</group>
		</div>
	</div>
</template>
<script>
import { XSwitch, Group, Cell } from 'vux'
export default{
	data(){
		return{
			items:{
				id:"",
				signerName:"",
				signerMobile:"",
				province:"",
				city:"",
				district:"",
				address:""
			},
			myaddress:[],
			addressId:"",
			place:""
		}
	},
	mounted(){
		this.$nextTick(function(){
			let self=this;
			this.addressId = this.$route.query.addressId;
			self.$http.get('/api/address/'+self.addressId).then(function(res){
				self.myaddress = res.data.data;
				self.place = self.myaddress.province+self.myaddress.city+self.myaddress.district;
			}).catch(function(error){
				console.log(error);
			})
		})
	},
	methods:{
		updateAddress(){
			let self=this;
			self.items.id=self.addressId;
			self.items.signerName=self.myaddress.signerName;
			self.items.signerMobile=self.myaddress.signerMobile;
			self.items.province=self.myaddress.province;
			self.items.city=self.myaddress.city;
			self.items.district=self.myaddress.district;
			self.items.address=self.myaddress.address;
			var data = self.items;
			self.$http.put('/api/address/list',data).then(function(res){
				self.myaddress = res.data;
			}).catch(function(error){
				console.log(error);
			})
		},
		deleteAddress(){
			let self = this;
			self.$http.delete('/api/address/'+self.addressId).then(function(res){
				if(res.data.code=="OK")
					self.$router.push({path:'/address'});
			}).catch(function(error){
				console.log(error);
			})
		}
	},
	components: {
		XSwitch,
		Group,
		Cell
	}
}
</script>
<style>
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
