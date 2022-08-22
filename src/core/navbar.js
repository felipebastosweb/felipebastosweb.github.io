import m from "mithril"

export class NavBar {
    constructor(vnode) {}
    view(vnode) {
        return m("nav.navbar", [
            m("a.navbar-brand[href='/']", { onclick: () => window.location.href = "/"}, "Home"),
            m("a.navbar-brand[href='/about']", { onclick: () => window.location.href = "/about" }, "About"),
            m("a.navbar-brand[href='/contact']", { onclick: () => window.location.href = "/contact" }, "Contact"),
            m("a.navbar-brand[href='/faq']", { onclick: () => window.location.href = "/faq" }, "Faq"),
            m("a.navbar-brand[href='/terms']", { onclick: () => window.location.href = "/terms" }, "Terms"),
            m("a.navbar-brand[href='/privacy']", { onclick: () => window.location.href ="/privacy" }, "Privacy"),
            m("a.navbar-brand[href='/help']", { onclick: () => window.location.href="/help" }, "Help"),
            m("a.navbar-brand[href='/documentation']", { onclick: () => window.location.href = "/documentation" }, "Documentation"),
            m()
        ])
    }
}