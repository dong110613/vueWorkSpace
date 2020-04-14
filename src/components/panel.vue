<style>
	.divBor{
		display: inline-block;
		border:3px solid red;
	}
</style>
<template>
	<!-- <input type="number"> -->
	<div :class='{divBor:true}'>
	<slot :childList='list'>
		{{list.name}}
	</slot>
	<slot name='header'>1</slot>
	<interiorCom></interiorCom>
	<c2 v-bind='$attrs' @changeVal='ccv'></c2>
	<button @click='clickc'>123</button>
	<!-- ~~~ {{getMap.colorVal}} -->
	</div>

</template>
<script>
	import c2 from './child2.vue';
	export default {
		components:{
			c2,
			'interiorCom':{
				template:`<div style='border:3px solid yellow'><p>{{msg}}</p></div>`,
				data(){
					return{
						msg:'components中创建组件'
					}
				}
			}
		},
		data(){
			return {
				titleName:'测试',
				list:{name:'子组件内容',age:18},
			}

		},
		inheritAttrs: false,
		props:['name'],
	    watch:{

	    },
		mounted(){
			console.log('子组件是否执行',this.$children);
			// console.log('传值方式',this.getMap.colorVal);

		},
		provide() {
		    return {
		      getMap: '多个provide2'
		    };
		  },
inject: ['getMap'],
		methods:{
			childFunction(){
				console.log('父级调用触发');
			},
			clickc(){
				this.name='可以';
				console.log(this.name);
				this.$emit('changeVal','zizujian')
			},
			ccv(){
				this.$attrs.themeList='改变';
				console.log(this.$attrs.themeList);
			}
		},
		created(){
			console.log(this.getMap);
			console.log('父级prop',this.$attrs);
		},
		activated(){
		    console.log('缓存后激活1-1');
		  },
		  deactivated(){
		console.log('缓存后停用1-1');
		  }
	}
</script>
