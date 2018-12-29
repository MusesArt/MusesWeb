<template>
	<div>
		<img src="../../static/img/2.png">
		<p>暂未搜到相关商品</p>
		<div>
			<router-link to="/main">
				<button>再逛逛</button>
			</router-link>
		</div>
	</div>
</template>
<script>
</script>
<style scoped>
p{
	text-align: center;
	margin-top:0px;
	font-size:14px;
	font-weight: bold;
	color:black;
	margin-bottom: 10px
}
img{
	width:53%;
	display:block;
	margin:255px auto;
	margin-bottom:0px;
}
button{
	background:black;
	margin:0 auto;
	display:block;
	color:white;
	outline:none;
	border:0px;
	padding:4px 22px;
	font-size:14px;
	border-radius: 15px;
}
</style>