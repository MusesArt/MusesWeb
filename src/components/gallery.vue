<template>
	<div style="width:100%;overflow: hidden;background-color: white">
		<div style="width:95%;margin:0 auto;">
			<Flexbox> 	
				<FlexboxItem :span="10">
					<router-link to="/search">
						<form action="" method="post">
							<input type="button" class="button">
							<input type="text" class="text" placeholder="搜索装饰画" readonly="readonly"> 		
						</form>
					</router-link>
				</FlexboxItem>
				<FlexboxItem :span="1">
					<img src="../assets/message.png" class="message">
				</FlexboxItem>
			</Flexbox>
			<swiper auto loop dots-position="center" class="swiper">
				<swiper-item class="images">
					<img src="../assets/cubism.png">
				</swiper-item>
				<swiper-item class="images">
					<img src="../assets/dew.png">
				</swiper-item>
				<swiper-item class="images">
					<img src="../assets/guide.png">
				</swiper-item>
				<swiper-item class="images">
					<img src="../assets/institute.png">
				</swiper-item>
			</swiper>
			<Flexbox :gutter="0" class="main">
				<FlexboxItem :span="3" class="bar">
					<img src="../assets/ranking.png">
					<p>热销榜</p>
				</FlexboxItem>
				<FlexboxItem :span="3" class="bar">
					<img src="../assets/list.png">
					<p>签到</p>
				</FlexboxItem>
				<FlexboxItem :span="3" class="bar">
					<img src="../assets/ticket.png">
					<p>券集市</p>
				</FlexboxItem>
				<FlexboxItem :span="3" class="bar">
					<img src="../assets/school.png">
					<p>分类</p>
				</FlexboxItem>
			</Flexbox>
			<Flexbox>
				<FlexboxItem :span="4">
					<p class="recommend">今日推荐</p>
				</FlexboxItem>
				<FlexboxItem :span="5"></FlexboxItem>
				<FlexboxItem :span="3">				
					<img src="../assets/more1.png" class="more">
					<p class="more_font">更多</p>
				</FlexboxItem>
			</Flexbox>
			<scroller lock-y :scrollbar-x=false>
				<div class="box1"  :style="{width:width2}">
					<template v-for="(item,index) in images">
						<div class="today">
							<img :src="item.src">
						</div>
					</template>
				</div>
			</scroller>
			<Flexbox>
				<FlexboxItem :span="4">
					<p class="recommend">新品上市</p>
				</FlexboxItem>
				<FlexboxItem :span="5"></FlexboxItem>
				<FlexboxItem :span="3">
					<img src="../assets/more1.png" class="more">
					<p class="more_font">更多</p>
				</FlexboxItem>
			</Flexbox>
			<div class="img-box img-head">
				<img :src="head">
			</div>
			<template v-for="(item,index) in news">
				<div class="news-bar" :class="{'news-bar2':index%2!=0}">
					<div class="img-box">
						<img :src="item.src">
					</div>
					<p v-text="item.title" class="title"></p>
					<p v-text="item.content" class="content"></p>
					<p v-text="'￥'+item.price" class="price"></p>
				</div>
			</template>
			<Flexbox>
				<FlexboxItem :span="4">
					<p class="recommend" style="margin-top:0px">热销爆款</p>
				</FlexboxItem>
				<FlexboxItem :span="5"></FlexboxItem>
				<FlexboxItem :span="3">
					<img src="../assets/more1.png" class="more" style="margin-top:0px">
					<p class="more_font" style="margin-top:0px">更多</p>
				</FlexboxItem>
			</Flexbox>
			<div class="img-box img-head">
				<img :src="hot">
			</div>
			<template v-for="(item,index) in hots">
				<div class="news-bar" :class="{'news-bar2':index%2!=0}">
					<div class="img-box" height="80%">
						<img :src="item.src">
					</div>
					<p v-text="item.title" class="title"></p>
					<p v-text="item.content" class="content"></p>
					<p v-text="'￥'+item.price" class="price"></p>
				</div>
			</template>
			<Flexbox>
				<FlexboxItem>
					<div class="bottom">
						<p>我是有底线的</p>
					</div>
				</FlexboxItem>
			</Flexbox>
		</div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Swiper, SwiperItem, Scroller } from 'vux'
