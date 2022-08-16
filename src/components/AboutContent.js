import m from "mithril"

class AboutText {
    constructor(vnode) {}
    view(vnode) {
        return [
            m("h1", "Sobre mim"),
            m("p","Como Analista de Sistemas, busco escolher as tecnologias e ferramentas que tragam melhor Retorno do Investimento (ROI) para o cliente."),
            m("p", "Como Especialista em Projetos, busco motivar as equipes a realizar o melhor trabalho possível, buscando atender as reais necessidades do cliente. Acho imprescindível ouvir atentamente o cliente e entregar o valor de negócio que ele busca."),
            m("h2", "Formação Acadêmica"),
            m("p", "Bacharel em Análise e Desenvolvimento de Sistemas"),
            m("p", "MBA em Gerenciamento de Projetos"),
            m("p", "Como Ensinar na Pandemia - Curso de Extensão Universitária"),
            m("h2", "Tecnologias"),
            m("h3", "Linguagens de Programação"),
            m("p", "Java e Groovy"),
            m("p", "PHP"),
            m("p", "Python (Flask, Quart, Django)"),
            m("p", "JavaScript/ECMAScript 2015 (NodeJS, Mithril)"),
            m("p", "Dart (Flutter)"),
            m("h3", "Bancos de Dados"),
            m("p", "MySQL e MariaDB"),
            m("p", "Oracle"),
            m("p", "ArangoDB"),
            m("h3", "Modelagem de Sistemas"),
            m("p", "MySQL Workbench"),
            m("p", "Enterprise Architect"),
            m("p", "Umbrello"),
        ]
    }
}


export class AboutContent {
    constructor(vnode) {}
    view(vnode) {
        return m("article.container-fluid", [
            m("section.row", m(AboutText))
        ]);
    }
}