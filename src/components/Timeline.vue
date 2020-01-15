<template>
  <div class="timeline">
    <item v-for="(item , index) in collection" :key="index" :produto.sync="item"/>
  </div>
</template>

<script>
import eventos from '../services/eventos'
import Item from './Item'
import Utils from '../helpers/Utils'
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

        const normalizeEvent = Utils.FormatJSON(evento)
        
        const comprou = normalizeEvent.filter(item => item.event === 'comprou')

        const comprou_produto = normalizeEvent.filter(item => item.event === 'comprou-produto')

        const timeline = comprou.map((item) => {
          const produtos = comprou_produto.filter(itemp => itemp.transaction_id === item.transaction_id)

          const items = {
            timestamp: item.timestamp,
            revenue: item.revenue,
            transaction_id: item.transaction_id,
            store_name: item.store_name
          };

          items.products = produtos.map((p) => {
            return {
              name: p.product_name,
              price: p.product_price
            }
          });

          return items

        })

        this.collection = Utils.OrderByDesc(timeline, 'timestamp')

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
