const Utils = {

    OrderByDesc (data, name) {
        return data.sort(function(a,b) { 
            return new Date(b[name]).getTime() - new Date(a[name]).getTime() 
        })
    },

    GetHourTime (hour) {
        return new Date(hour).getHours() +':'+ new Date(hour).getMinutes()
    },

    GetDate (date) {
        return new Date(date).getUTCDate() +'/'+ new Date(date).getMonth() +'/'+ new Date(date).getFullYear()
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
    })

}

export default Utils