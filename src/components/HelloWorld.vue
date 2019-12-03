<template>
  <div class="hello">
    <ul>
      <li v-for='(item,index) in themeList'>{{item.id}}--{{item.themeName}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'I’m,back',
      name:'text',
      themeList:''
    }
  },
  methods:{
    getTestData(){
     let a= this.$axios.get('/ping/pingPay').then((res)=>{
        let data=res.data;
        if (data.code==200) {
          this.themeList=data.data;
            console.log(data);
        }else{
          alert(data.message);
        }

      })
     console.dir(this.$axios);
    }
  },
  mounted(){
    this.getTestData();
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
