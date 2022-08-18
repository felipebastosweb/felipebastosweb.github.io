import m from "mithril"

class ShopService {
    create(self) {
        m.request({
            method: "POST",
            url: "//felipebastosweb-api.herokuapp.com/api/shops",
            body: {
                name : self.name
            },
            //withCredentials: true,
        })
        .then(function(data) {
            //count = parseInt(data.count)
        })
    }
    
    list(user) {
        m.request({
            method: "GET",
            url: "//felipebastosweb-api.herokuapp.com/api/shops",
            body: {
                username: user.username,
                password: user.password
            },
            //withCredentials: true,
        })
        .then(function(data) {
            count = parseInt(data.count)
        })
    }
    
    update(self) {
        m.request({
            method: "PUT",
            url: "//felipebastosweb-api.herokuapp.com/api/shop/id",
            body: {
                id: self.id,
                name : self.name
            },
            //withCredentials: true,
        })
        .then(function(data) {
            //count = parseInt(data.count)
        })
    }
}