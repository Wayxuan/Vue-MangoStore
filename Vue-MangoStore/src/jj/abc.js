let getXQ = function(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]._id == id) {
            return data[i]
        }
    }
}