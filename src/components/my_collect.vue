<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png" style="float:left;">
			<img src="../assets/trash.png" style="float:right;margin-right:10px">
			<p>我的收藏</p>
		</div>
		<template v-for="(item,index) in collects">
			<div class="content">
				<div class="box" :style="{width:width+75+'px'}" @touchstart="touchstart(index,$event)" @touchmove="touchmove(index,$event)" @touchend="touchend(index,$event)">
					<img :src="item.src" :style="{width:width*0.3+'px'}">
					<div class="box_content" :style="{width:width*0.7-10+'px'}">
						<p v-text="item.title" :class="{'no_shop':item.message=='到货通知'}"></p>
						<p v-text="item.content" :class="{'no_shop':item.message=='到货通知'}"></p>
						<p :class="{'no_shop':item.message=='到货通知'}">¥{{item.price}}</p>
						<div class="box_bottom">
							<input type="button" :value="'收藏价¥'+item.collect_price" class="label">
							<input type="button" :value="item.message" class="label">
							<img src="../assets/trash.png">
						</div>
					</div>
					<div class="hidden">
						<p>移出<br>收藏</p>
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
				width:0,
				startX:0,
				offsetX:0,
				pageX:0,
				collects:[],
				moveX:0
			}
		},
		created: function() {
			this.width=document.documentElement.clientWidth;
		},
		mounted(){
			this.$nextTick(function(){
				let self=this;
				self.$http.get("../static/mycollect.json").then(function(res){
					for(var i=0;i<res.data.collects.length;i++){
						self.collects.push(res.data.collects[i]);
					}
				})
			})// this.$router.push('/empty');
		},
		methods:{
			touchstart:function(index,e){
				var div=document.getElementsByClassName("box")[index];
				this.startX=e.touches[0].pageX;
				this.offsetX=this.startX-div.offsetLeft;
			},
			touchmove:function(index,e){
				var div=document.getElementsByClassName("box")[index];
				this.pageX=e.touches[0].pageX;
				this.moveX=this.pageX-this.offsetX;
				if(this.moveX<-70){
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
				if(div.offsetLeft>=-35)
					div.style.left="0px";
				else if(div.offsetLeft<-35)
					div.style.left="-70px";
			}
		}
	}
</script>
<style scoped>
p{
	margin:0px;
}
.head{
	width:100%;
	height:50px;
	/*border:1px solid #aaa;*/
}
.head img{
	margin:10px 0 0 10px;
	width:30px;
	height:30px;
}
.head p{
	text-align:center;
	color:#333;
	font-size:16px;
	font-weight: bold;
	line-height:50px;
}
.content{
	margin:10px 0;
	/*border:1px solid #aaa;	*/
	overflow:hidden;
	position:relative;
	width:100%;
	height:120px;
}
.box{
	position:absolute;
	left:0px;
	top:0px;
	height:120px;
	padding-left:10px;
	box-sizing: border-box;
}
.content img{
	height:100px;
	float:left;
	margin:10px 0;
}
.box_content{
	float:left;
	height:100px;
	padding-left:10px;
	box-sizing: border-box;
	padding-right:10px;
}
.box_content p:nth-child(1){
	color:#333;
	font-weight:bold;
	font-size:15px;
	margin-top:10px;
}
.box_content p:nth-child(2){
	color:#797979;
	font-size:13px;
	margin-top:4px;
	text-overflow: ellipsis;
	overflow:hidden;
	white-space: nowrap;
}
.box_content p:nth-child(3){
	color:red;
	font-weight:bold;
	margin-top:10px;
	margin-bottom:5px;
}
.box_bottom{
	margin-bottom:10px;
	position:relative;
	/*border:1px solid #aaa;*/
}
.box_bottom img{
	position:absolute;
	right:10px;
	bottom:-10px;
	width:20px;
	height:20px;
}
.label{
	border:1px solid #aaa;
	outline:none;
	background:white;
	margin-right:10px;
	border-radius: 10px;
	padding:3px 8px;
}
.hidden{
	background:#ff4013;
	width:70px;
	height:120px;
	float:left;
	box-sizing: border-box;
	text-align:center;
	padding-top:35px;
	color:white;
}
.box .box_content .no_shop{
	color:#797979;
	opacity:0.7;
}
</style>