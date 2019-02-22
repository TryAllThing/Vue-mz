<template>
  <div class='films'>
    <banner></banner>
    <div class="city" @click="changCity" v-text="this.$store.state.cityName"></div>
    <changeBar></changeBar>
    <router-view></router-view>
  </div>
</template>
<script>
import banner from '@/components/banner/banner.vue'
import changeBar from '@/components/changeBar.vue'
export default {
  name: 'films',
  data () {
    return {
    }
  },
  components: {
    banner,
    changeBar
  },
  methods: {
    changCity () {
      this.$router.push({path: '/city'})
    },
    getCityName () {
      /* eslint-disable */
      let KCity = new BMap.LocalCity()
      KCity.get((result) => {
        localStorage.setItem('city',result.name)
      })
    }
  },
  created () {
    this.getCityName()
  }
}
</script>
<style lang='scss' scoped>
.city{
  width: 50px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  background: #fff;
  border-radius: 5px;
  opacity: 0.8;
}
</style>
