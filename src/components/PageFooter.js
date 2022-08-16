import m from "mithril"

export class NavFooter {
    constructor(vnode) {}
    view(vnode) {
        return m(".row", [
            m("section.col-md-3.col-sm-4.col-xs-6", [
                m("h3", "Sobre o Site"),
                m("nav.nav.flex-column", [
                    m("a.nav-link", {href: "#!/"}, "Início"),
                    m("a.nav-link", {href: "#!/p/about"}, "Sobre"),
                    m("a.nav-link", {href: "#!/p/concact"}, "Contato"),
                ])
            ]),
            m("section.col-md-3.col-sm-4.col-xs-6", [
                m("h3", "Interação"),
                m("nav.nav.flex-column", [
                    m("a.nav-link", {href: "#!/shop"}, "Shop"),
                    m("a.nav-link", {href: "#!/projects"}, "Projects"),
                    m("a.nav-link", {href: "#!/partnership"}, "Partnership"),
                ]),
            ]),
            m("section.col-md-6.col-sm-4.col-xs-12", [
                m("h3", "Conteúdo Profissional"),
                m(".row", [
                    m(".col-md-6.col-xs-12", [
                        m("nav.nav.flex-column", [
                            m("a.nav-link", {href: "https://github.com/felipebastosweb", target: "_blank"}, "Github"),
                            m("a.nav-link", {href: "https://www.linkedin.com/in/felipebastosweb/", target: "_blank"}, "LinkedIn"),
                            m("a.nav-link", {href: "https://medium.com/@felipebastosweb", target: "_blank"}, "Medium"),
                        ])
                    ]),
                    m(".col-md-6.col-xs-12", [
                        m("nav.nav.flex-column", [
                            m("a.nav-link", {href: "https://instagram.com/felipebastosweb", target: "_blank"}, "Instagram"),
                            m("a.nav-link", {href: "https://facebook.com/felipebastosweb", target: "_blank"}, "Facebook"),
                            m("a.nav-link", {href: "https://tiktok.com/@felipebastosweb", target: "_blank"}, "Tiktok"),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    }
}

export class BottomFooter {
    constructor(vnode) {}
    view(vnode) {
        return m(".row", {style: "padding-top: 20px; padding-bottom: 20px"}, [
            m(".col-6", [
                m("p", "2022 - FelipeBastosWeb - Todos os direitos reservados"),
            ]),
            m(".col-6", [
                m("p", [
                    "Desenvolvido por ",
                    m("a", {href:"https://felipebastosweb.github.io", target: "_blank" }, "FelipeBastosWeb" ),
                    " (atualizado em 16/08/2022)"
                ])
            ]),
            m(".col-12", [
                m("address", "De Pirajá, Salvador-BA para todo o mundo."),
            ]),
        ]);
    }
}

export class PageFooter {
    constructor(vnode) {}
    view(vnode) {
        return m("footer.container-fluid", [
            m(NavFooter),
            m(BottomFooter),    
        ])
    }
}