export default {
	data(){
		return {
			width:0,
			head:require("../assets/new.png"),
			hot:require("../assets/new.png"),
			images:[
			{
				src:require("../assets/recommend1.png")
			},
			{
				src:require("../assets/recommend2.png")
			},
			{
				src:require("../assets/recommend3.png")
			}
			],
			news:[
			{
				src:require("../assets/new1.png"),
				title:"客厅北欧风格装饰画",
				content:"现代简约 高档三联 风景挂画",
				price:716
			},
			{
				src:require("../assets/new2.png"),
				title:"荷花禅意装饰画",
				content:"实木挂轴画 简约现代 挂轴墙壁画",
				price:439
			},
			{
				src:require("../assets/new1.png"),
				title:"客厅北欧风格装饰画",
				content:"现代简约 高档三联 风景挂画",
				price:716
			},
			{
				src:require("../assets/new2.png"),
				title:"荷花禅意装饰画",
				content:"实木挂轴画 简约现代 挂轴墙壁画",
				price:439
			}
			],
			hots:[
			{
				src:require("../assets/new1.png"),
				title:"客厅北欧风格装饰画",
				content:"现代简约 高档三联 风景挂画",
				price:716
			},
			{
				src:require("../assets/new2.png"),
				title:"荷花禅意装饰画",
				content:"实木挂轴画 简约现代 挂轴墙壁画",
				price:439
			},
			{
				src:require("../assets/new1.png"),
				title:"客厅北欧风格装饰画",
				content:"现代简约 高档三联 风景挂画",
				price:716
			},
			{
				src:require("../assets/new2.png"),
				title:"荷花禅意装饰画",
				content:"实木挂轴画 简约现代 挂轴墙壁画",
				price:439
			}
			]
		}
	},
	created(){
		this.width=document.documentElement.clientWidth;
	},
	computed:{
		width2:function(){
			return ((this.images.length)*170+'px');
		}
	},
	components: {
		Flexbox,
		FlexboxItem,
		Swiper,
		SwiperItem,
		Scroller
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
form{
	float:left;
	padding:3px 10px;
	border-radius: 20px;
	width:98%;
	margin-top:10px;
	background:#f6f6f6;
}
.button{
	float:left;
	width:23px;
	height:23px;
	margin-top:2px;
	margin-right:10px;
	outline:none;
	background: url(../assets/search.png);
	background-size: 100% 100%;
	background-position: 50% 50%;
	border:0;
}
.text{
	float:left;
	color:#707070;
	height:25px;
	width:75%;
	font-size:14px;
	line-height: 20px;
	border:0;
	outline:none;
	background:#f6f6f6;
}
.message{
	margin-left:22px;
	margin-top:10px;
	width:75%;
	height:75%;
}
.swiper{
	margin-top:10px;
	margin-left:5px;
	margin-right:5px;
}
.images{
	width:100%;
	height:100%;
	border-radius: 10px;
	overflow: hidden;
	display: inline-block;
	margin-left:10px;
}
.main{
	margin-top:30px;
}
.bar{
	text-align:center;
}
.bar img{
	width:46%;
	height:46%;
}
.bar p{
	margin-top:5px;
	color:#333333;
	font-size:13px;
}
.recommend{
	font-weight:bold;
	font-size:16px;
	margin-top:25px;
	margin-bottom:8px;
}
.more{
	width:12px;
	height:12px;
	float:right;
	margin-right:15px;
	margin-top:26px;
}
.more_font{
	color:#707070;
	font-size:12px;
	float:right;
	margin-top:25px;
	margin-bottom:8px;
}
.today{
	width:160px;
	height:110px;
	margin-right:10px;
	float:left;
	border-radius: 5px;
	overflow: hidden;
}
.img-box{
	width:100%;
	height:100%;
	border-radius: 5px;
	overflow:hidden;
}
.img-head{
	height:200px;
	margin-bottom:10px;
}
.news-bar{
	float:left;
	width:50%;
	padding-right:6px;
	box-sizing: border-box;
}
.news-bar2{
	padding-left:6px;
	padding-right:0px;
}
.title{
	color:#333333;
	font-size:14px;
	margin-top:3px;
	font-weight:bold;
}
.content{
	color:#707070;
	font-size:11px;
	min-height: 20px;
}
.price{
	margin-bottom:15px;
	font-size:14px;
	color:red;
	font-weight:bold;
}
.bottom{
	width:100%;
	height:30px;
	background:#eee;
	margin-bottom:10px;
	text-align:center;
	line-height:30px;
}
</style>