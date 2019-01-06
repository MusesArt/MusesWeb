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
			<swiper auto loop dots-position="center" class="swiper" aspect-ratio="0.5625">
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
				<div class="box1" :style="{width:width2}">
					<template v-for="(item,index) in images">
						<div class="today">
							<img :src="item.coverImage">
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
			<template v-for="(item,index) in news" >
				<div class="news-bar" :class="{'news-bar2':index%2!=0}" @click="select(item.id)">
					<div class="img-box">
						<img :src="item.coverImage" style="width: 188px; height: 188px">
					</div>
					<p v-text="item.name.substr(0, 12) + '...'" class="title"></p>
					<p v-text="item.brief.substr(0, 14)+ '...'" class="content"></p>
					<p v-text="'￥'+item.discountPrice" class="price"></p>
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
			<template v-for="(item,index) in hots" @click="select(item.id)">
				<div class="news-bar" :class="{'news-bar2':index%2!=0}" @click="select(item.id)">
					<div class="img-box" height="80%" style="width: 188px; height: 188px">
            <img :src="item.coverImage" >
					</div>
          <p v-text="item.name.substr(0, 12) + '...'" class="title"></p>
          <p v-text="item.brief.substr(0, 14)+ '...'" class="content"></p>
          <p v-text="'￥'+item.discountPrice" class="price"></p>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Swiper, SwiperItem, Scroller } from 'vux'
export default {
	data(){
		return {
			width:0,
			slider:[],
			today:[],
			image_news:[],
			image_hots:[],
			data:{
				size:4,
				sortType:4,
				asc:false,
				keyword:""
			},
			head:require("../assets/new.png"),
			hot:require("../assets/new.png"),
			images:[
			{
        coverImage:require("../assets/recommend1.png")
			},
			{
        coverImage:require("../assets/recommend2.png")
			},
			{
        coverImage:require("../assets/recommend3.png")
			}
			],
			news:[],
			hots:[]
		}
	},
	created(){
		this.width=document.documentElement.clientWidth;
	},
	mounted(){
		this.$nextTick(function(){
			let self = this;
			self.$http.get('/api/banner/').then(function(res){
				if(res.data.code=="OK"){
					self.slider = res.data.data;
					console.log(self.slider.imageUrl);
				}
				else{
					console.log(res.data.code);
					console.log(res.data.msg);
				}
			}).catch(function(error){
				console.log(error);
			});

			var searchModel1 = JSON.parse(JSON.stringify(self.data));
			searchModel1.size=4;
			searchModel1.sortType=4;
			self.$http.post('/api/commodity/page/1',searchModel1).then(function(res){
				if(res.data.code=="OK"){
          let data = res.data.data;
          for (let i = 0; i < data.dataList.length; i++) {
            self.news.push(data.dataList[i]);
          }
					console.log(data);
				}
				else{
					console.log(res.data.code);
					console.log(res.data.msg);
				}
			}).catch(function(error){
				console.log(error);
			})
			var searchModel2 = JSON.parse(JSON.stringify(self.data));
			searchModel2.size=4;
			searchModel2.sortType=0;
			self.$http.post('/api/commodity/page/1',searchModel2).then(function(res){
				if(res.data.code==="OK"){
          let data = res.data.data;
          for (let i = 0; i < data.dataList.length; i++) {
            self.hots.push(data.dataList[i]);
          }
          console.log(data);
				}
				else{
					console.log(res.data.code);
					console.log(res.data.msg);
				}
			}).catch(function(error){
				console.log(error);
			})
		})
	},
	computed:{
		width2:function(){
			return ((this.images.length)*173+'px');
		}
	},
	components: {
		Flexbox,
		FlexboxItem,
		Swiper,
		SwiperItem,
		Scroller
	},
  methods: {
    select(id) {
      console.log("select");
      this.$router.push({
        path: '/detail/',
        query: {
          id: id,
          page: "gallery"
        }
      })
    }
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
  margin-top: 3px;
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
