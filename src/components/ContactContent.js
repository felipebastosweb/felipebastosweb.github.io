import m from "mithril"

import {ContactForm} from "../forms/ContactForm"

export class ContactContent {
    constructor(vnode) {}
    view(vnode) {
        return m("article.container-fluid", [
                m("section.row", [
                    m(".col-12.alert.alert-danger", [
                        m("h2", "Trabalho em Progresso"),
                        m("p", "Esta página está em desenvolvimento. Em breve você poderá comprar pacotes de software/aplicativos."),
                    ]),
                ]),
                m("section.row", [
                    m(ContactForm)
                ]) 
            ]
        )
    }
}
