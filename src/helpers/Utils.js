import moment from 'moment'

const Utils = {

    OrderByDesc (data, name) {
        return data.sort((a,b) => { 
          return new Date(a[name]).getTime() - new Date(b[name]).getTime() 
        })
    },

    GetHourTime (hour) {
      return new Date(hour).getHours() +':'+ new Date(hour).getMinutes()
    },

    GetDate (date) {
      return moment(date).format('DD/MM/YYYY')
    },

    FormatJSON: events => events.map((item) => {
      const event = {
        event: item.event,
        timestamp: item.timestamp
      }
  
      if (item.revenue) {
        event.revenue = item.revenue;
      }
  
      for (let i = 0; i < item.custom_data.length; i++) {
        event[item.custom_data[i].key] = item.custom_data[i].value;
      }
  
      return event;
    }),

    filters: {
      FormatCurrency: (money) => {
        return 'R$ ' + money.toFixed(2).replace('.',',')
      }
    }

}

export default Utils