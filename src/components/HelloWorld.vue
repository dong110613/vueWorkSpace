<style lang="less">
.subBtn {
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid black;
  cursor: pointer;
}
</style>
<template>
  <div class="hello">
    <input type="text" v-model="limitNum" />
    <div class="subBtn" @click="submitNum">
      <p>提交</p>
    </div>
    <div class="subBtn" @click="beRouterFun">
      <p>跳转</p>
    </div>
    <ul>
      <li v-for="(item,index) in themeList">{{item.id}}--{{item.themeName}}</li>
    </ul>
    <label for>{{name | testStr}}</label>
    <pq
      v-if="isShow"
      :key="changeData"
      :themeList="themeList"
      :name="name"
      :changeDate="changeData"
      type="text"
      ref="childCom"
      @changeVal="pc"
    >
      <template #default="{childList}">{{childList.age}}</template>
      <template #[slotName]></template>
    </pq>
    <funCom testVal="hanshu">
      <template #head>123</template>
    </funCom>
    <div class="testImg">
      <img src alt />
    </div>
  </div>
</template>

<script>
import pq from "./panel.vue";
import vue from "vue";
export default {
  name: "HelloWorld",
  components: {
    pq,
    funCom: {
      functional: true,
      props: {
        testVal: {
          type: String
        }
      },
      render: (createElement, cxt) => {
        console.log(cxt);
        let obj = {
          style: {
            border: "1px solid red",
            height: "50px",
            width: "50px"
          },
          attrs: {
            id: "mydiv"
          },
          on: {
            click: e => {
              console.log(cxt.slots().head);
              e.target.innerHTML = cxt.props.testVal;
            }
          },
          domProps: {
            innerHTML: "文字"
          },
          slot: "head"
        };
        return createElement("div", obj);
      }
    }
  },
  data() {
    return {
      slotName: "header",
      msg: "I’m,back",
      name: "abc", //'\u00a9',
      themeList: "123",
      limitNum: 1,
      x: 11,
      isShow: true,
      changeData: 1,
      theme: ""
    };
  },
  filters: {
    testStr: e => {
      let bSix = btoa(e);
      console.log(btoa(e));
      console.log(atob(bSix));
      return e;
    }
  },
  provide() {
    // this.theme = vue.observable({
    //   colorVal: "#cccccc"
    // });
    return {
      getMap:'多个provide1'
    };
  },
  methods: {
    beRouterFun() {
      this.$router.push({
        name: "routerPage"
      });
    },
    getTestData() {
      // console.log(Symbol);
      let a = this.$axios.get("/ping/pingPay", {
        params: {
          id: this.limitNum
        }
      });
      a.then(
        d => {
          console.log(d);
          let data=d.data;
          this.themeList=data.data;
        },
        e => {
          console.log(e);
        }
      );
    },
    returnVal() {
      return "eee";
    },
    submitNum() {
      this.theme = "red";
      this.changeData = 2;
      this.getTestData();
      console.log(this.getTestData.length);
    },
    pc(e) {
      console.log(e);
      //  let obj={
      //    name:'1',
      //    age:18
      //  }
      //  for(let a in obj){
      //    if (obj.hasOwnProperty(a)) {
      //      console.log('has:',obj[a]);
      //    }
      //  }
      // let a= Array.prototype.slice.call('abc');
      //  console.log('显示：',a instanceof Array);
      //  console.log(Object.keys(obj));
      //  // console.dir(e());
    }
  },
  mounted() {
    this.getTestData();
    console.log("调用子组件方法", this.$refs.childCom);
    this.$once("hook:beforeDestroy", e => {
      console.log("执行销毁");
    });
    let FunConstructor = function() {
      console.log("ll2l");
    };

    let fc = new FunConstructor();

    console.log(this);
  },
  created() {},
  activated() {
    console.log("缓存后激活1");
  },
  deactivated() {
    console.log("缓存后停用1");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
