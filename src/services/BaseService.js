import m from "mithril"

/***
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * **/

export class BaseService {
    // statics
    static Version = "v1/"
    static UrlApi = "https://felipebastosweb-api.herokuapp.com/api/"
    // publics
    result;
    // # privates
    constructor(self) {
        //
        this.name = self.name
        this.result = null
    }

    getUrlApi() {
        return this.UrlApi+this.Version
    }

    get(attrs) {
        m.request({
            method: "GET",
            url: this.getUrlApi() + this.name,
            body: {}
        })
        .then(function (data) {
            this.error = data.error
            this.result = data.result
        })
    }

    post(attrs) {
        
        m.request({
            method: "POST",
            url: this.getUrlApi() + this.name,
            body: attrs.body
        })
        .then(function (data) {
            this.error = data.error
            this.result = data.result
        })
    }

    put(id, attrs) {
        
        m.request({
            method: "PUT",
            url: this.getUrlApi() + this.name + "/" + id,
            body: attrs.body
        })
        .then(function (data) {
            this.error = data.error
            this.result = data.result
        })
    }
}
