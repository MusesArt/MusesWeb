<template>
	<div id="container">
		<template v-for="(item,index) in orders">
			<div class="border">
				<div class="top">
					<p>Muses旗舰店</p>
					<img src="../assets/more1.png" style="width:12px;height:12px;margin-top:5px"/>
					<p v-text="item.payStatus==1?'交易成功':'等待买家付款'"></p>
				</div>
				<template v-for="(item2,index2) in item.orderCommodityModels">
					<div class="body">
						<div>
							<img src="../assets/new1.png" style="width:100px;height:100px">
						</div>
						<div>
							<p>装饰画</p>
							<p v-text="item2.brief"></p>
						</div>
						<div>
							<p>￥{{item2.price|addZero}}</p>
							<p>x1</p>
						</div>
					</div>
				</template>
				<div class="bottom">
					<p>共1件商品 合计: ￥<span>{{item.orderAmount|addZero}}</span></p>
					<div class="bottom_border">
						<p style="display: inline-block;">更多</p>
						<div v-if="item.payStatus=='1'">
							<div style="border:1px solid #ff7f42">评价</div>
							<div>卖了换钱</div>
							<div>查看物流</div>
						</div>
						<div v-if="item.payStatus=='等待买家付款'">
							<div style="border:1px solid #ff7f42">付款</div>
							<div>朋友代付</div>
							<div>取消订单</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
export default{
	data(){
		return{
			num:0,
			userId:0,
			orders:[]
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.init();
		})
	},
	methods:{
		init(){
			let self = this;
			 localStorage.setItem("userId",32);
			var id = localStorage.getItem("userId");
			self.userId = parseInt(id);
			//父路由传递点击的是哪个tabItem
			//如果没有传递过来的数据，说明此页刚刚打开
			//有传递过来的数据，说明用户点击了tabItem切换
			//加载切换的那一页的数据
			if(self.$route.query.num!=undefined){
				self.num = self.$route.query.num;
				self.load(self.num);
				console.log("status"+self.num);
			}
			//因此初始加载全部订单的数据
			else{
				self.load(0);
			}
		},
		load(status){
			let self = this;
			self.$http.get('/api/order/list/'+self.userId).then(function(res){
				if(res.data.code=="OK"){
					self.orders = res.data.data;
				}
				else if(res.data.code=="ERROR"){
					self.$router.push({path:'/order/thing'});
				}
				console.log(res.data);
			}).catch(function(error){
				console.log(error);
			})
		}
	},
	filters:{
		addZero(data){
			return data.toFixed(2);
		}
	},
	watch:{
		'$route':function(to,from){
			this.init();
		}
	}
}
</script>
<style scoped>
p{
	margin:0px;
}
#container{
	padding:15px;
}
.border{
	background:white;
	width:100%;
	border-radius: 15px;
	padding:10px;
	box-sizing: border-box;
	margin-bottom:10px;
}
.top{
}
.top p{
	font-size:13px;
	display: inline-block;
}
.top p:nth-child(3){
	float:right;
	color:#ff7f42;
	font-size: 13px;
}
.body{
	margin-top:10px;
	height:100px;
}
.body div:nth-child(2) p:nth-child(1),.body div:nth-child(2) p:nth-child(2){
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient: vertical;
}
.body div:nth-child(2) p:nth-child(1),.body div:nth-child(3) p:nth-child(1){
	font-size:13px;
	color:#333;
}
.body div:nth-child(2) p:nth-child(2),.body div:nth-child(3) p:nth-child(2){
	margin-top:5px;
	font-size:13px;
	color:#797979;
}
.body div{
	float:left;
}
.body div:nth-child(2){
	padding-left:10px;
	width:120px;
}
.body div:nth-child(3){
	float:right;
	margin-right:10px;
}
.bottom{

}
.bottom p:nth-child(1){
	text-align: right;
	margin-bottom:10px;
	font-size: 13px;
}
.bottom span{
	font-size: 16px;
}
.bottom_border p{
	margin-left:10px;
	margin-top:5px;
}
.bottom_border div{
	float:right;
}
.bottom_border div div{
	box-sizing: border-box;
	border:1px solid #aaa;
	padding:5px 10px;
	margin-right:5px;
	border-radius: 20px;
	font-size:14px;
}
</style>