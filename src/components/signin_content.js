import m from "mithril"
import { SignInForm } from "../forms/signin_form"


export class SignInContent {
    constructor(self) {}
    view() {
        return m("article.container-fluid", [
            m("section.row", [
                m(".col-12.alert.alert-danger", [
                    m("h2", "Trabalho em Progresso"),
                    m("p", "Esta página está em desenvolvimento. Em breve você poderá fazer login no site."),
                ]),
            ]),
            m("section.row", [
                m(new SignInForm())
            ]) 
        ]
    )
    }
}
