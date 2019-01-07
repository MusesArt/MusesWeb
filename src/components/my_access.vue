<template>
	<div class="contain">
		<div id="head">
			<img src="../assets/back2.png"/>
			<p>我的评价</p>
		</div>
		<view-box>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</view-box>
	</div>
</template>
<script>
import { Tab, TabItem, ViewBox } from 'vux'
export default{
	components:{
		Tab,
		TabItem,
		ViewBox
	}
}
</script>
<style scoped>
.contain{
	background:#eee;
}
#head{
	height:50px;
	width:100%;
	clear:both;
	border:1px solid #aaa;
}

#head img{
	width:30px;
	height:30px;
	margin-top: 10px;
}
#head img:nth-child(1){
	float:left;
	margin-left:10px;
}
#head p{
	float:left;
	margin-left:10px;
}
</style>