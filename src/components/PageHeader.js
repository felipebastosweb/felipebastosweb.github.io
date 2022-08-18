import m from "mithril"

/***
 * https://refactoring.guru/pt-br/design-patterns/command
 ***/

export class NavPage {
    constructor(vnode) {}
    view(vnode) {
        return m("section.row", [
            m("nav.nav", [
                m("a.nav-link", {href: "#!/"}, "Início"),
                m("a.nav-link", {href: "#!/shop"}, "Loja"),
                m("a.nav-link", {href: "#!/projects"}, "Projetos"),
                m("a.nav-link", {href: "#!/partnership"}, "Parcerias"),
                m("a.nav-link", {href: "#!/p/about"}, "Sobre"),
                m("a.nav-link", {href: "#!/p/contact"}, "Contato"),
                m("a.nav-link", {href: "#!/cart"}, [
                    m("i.bi.bi-cart"),
                    m("span.badge.bg-danger.rounded-pill.position-absolute.top-0.border.border-light", "0")
                ]),
            ]),
        ]);
    }
}

export class Jumbotron {
    constructor(vnode) {}
    view(vnode) {
        return m("section.row", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
            m(".col-12", [
                m("h1.text-center", "FelipeBastosWeb"), [
                    m("p.lead.text-center", "Analista, Desenvolvedor e Projetista de Sistemas e Aplicativos")
                ]
            ]),
        ]);
    }
}

export class PageHeader {
    constructor(vnode) {}
    view(vnode) {
        return m("header.container-fluid", [
            m(NavPage),
            m(Jumbotron),
        ]);
    }
}