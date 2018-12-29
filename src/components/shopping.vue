<template>
	<div class="body" :style="{width:width+'px'}">
		<div class="head">
			<Flexbox>
				<FlexboxItem :span="3">
					<p class="head_left">购物车</p>
				</FlexboxItem>
				<FlexboxItem :span="7"></FlexboxItem>
				<FlexboxItem :span="2">
					<p class="head_right" @click="Edit">{{edit_text}}</p>
				</FlexboxItem>
			</Flexbox>
		</div>
		<template v-for="(item,index) in items">
			<div class="content">		
				<div class="box" @touchstart="remove&&touchstart(index,$event)" @touchmove="remove&&touchmove(index,$event)" @touchend="remove&&touchend(index,$event)" :style="{width:width+131+'px'}">
					<div class="box_left">
						<div class="circle" :class="{'check':item.checked}" @click="onClick(item)">
							<img src="../assets/true.png" v-if="item.checked" style="width:18px;height:18px;float:left">
						</div>
					</div>
					<div class="box_img">
						<img :src="item.src">
					</div>
					<div v-show="!edit">
						<div class="box_content" :style="{width:width-118+'px'}">
							<p class="box_head" v-text="item.title"></p>
							<div class="box_hide_message">
								<p>
									{{item.message}}
								</p>
							</div>
							<p class="box_price box_hide_price">¥{{item.price}}</p>
						</div>
					</div>
					<div v-show="edit">
						<div class="box_content" :style="{width:(width-118)*7/9+'px'}">
							<p class="box_head" v-text="item.title"></p>
							<p class="box_message" v-text="item.message"></p>
							<p class="box_price">¥{{item.price}}</p>
						</div>
						<div class="box_right" :style="{width:(width-118)*2/9+'px'}">
							<input type="button" value="+" class="add button" @click="change(item,1)">
							<input type="text" value="1" v-model="item.num" class="text">
							<input type="button" value="-" class="button decrease" :class="{'disable':item.num==1}" @click="change(item,-1)">
						</div>
						<div class="hide_left">
							<input type="button" value="收藏" class="collect">
						</div>
						<div class="hide_left" style="background-color: #FF4013">
							<input type="button" value="删除" class="collect" style="background-color: #ff4013">
						</div>
					</div>
				</div>
			</div>
		</template>
		<div class="footer">
			<div class="footer_left">
				<div class="footer_circle" @click="AllCheck()" :class="{'check':checkAll}">
					<img src="../assets/true.png" v-if="checkAll" style="width:18px;height:18px;float:left">
				</div>
			</div>
			<div class="footer_center">
				<p @click="AllCheck()">全选</p>
			</div>
			<div v-show="!edit">
				<div class="hide_button">
					<input type="button" class="left_button" value="收藏">
					<input type="button" class="right_button" value="删除">
				</div>
			</div>
			<div v-show="edit">
				<div class="footer_content">
					<p class="all">合计: </p>
					<p class="footer_price">
						{{totalPrice | fixed}}
					</p>
				</div>
				<div class="footer_right">
					<input type="submit" :value="'结算('+totalNum+')'" class="submit">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Scroller } from 'vux'
