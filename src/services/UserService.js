import m from "mithril"

class UserService {
    register(user) {
        m.request({
            method: "POST",
            url: "//felipebastosweb-api.herokuapp.com/api/register",
            body: {
                username: user.username,
                password: user.password,
                email: user.email,
                telephone: user.telephone,
            },
            //withCredentials: true,
        })
        .then(function(data) {
            count = parseInt(data.count)
        })
    }
    
    login(user) {
        m.request({
            method: "POST",
            url: "//felipebastosweb-api.herokuapp.com/api/login",
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
}