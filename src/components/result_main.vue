<template>
	<div>
		<scroller :on-infinite="infinite" ref="myscroll">
			<div>
				<ul>
					<template v-for="(item,index) in items">
						<li :class="{'right':index%2==1}" @click="select()">
							<img :src="item.src">
							<p v-text="item.title" class="title"></p>
							<p v-text="item.content" class="content"></p>
							<p v-text="'￥'+item.price" class="price"></p>
						</li>
					</template>
				</ul>
			</div>
			<div class="end" v-text="bottom"></div>
		</scroller>
	</div>
</template>
<script>
export default{
	data(){
		return{
			items:[],
			length:0,
			flag:0,
			mark:1,
			bottom:'上拉加载',
			search:''
		}
	},
	mounted() {
		this.$nextTick(function () {
			let self=this;
			self.mark=1;
			self.flag=0;
			self.length=0;
			self.bottom='上拉加载';
			self.$http.get("static/data.json").then(function(res){
				self.length=res.data.news.length-1;
				for(var i=0;i<6;i++){
					self.items.push(res.data.news[i]);
					self.flag++;
				}
			})
		})
	},
    methods:{
    	select(){
    		this.$router.push({path:'/detail'})
    	},
    	infinite:function(done){
    		let self=this;
    		if (self.flag>=self.length&&self.flag>self.mark) {
    			self.bottom="我是有底线的"
    			setTimeout(function(){
    				done(true)
    			}, 1500)
    			return;
    		}
        self.bottom='上拉加载'
    		setTimeout(function(){
    			self.$http.get("../static/data2.json").then(function(res) {
    				var len=res.data.news.length;
    				var down=len-self.flag;
    				if(down<6){
    					for(var i=self.flag;i<len;i++){
    						self.items.push(res.data.news[i]);
    						self.flag++;
    					}
    				}
    				else{
    					var j=self.flag+6;
    					for(var i=self.flag;i<j;i++){
    						self.items.push(res.data.news[i])
    						self.flag++
    					}
    				}
    			 });
    			self.$refs.myscroll.resize();
    			done()
    		},2500);
    	},
    	clear(){
    		this.search=''
    	}
    }
}
</script>
<style scoped>
p{
	margin:0px;
}
.end{
	height:40px;
	text-align:center;
	background:#eee;
	line-height:40px;
}
ul,li{
	margin:0;
	padding:0;
	display: inline-block;
}
ul{
	clear:both;
}
li{
	float:left;
	width:50%;
	padding-right:5px;
	box-sizing: border-box;
}
.right{
	padding-left:5px;
	padding-right:0px;
}
li img{
	width:100%;
	border-radius: 5px;
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
	min-height:20px;
}
.price{
	color:red;
	font-size:14px;
	font-weight:bold;
	margin-bottom:12px;
}
</style>