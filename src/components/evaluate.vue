<template>
	<div class="content" style="background-color: #eee">
		<div class="head">
			<p>用户评论({{evaluate.length}})</p>
			<div class="praise">
				<!--<p>好评度</p>-->
				<!--<p>{{praise}}%</p>-->
			</div>
		</div>
		<div class="title" id="title" :style="{height:height}">
			<input type="button" class="button" value="全部" :class="currentTitle=='全部'?'selected':'no_selected'" @click="changeTitle(-1)">
			<input type="button" class="button" value="最新" :class="currentTitle=='最新'?'selected':'no_selected'" @click="changeTitle(-2)">
			<input type="button" class="button" value="最热" :class="currentTitle=='最热'?'selected':'no_selected'" @click="changeTitle(-3)">
			<input type="button" class="button" value="图片" :class="currentTitle=='图片'?'selected':'no_selected'" @click="changeTitle(-4)">
			<template v-for="(item,index) in title">
				<input type="button" class="button" :value="item.title+'  '+item.num" :class="currentTitle==item.title?'selected':'no_selected'" @click="changeTitle(index)">
			</template>
		</div>
		<div class="more">
			<img src="../assets/angle_down.png" style="margin:0 auto;width:20px;height:20px;display:block" @click="more">
		</div>
		<div class="container">
			<template v-for="(item,index) in evaluate">
			<div class="bar">
				<div style="height:45px">
					<div class="head_left">
						<div class="circle">
							<img :src="item.head">
						</div>
					</div>
					<div class="head_center">
						<p style="font-size:14px" v-text="item.username"></p>
						<rater v-model="item.star" :font-size="16" active-color="#770000" :disabled="true"></rater>
					</div>
					<div class="head_right" style="float:right;">
						<p>{{new Date(item.date).getFullYear() + '-'}}{{new Date(item.date).getMonth() + 1}}{{'-' + new Date(item.date).getDate()}}</p>
					</div>
				</div>
				<div>
					<p v-text="item.content" style="" class="content_p"></p>
				</div>
				<div class="imgs">
					<template v-for="(data,num) in item.images">
						<img :src="data" class="img" :class="{'img_other':num%3!=0}">
					</template>
				</div>
				<div style="height:50px;margin-top:8px">
					<div class="bottom_left">
						<p style="font-size:11px;color:#797979" v-text="item.commodityInfo"></p>
					</div>
					<div class="bottom_right">
						<!--<img src="../assets/comment.svg" class="bottom_img" style="width:18px;height:18px;margin-right: 10px">-->
						<!--<p style="margin-right: 10px;font-size:13px" v-text="item.assess"></p>-->
            <!--<img src="../assets/thumb_up.svg" class="bottom_img" style="width:18px;height:18px;">-->
						<!--<p style="font-size:13px">{{item.message | more}}</p>-->
					</div>
				</div>
			</div>
		</template>
		</div>
	</div>
</template>
<script>
import detail from '../js/detail.js'
import { Rater } from 'vux'
export default{
	data(){
		return{
			evaluate:[],
			title:[],
			high_opinion:0,
			bad_opinion:0,
			totalNum:0,
			height:"50px",
			title_len:0,
			currentTitle:'全部'
		}
	},
	components:{
		Rater
	},
	// beforeCreate(){
	// 	document.querySelector('body').setAttribute('style', 'background-color:#eee');
	// },
	mounted(){
		this.$nextTick(function(){
			let self=this;
			// self.$http.get("../static/evaluate.json").then(function(res){
			// 	self.high_opinion=res.data.high_opinion;
			// 	self.bad_opinion=res.data.bad_opinion;
			// 	self.totalNum=res.data.totalNum;
			// 	for(var i=0;i<res.data.evaluates.length;i++){
			// 		self.evaluate.push(res.data.evaluates[i]);
			// 	};
			// 	for(var i=0;i<res.data.titles.length;i++){
			// 		self.title.push(res.data.titles[i]);
			// 	}
			// });
			let storage = window.localStorage;
			let id = storage.getItem("CommodityId");
      self.$http.get("/api/comment/" + id + "/1/", {
        params: {
          size: 20
        }
      }).then(function (res) {
        if (res.data.code === "OK") {
          self.evaluate = res.data.data.dataList;
        } else {
          console.log(res.data.code);
          console.log(res.data.msg);
        }
      });
		})
	},

	methods:{
		more(){
			let self=this;
			var title=document.getElementById("title");
			if(self.height==="90px"){
				title.style.overflow='';
				this.height="auto";
			}
			else{				
				this.height="90px";

			}
		},
		changeTitle(index){
			let self=this;
			if(index==-1){
				self.currentTitle='全部';
			}
			else if(index==-2){
				self.currentTitle='最新';
			}
			else if(index==-3){
				self.currentTitle='最热';
			}
			else if(index==-4){
				self.currentTitle='图片';
			}
			else{
				self.currentTitle=self.title[index].title;
			}
		}
	},
	filters:{
		more:function(value){
			var str="9";
			if(value<=99)
				return value;
			else{
				while((value/10)>=10){
					str+="9";
					value=value/10;
				}
				return str+"+";
			}
		}
	},
	computed:{
		praise:function(){
			return ((this.high_opinion)/(this.totalNum)*100).toFixed(0);
		}
	}
}
</script>
<style scoped>
p{
	margin:0px;
}
img{
	width:100%;
	height:100%;
	object-fit: cover;
}
.praise{
	float:right;
	margin-top:-20px;
	margin-right:10px;
}
.praise p{
	float:left;
}
.praise p:last-child{
	color:red;
}
.content{
	width:100%;
	height:100%;
	background:#eee;
}
.head{
	margin-top:40px;
	background:white;
	padding:15px 5px;
	padding-left:15px;
}
.title{
	margin-top:2px;
	background:white;
	padding-top:20px;
	overflow-y: hidden;
}
.button{
	border:0px;
	background:#eee;
	margin-left:10px;
	margin-bottom:10px;
	padding:5px 20px;
	font-size:14px;
	height:35px;
	border-radius: 15px;
	outline:none;
}
.more{
	background:white;
	padding:15px 0;
}
.container{
	margin-top: 10px;
}
.bar{
	padding:0 15px;
	background:white;
	padding-top:10px;
	margin-bottom:10px;
}
.bar> div{
	width:100%;
	margin-bottom: 5px;
	clear:both;
}
.bar>div >div{
	float:left;
	margin-right:5px;
}
.bar div .bottom_left{
	float:left;
}
.bar div .bottom_right{
	float:right;
}
.circle{
	width:40px;
	height:40px;
	border-radius: 20px;
	border:1px solid #aaa;
	overflow: hidden;
}
.head_right p{
	font-size:14px;
	color:#797979;
	line-height:40px;
}
.content_p{
	font-size:15px;
	color:#333;
	overflow: hidden;  
    display: -webkit-box;  
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; 
}
.imgs .img{
	width:32%;
	height:100px;
	margin-bottom:3px;
}
.imgs .img_other{
	margin-left: 5px;
}
.bottom_right .bottom_img{
	width:20px;
	height:20px;
	display:inline-block;
	float:left;
}
.bottom_right p{
	float:left;
}
.selected{
	color:#ff6461;
	border:1px solid #ff6461;
	background:rgba(255,100,97,0.2);
}
</style>
