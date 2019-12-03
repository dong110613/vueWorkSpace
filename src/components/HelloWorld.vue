<style lang="less">
  .subBtn{
    width:50px;
    height: 30px;
    text-align:center;
    line-height: 30px;
    border:1px solid black;
    cursor: pointer;
  }
</style>
<template>
  <div class="hello">
    <input type="text" v-model='limitNum'>
    <div class='subBtn' @click='submitNum'>
      <p>提交</p>
    </div>
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
      themeList:'',
      limitNum:1
    }
  },
  methods:{
    getTestData(){
     let a= this.$axios.get('/ping/pingPay',{
      params:{
        id:this.limitNum
      }
     }).then((res)=>{
        let data=res.data;
        if (data.code==200) {
          this.themeList=data.data;

        }else{
          alert(data.message);
        }
      })
    },
    submitNum(){
       this.getTestData();
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