export default {
	data(){
		return{
			items:[],
			width:0,
			startX:0,
			offsetX:0,
			pageX:0,
			moveX:0,
			remove:true,
			edit:true,
			edit_text:"编辑",
			totalNum:0,
			totalPrice:0,
			len:0,
			checkAll:false,
			flag:"false"
		}
	},
	components: {
		Flexbox,
		FlexboxItem,
		Scroller
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	created: function() {
		this.width=document.documentElement.clientWidth;
	},
	mounted(){
		this.$nextTick(function(){
			let self=this;
			self.$http.get("../static/shopping.json").then(function(res){
				self.len=res.data.shopping.length;
				for(var i=0;i<self.len;i++){
					self.items.push(res.data.shopping[i]);
				}
			})
		})
		// this.$router.push('/empty');
	},
	beforeDestroy () {
		document.querySelector('body').removeAttribute('style')
	},
	methods:{
		Edit:function(){
			this.edit=!this.edit;
			if(this.edit_text=="编辑"){
				this.edit_text="完成";
			}
			else{
				this.edit_text="编辑";
			}
			this.remove=!this.remove;
			var box=document.getElementsByClassName("box");
			for(var i=0;i<this.len;i++){
				box[i].style.left="0px";
			}
			this.AllCheck();
		},
		touchstart:function(index,e){
			var div=document.getElementsByClassName("box")[index];
			this.startX=e.touches[0].pageX;
			this.offsetX=this.startX-div.offsetLeft;
		},
		touchmove:function(index,e){
			var div=document.getElementsByClassName("box")[index];
			this.pageX=e.touches[0].pageX;
			this.moveX=this.pageX-this.offsetX;
			if(this.moveX<-118){
				div.style.right="0px";
			}
			else if(this.moveX>0){
				div.style.left="0px";
			}
			else{
				div.style.left=this.moveX+'px';
			}
		},
		touchend:function(index,e){
			var div=document.getElementsByClassName("box")[index];
			if(div.offsetLeft>=-59)
				div.style.left="0px";
			else if(div.offsetLeft<-59)
				div.style.left="-118px";
		},
		onClick:function(item){
			let self=this;
			if (typeof item.checked === 'undefined') {
				self.$set(item, 'checked', true);
			}
			else{
				item.checked=!item.checked;
			}
			this.colacNum();
		},
		AllCheck:function(){
			this.checkAll=!this.checkAll;
			var _this=this;
			if(this.checkAll){
				this.items.forEach(function(item,index){
					if(typeof item.checked=="undefined"){
                        _this.$set(item,"checked",true);
                    }
                    else{
                    	item.checked=true;
                    }
				})
			}
			else{
				this.items.forEach(function(item,index){
					item.checked=false;
				})
			}
			this.colacNum();
		},
		change(item,way){
			let self=this;
			if(way<0){
				item.num--;
				if(item.num<1){
					item.num=1;
				}
			}
			else{
				item.num++;
			}
			this.colacNum();
		},
		colacNum:function(){
			var _this=this;
			this.totalNum=0;
			this.totalPrice=0;
			this.items.forEach(function(item,index){
				if(item.checked==true){
					_this.totalNum++;
					_this.totalPrice+=item.num*item.price;
				}
			})
		}
	},
	filters:{
		fixed:function(value){
			return value.toFixed(2);
		}
	}
}
</script>
<style scoped>
img{
	width:100%;
}
p{
	margin:0px;
}
.body{
	position:relative;
	height:100%;
	overflow: hidden;
	background:white;
	width:100%;
}
.head{
	width:100%;
	height:50px;
	/*border:1px solid #aaa;*/
}
.head .head_left{
	font-size:23px;
	margin-top:10px;
	margin-left:10px;
	font-weight:bold;
}
.head .head_right{
	font-size:16px;
	color:#FF4013;
	margin-top:5px;
}
.content{
	position:relative;
	height:112px;
	background:#eee;
}
.box{
	position: absolute;
	left:0px;
	top:0px;
	height:110px;
	background:white;
	overflow: hidden;
	/*border:1px solid #aaa;*/
}
.box .box_left{
	height:110px;
	width:40px;
	/*border:1px solid #aaa;*/
	float:left;
}
.box .box_img{
	height:78px;
	width:78px;
	background-color: #eee;
	float:left;
	margin-top:16px;
}
.box .box_content{
	height:110px;
	/*border:1px solid #aaa;*/
	float:left;
}
.box .box_right{
	height:110px;
	/*border:1px solid #aaa;*/
	float:left;
}
.circle{
	width:15px;
	height:15px;
	border-radius: 10px;
	border:1px solid #aaa;
	margin-left:8px;
	margin-top:45px;
}
.box .box_head{
	color:#333333;
	font-weight:bold;
	margin-top:16px;
	margin-left:10px;
	font-size:14px;
}
.box .box_hide_message{
	color:#797979;
	background:#eee;
	font-size:12px;
	margin-left:10px;
	margin-top:5px;
	padding:5px 0;
	margin-right:10px;
}
.box .box_hide_message p{
	margin-left:10px;
}
.box .box_message{
	color:#797979;
	margin-left:10px;
	font-size:12px;
	margin-top:8px;
}
.box .box_price{
	margin-top: 15px;
	margin-left:10px;
	font-size:16px;
	color:#ff4013;
	font-weight:bold;
}
.box .box_hide_price{
	margin-top:9px;
}
.button{
	background:white;
	outline:none;
	width:20px;
	height:20px;
	border:0px;
	font-size:20px;
	color:#797979;
	font-weight:520;
	margin-left:13px;
}
.add{
	margin-top: 16px;
}
.decrease{
	font-size:28px;
	line-height:5px;
}
.disable{
	opacity:0.5;
}
.text{
	width:15px;
	height:20px;
	outline:none;
	border:0px;
	font-size:15px;
	margin-left:13px;
	padding-left:5px;
	background:#eee;
	font-weight:bold;
}
.box .hide_left{
	background:#333;
	float:left;
	height:110px;
	width:59px;
	color:white;
	line-height:110px;
}
.collect{
	outline:none;
	border:0px;
	background:#333;
	color:white;
	font-size:16px;
	margin-left:8px;
}
.footer{
	width:100%;
	height:50px;
	position:fixed;
	left:0px;
	bottom:50px;
	background-color: white;
}
.footer_left{
	float:left;
	margin-left:15px;
	margin-top:15px;
}
.footer_center{
	float:left;
	margin-top:13px;
	color:#797979;
	margin-left:8px;
	font-size:14px;
}
.footer_content{
	float:left;
	margin-left:80px;
	margin-top:13px;
	width:100px;
}
.footer_right{
	float:left;
	margin-left:10px;
	margin-top:10px;
}
.footer_circle{
	width:15px;
	height:15px;
	border-radius: 10px;
	border:1px solid #aaa;
}
.all{
	float:left;
	font-size:14px;
	color:#333;
}
.footer_price{
	float:left;
	font-size:16px;
	margin-left:5px;
	font-weight:400;
	color:#ff4013;
}
.hide_button{
	float:right;
	margin-right:20px;
	margin-top:10px;
}
.left_button{
	background:#333;
	color:white;
	border:0px;
	outline:none;
	margin:0px;
	float:left;
	width:85px;
	height:30px;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}
.right_button{
	background:#ff4013;
	color:white;
	outline:none;
	border:0px;
	margin:0px;
	float:left;
	width:85px;
	height:30px;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}
.submit{
	background:#ff4013;
	color:white;
	outline:none;
	border:0px;
	width:90px;
	height:30px;
	border-radius: 10px;
	font-size:14px;
	border-radius: 30px
}
.check{
	border:0px;
}
</style>