import m from "mithril"

export class PartnershipContent {
    constructor(vnode) {}
    view(vnode) {
        return m("article.container-fluid", [
            m("section.row", [
                m(".col-12.alert.alert-danger", [
                    m("h2", "Trabalho em Progresso"),
                    m("p", "Esta página está em desenvolvimento. Em breve você poderá fazer parcerias comigo para desenvolvimento de software/aplicativos."),
                ]),
            ]),
            m("section.row", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
                m(".col-xs-12.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "Programmer"),
                            m("p.card-text", [
                                "Linguagens e Frameworks que estudei e/ou utilizei:",
                                m("ul", [
                                    m("strong", "Backend"),
                                    m("ul", [
                                        m("li", "C# .Net"),
                                        m("li", "NodeJS"),
                                        m("li", "Dart"),
                                        m("li", "Python 3"),
                                        m("li", "PHP 4/5"),
                                        m("li", "Object Pascal (Delphi e Lazarus)"),
                                    ]),
                                ]),
                                m("ul", [
                                    m("strong", "Frontend"),
                                    m("ul", [
                                        m("li", "Html + CSS + Javascript"),
                                        m("li", "MithrilJS"),
                                        m("li", "jQuery")
                                    ]),
                                ]),
                                m("ul", [
                                    m("strong", "Mobile and MultiPlataform"),
                                    m("ul", [
                                        m("li", "MAUI Blazor .Net"),
                                        m("li", "Flutter"),
                                        m("li", "Ionic"),
                                        m("li", "Angular"),
                                    ]),
                                ]),
                            ]),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", "Como Developer"),
                            ]),
                        ]),
                    ]),
                ]),
                m(".col-xs-12.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "Fullstack Dev."),
                            m("p.card-text", [
                                "Ferramentas e técnicas que estudei e usei:",
                                m("ul", [
                                    m("strong", "DevOps"),
                                    m("ul", [
                                        m("li", "Docker"),
                                        m("li", "Portainer"),
                                        m("li", "VPS")
                                    ]),
                                    m("strong", "Cloud"),
                                    m("ul", [
                                        m("li", "AWS EC2"),
                                        m("li", "AWS Router"),
                                        m("li", "Heroku")
                                    ]),
                                    m("strong", "Database System Manager"),
                                    m("ul", [
                                        m("li", "ArangoDB"),
                                        m("li", "MySQL / MariaDB"),
                                        m("li", "Oracle 10")
                                    ]),
                                    m("strong", "IDEs"),
                                    m("ul", [
                                        m("li", "Visual Studio"),
                                        m("li", "Android Studio"),
                                        m("li", "Netbeans"),
                                        m("li", "Eclipse"),
                                    ]),
                                ]),
                            ]),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", "Como Fullstack"),
                            ]),
                        ]),
                    ]),
                ]),
                m(".col-xs-12.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "System Analyst"),
                            m("p.card-text", [
                                "Ferramentas e técnicas que estudei e usei:",
                                m("ul", [
                                    m("li", "Enterprise Architect (Sparx Systems)"),
                                    m("li", "Astah"),
                                    m("li", "Umbrello"),
                                    m("li", "UML 2.0"),
                                    m("li", "Org. Charts")
                                ]),
                            ]),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", "Como Analista"),
                            ]),
                        ]),
                    ]),
                ]),
                m(".col-xs-12.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
                    m(".card.border-0.shadow-sm", [
                        m(".card-body", [
                            m("h3.card-title", "Project Manager"),
                            m("p.card-text", [
                                "Metodologias e Ferramentas que estudei e usei:",
                                m("ul", [
                                    m("li", "Project Manager - MBA"),
                                    m("li", "PMBoK"),
                                    m("li", "Scrum"),
                                    m("li", "MS Project"),
                                    m("li", "PERT & WBS Charts"),
                                ]),
                            ]),
                            m(".col-10.d-grid.gap-2.mx-auto", [
                                m("a.btn.btn-success.shadow-sm", "Como Projetista"),
                            ]),
                        ]),
                    ]),
                ]),
            ])
        ])
    }
}
