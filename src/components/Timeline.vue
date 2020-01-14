<template>
  <div class="timeline">
    <item v-for="(item , index) in collection" :key="index"/>
  </div>
</template>

<script>
import eventos from '../services/eventos'
import Item from './Item'
export default {
  name: 'Timeline',

  components: {
    Item
  },

  data () {
    return {
      collection: null
    }
  },

  methods: {
    list () {
      eventos.listar().then(res => {
        const { events: evento } = res.data
        
        const order_by_timestamp = evento.sort(function(a,b) { 
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime() 
        })
        
        this.collection = order_by_timestamp
      })
    }
  },

  mounted () {
    this.list()
  }

}
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #dbdfe5;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  
}
</style>
