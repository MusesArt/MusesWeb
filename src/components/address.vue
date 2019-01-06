<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png">
			<p>收货地址</p>
		</div>
		<div class="container">
			<template v-for="(item,index) in address">
				<div class="body">
					<div class="title">
						<span v-text="item.district"></span>
						<p v-text="item.signerName"></p>
						<p v-text="item.signerMobile"></p>
					</div>
					<div class="content">
						<p>地址:{{item.province}}{{item.city}} {{item.address}}</p>
					</div>
					<hr color="#eee">
					<div class="bottom">
						<div class="circle" @click="click(item)" :class="{'clicked':item.checked}">
							<img src="../assets/true.png" v-if="item.checked" style="width:18px;height:18px;">
						</div>
						<p>设为默认</p>
						<p @click="deleteAddr(item,index)">删除</p>
						<img src="../assets/trash.png">
						<p style="margin-right:20px" @click="edit(item)">编辑</p>	
						<img src="../assets/trash.png">
					</div>
				</div>
			</template>
		</div>
		<div class="add">
			<router-link to="/add_address">
				<div class="add_button">
					添加地址
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			address:[]
		}
	},
	watch:{
		'$route'(from,to){
			this.init();
		}
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	mounted(){
		this.$nextTick(function(){
			console.log('运行');
			this.init();
		})
	},
	methods:{
		init(){
			let self=this;
			self.$http.get('/api/address/list?userId=1').then(function(res){
				if(res.data.code == "OK"){
					self.address = res.data.data;
				}
				self.$set(self.address[0], 'checked', true);
			})
		},
		click(item){
			let self=this;
			var flag = item.checked;
			self.address.forEach(function(item,index){
					if(typeof item.checked=="undefined"){
                        self.$set(item,"checked",false);
                    }
                    else{
                    	item.checked=false;
                    }
				})
			item.checked = !flag;
		},
		deleteAddr(item,index){
			let self = this;
			console.log(item.id);
			self.$http.delete('/api/address/'+item.id).then(function(res){
				if(res.data.code=="OK"){
					self.address.splice(index);
				}
				else{
					console.log(res.data.code);
					console.log(res.data.msg);
				}
			}).catch(function(error){
				console.log(error);
			})
		},
		edit(item){
			let self = this;
			this.$router.push({path:'/edit_address',query:{addressId:item.id}});
		}
	}
}
</script>
<style scoped>
a{
	text-decoration: none;
}
p{
	margin:0px;
}
hr{
	margin-bottom:10px;
}
.head{
    width:100%;
	height:50px;
	margin-bottom:5px;
	background:white;
	/*border:1px solid #aaa;*/
}
.head img{
	margin:10px 0 0 10px;
	width:30px;
	height:30px;
	float:left;
}
.head p{
	text-align:center;
	color:#333;
	font-size:16px;
	font-weight: bold;
	line-height:50px;
	margin-right:22px;
}
.container{
	margin:0 10px;
}
.body{
	width:100%;
	height:137px;
	background-color: white;
	margin-bottom:10px;
	box-sizing: border-box;
	padding:10px;
	border-radius: 10px;
}
.title span{
	display:inline-block;
	height:16px;
	color:#e9967a;
	font-size:12px;
	background:#eed5b7;
	text-align:center;
	line-height:16px;
	border:1px solid #e9967a;
	border-radius: 10px;
	min-width: 28px;
	padding:0 3px;
}
.title p{
	display:inline-block;
	color:#333;
	font-size:15px;
}
.title p:nth-child(2){
	font-weight:bold;
	margin-left:10px;
}
.title p:nth-child(3){
	font-weight:bold;
	margin-left:30px;
}
.content{
	height:50px;
}
.content p{
	margin-top:5px;
	font-size:15px;
}
.circle{
	width:18px;
	height:18px;
	border-radius: 20px;
	float:left;
	border:1px solid #aaa;
	box-sizing: border-box;
	margin-top:2px;
	margin-right:10px;
}
.bottom p,img{
	float:right;
	font-size:15px;
	color:#797979;
}
.bottom img{
	width:20px;
	height:20px;
}
.bottom p:nth-child(2){
	float:none;
	display:inline-block;
}
.clicked{
	border:0px;
}
.add{
	width:100%;
	position:fixed;
	bottom:10px;
	left:0;
	height:50px;
}
.add_button{
	margin:0px 10px;
	background-color: #ff4013;
	border-radius: 30px;
	height:50px;
	color: white;
	text-align: center;
	line-height: 50px;
	box-sizing: border-box;
	font-size: 16px;
}
</style>
