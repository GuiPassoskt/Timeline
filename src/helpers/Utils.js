
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
     
      let date_convert = new Date(date)
      
      let day = date_convert.getUTCDate()
      let day_format = day.toString().length === 1 ? '0'+ day : day

      let month = date_convert.getMonth()
      let month_format = month.toString().length === 1 ? '0'+ month : month

      return day_format +'/'+ month_format +'/'+ date_convert.getFullYear()
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