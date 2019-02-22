<template>
  <div class='Ncity'>
    <div class="search">
      <form action="/">
        <van-search
          v-model="inputV"
          placeholder="请输入搜索关键词"
        />
      </form>
    </div>
    <div class="buttom" v-if="flag">
      <mt-index-list>
        <mt-index-section :index="item.py" v-for="(item,index) in cityList" :key="index">
          <div class="c-list"  v-for="(item,index) in item.list" :key="index" >
            <div class="c-xlist"  @click="changCity(item.name)">
              {{item.name}}
            </div>
          </div>
        </mt-index-section>
      </mt-index-list>
    </div>
    <div class="buttom" v-if="!flag">
      <ul>
        <li class="searchCity" v-for="(item,index) in changCityList" :key="index"  @click="changCity(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Search } from 'vant'
import Vue from 'vue'
import {IndexList, IndexSection, Cell} from 'mint-ui'
Vue.use(Search)
export default {
  data () {
    return {
      cityList: '',
      flag: true,
      inputV: '',
      pastCityList: ''
    }
  },
  components: {
    [IndexList.name]: IndexList,
    [IndexSection.name]: IndexSection,
    [Cell.name]: Cell
  },
  computed: {
    changCityList () {
      return this.pastCityList.filter((item) => {
        return item.name.match(this.inputV)
      })
    }
  },
  methods: {
    changCity (city) {
      this.$store.commit('changCity', city)
      localStorage.setItem('city', JSON.stringify(city))
      this.$router.push({path: 'films/nowPalay'})
    },
    createComparisonFunction (propertyName) {
      return function (object1, object2) {
        var value1 = object1[propertyName]
        var value2 = object2[propertyName]
        if (value1 < value2) {
          return -1
        } else if (value1 > value2) {
          return 1
        } else {
          return 0
        }
      }
    },
    getcity () {
      axios.get('/static/city.json').then(result => {
        let data = result.data
        let control = {}
        let newArr = []
        let i = 0
        this.pastCityList = data
        data.forEach(element => {
          let py = element.pinyin.substring(0, 1).toUpperCase()
          if (control[py]) {
            newArr[control[py] - 1].list.push(element)
          } else {
            control[py] = ++i
            newArr.push({
              py: py,
              list: [element]
            })
          }
        })
        newArr.sort(this.createComparisonFunction('py'))
        this.cityList = newArr
      })
    }
  },
  created () {
    this.getcity()
  },
  watch: {
    inputV (curVal, oldVal) {
      if (curVal !== '') {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }
}
</script>
<style lang='scss'>
.mint-cell{
  display: inline-block;
  background: #fAfAfA;
  width: calc((100vw - 33px)/3);
}
.mint-cell-title{
  text-align: center;
  background: #fff;
  border-radius: 5px;
  height: 32px;
  overflow: hidden;
}
.mint-indexsection{
  background: #fAfAfA;
}
.mint-cell-wrapper {
    background: #fAfAfA;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 0 7.5px;
    font-size: 14px;
    color: #191a1b;
    overflow: hidden;
}
.mint-indexsection-index{
  font-size: 12px;
}
.searchCity{
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding: 3px 10px;
}
.c-list{
    display: inline-block;
    width: calc((100vw - 33px)/3);
    text-align: center;
    padding-bottom: 15px;
  .c-xlist{
    height: 30px;
    background-color: #f4f4f4;
    line-height: 30px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 7.5px;
    font-size: 14px;
    color: #191a1b;
    overflow: hidden;
  }
}
</style>
