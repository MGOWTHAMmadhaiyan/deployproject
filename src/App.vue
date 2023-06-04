<template>
  <el-row class="bg">
  <img src="@/assets/wallpaperbetter.jpg" alt="">

  <el-row id="app">
    <Calculation :parentName="name">
    </Calculation>
  </el-row>
</el-row>
</template>

<script>
import Calculation from './calculation.vue'

export default {
  name: 'App',
  components: {
    Calculation
  },
  data() {
    console.log('dat')
    return {
      name: 'PARENT'

    }
  },
  // computed:{
  //   count:function(){
  //     return this.name= 'tamil computed'
  //   }
  // },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('create')
  },
  beforeMount() {
    console.log('mounted called')
  },
  mount() {
    console.log('mounted called')
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('update')
  },
  beforeDestroy() {
    console.log('before destroy')
  },
  destroyed() {
    console.log('destroy')
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bg img {

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;}
</style>
