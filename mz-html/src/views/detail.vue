<template>
  <div class="detail">
    <div class="shopdetail" v-for='(item,index) in detail' :key='index'>
      <div class="img">
        <img :src=item.poster alt="">
      </div>
      <div class="film-detail">
        <h1>{{item.name}}</h1>
        <p>{{item.category}}</p>
        <p>{{item.premiereAt}}</p>
        <p><span>{{item.nation}}</span>|<span>{{item.runtime}}分钟</span></p>
        <p>{{item.synopsis}}</p>
      </div>
    </div>
    <div class="buy">
      <router-link tag="div" :to="{name:'buy'}" class="gobuy" >选座买票</router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      filmid: '',
      detail: '',
      flag: false
    }
  },
  components: {
  },
  methods: {
    getInfo () {
      axios
        .get('http://localhost:3000/api/film/detail', {
          params: {
            filmid: this.filmid
          }
        })
        .then(res => {
          let result = res.data
          if (result.code === 1) {
            alert('网络异常')
          } else {
            this.detail = result.msg
          }
        })
        .catch(err => {
          throw err
        })
    },
    goPiao () {
      this.flag = !this.flag
    }
  },
  computed: {
  },
  created () {
    this.filmid = this.$route.params.id
    this.getInfo()
  }
}
</script>
<style lang="scss" scoped>
.detail{
  display: flex;
  height: 100%;
  flex-direction: column;
  .shopdetail{
    overflow-y:auto;
    flex: 1;
    .img{
      height: 180px;
      width: 100%;
      background: rgb(116, 159, 199);
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .film-detail{
      height: 180px;
      padding: 15px;
      padding-top: 12px;
      background-color: #fff;
      h1{
        font-size: 16px;
      }
      p{
        font-size: 13px;
        color: #797d82;
        margin-top: 10px;
      }
    }
  }
  .buy{
    text-align: center;
    color: #fff;
    font-size: 16px;
    .gobuy{
      background-color: #ff5f16;
      line-height: 49px;
      height: 49px;
    }
  }
}
</style>
