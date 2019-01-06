<template>
	<div class="content">
        {{description}}
	</div>
</template>
<script>
import detail from '../js/detail.js' 
export default{
	data(){
		return{
			description: ""
		}
	},
	beforeCreate(){
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	mounted(){
		this.$nextTick(function(){
            let description = detail.data.description
            console.log(description)
            document.getElementsByClassName('content')[0].innerHTML = description;
        })
	},
	methods:{
	}
}
</script>
<style scoped>
.content {
    zoom: 0.5;
}
</style>
