<template>
    <div class="container right">
      <div class="content">
        <div class="header">
            <div class="info">
                <i class="icon calendar"></i> 
                <span>{{ product.date }}</span>
            </div>
            <div class="info">
              <i class="icon clock"></i>  
              <span>{{ product.hour }}</span>
            </div>
            <div class="info">
              <i class="icon place"></i>  
              <span>{{product.store}}</span>
            </div>
            <div class="info">
              <i class="icon money"></i>  
              <span>{{ produto.revenue | FormatCurrency }}</span>
            </div>
        </div>
        <div class="container-table">
            <table class="body">
                <tr>
                    <th class="start">Produto</th>
                    <th class="end">Preço</th>
                </tr>
                <tr v-for="(p, index) in produto.products" :key="index" class="border_top">
                    <td class="start">
                        {{p.name}}
                    </td>
                    <td class="end">
                        {{p.price | FormatCurrency }}
                    </td>
                </tr>
            </table>
        </div>
      </div>
    </div>
</template>

<script>
    import check from '../assets/img/icons/check.svg'
    import Utils from '../helpers/Utils'
    export default {
        name: 'Item',
        mixins: [ Utils ],
        data () {
          return {
            product: {
              store: null,
              hour: null,
              date: null
            }
          }
        },

        props: {
          produto: {
            type: Object,
            default: null
          }
        },

        mounted () {
          const produto = this.produto
          this.product.store = produto.store_name
          this.product.hour = Utils.GetHourTime(produto.timestamp)
          this.product.date = Utils.GetDate(produto.timestamp)
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/Item.scss';
</style>