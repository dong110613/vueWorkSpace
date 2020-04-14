<template>
	<div>
		{{routerName}}
	</div>
</template>
<script>
	export default {
		name:'routerPage',
		data(){
			return {
				routerName:'rn'
			}
		},
		methods:{

		},
		mounted(){

		},
		created(){

		},
		activated(){
		    console.log('缓存后激活2');
		  },
		  deactivated(){
		console.log('缓存后停用2');
		  }
	}
</script>
