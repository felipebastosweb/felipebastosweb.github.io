import m from "mithril"

export class HomeContent {
    constructor(vnode) {}
    view(vnode) {
        return m("article.container-fluid", [
            m("section.row", {style: "padding-top: 30px; padding-bottom: 30px;"}, [
                m(".col-md-4.col-xs-12", [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "Shop"),
                            m("p.card-text", "Você encontra Produtos de Projetos anteriores para comprar"),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", {href: "#!/shop"}, "Iniciar Compras"),
                            ]),
                        ]),
                    ]),
                ]),
                m(".col-md-4.col-xs-12", [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "Projects"),
                            m("p.card-text", "Veja como definir um Projetos sob medida para sua necessidade"),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", {href: "#!/projects"}, "Planejar Agora"),
                            ]),
                        ]),
                    ]),
                ]),
                m(".col-md-4.col-xs-12", [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "Partnership"),
                            m("p.card-text", "Veja como me contratar como um colaborador para trabalho temporário"),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", {href: "#!/partnership"}, "Ver Competências"),
                            ]),
                        ]),
                    ]),
                ]),
            ])
        ])
    }
}
