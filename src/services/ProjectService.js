import m from "mithril"

export class ProjectService {
    constructor(self) {
        super(self)
    }
    
    get(attrs) {
    }
    find(attrs) {
        m.request({
            method: "GET",
            url: "",
        })
        .then(function (result) {})
    }
    create(attrs) {
        m.request({
            method: "POST",
            url: "",
        })
        .then(function (data) {});
    }
    update(attrs) {
        m.request({
            method: "PUT",
            url: "",
        })
        .then(function (data) {});
    }
    delete(attrs) {
        m.request({
            method: "DELETE",
            url: "",
        })
        .then(function (data) {});
    }
}

