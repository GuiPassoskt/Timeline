const Utils = {

    OrderByDesc (data) {
        return data.sort(function(a,b) { 
            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime() 
        })
    },

    GetHourTime (hour) {
        return new Date(hour).getHours() +':'+ new Date(hour).getMinutes()
    },

    GetDate (date) {
        return new Date(date).getUTCDate() +'/'+ new Date(date).getMonth() +'/'+ new Date(date).getFullYear()
    },

    FormatJSON (data) {
        const object = {
          timestamp: data.timestamp,
          revenue: data.revenue
        };

        for (const customData of data.custom_data) {
          object[customData.key] = customData.value;
        }

        return object;
    },
}

export default Utils