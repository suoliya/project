<template>
  	<div>
  		<headed></headed>
        <div>i am home</div>
        <foot></foot>   
    </div>

</template>

<script>
import headed from '../../components/header/header.vue'
import foot from '../../components/footer/footer.vue'
import {test} from '../../service/getData'
export default {
  components: {
    headed,
    foot
  },
  mounted () {
    this.list()
  },
  methods: {
    list () {
      test().then((res) => { console.log(res) })
    }
  }
}
</script>


