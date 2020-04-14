<template>
	<div style='border:3px solid blue'>
		<h1>这是一个二级子组件</h1>
		<button @click='clickBtn'>二级按钮</button>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		props:['titleName'],
		inject: ['getMap'],
		methods:{
			clickBtn(){
				console.log(this.$attrs.themeList);
				this.$attrs.themeList='赋值';
				console.log(this.$attrs.themeList);
				this.$emit('changeVal','显示listence')
			}
		},
		mounted(){
			console.log(this.getMap);
			console.log(this.$attrs);
		},
		created(){

		}
	}
</script>
