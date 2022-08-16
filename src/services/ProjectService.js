import m from "mithril"

export class ProjectService {
    constructor(vnode) {}
    get(vnode) {
        m.request({
            method: "GET",
            url: "",
        })
        .then(function (result) {})
    }
    find(vnode) {
        m.request({
            method: "GET",
            url: "",
        })
        .then(function (result) {})
    }
    create(vnode) {
        m.request({
            method: "POST",
            url: "",
        })
        .then(function (data) {});
    }
    update(vnode) {
        m.request({
            method: "PUT",
            url: "",
        })
        .then(function (data) {});
    }
    delete(vnode) {
        m.request({
            method: "DELETE",
            url: "",
        })
        .then(function (data) {});
    }
}

