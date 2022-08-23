import m from "mithril"
import { InputCheckbox } from "../core/form"
import {Form, FormLabel, InputText, InputPassword} from "../core/form"

class InputLabelUsername {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
                m(new FormLabel({body: "Username or E-mail"})),
                m(new InputText({
                    name: "username",
                    placeholder: "Seu Apelido ou E-mail"
                }))
            ]
        )
    }
}


class InputLabelPassword {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
                m(new FormLabel({body: "Password"})),
                m(new InputPassword({
                    name: "password",
                    placeholder: "Sua Senha"
                }))
            ]
        )
    }
}

export class InputLabelCheckbox {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
            m(new FormLabel({body: "Keep active"})),
            m(new InputCheckbox({
                name: "keep",
                checked: false,
            }))
        ])
    }
}


class FormButtonGroup {
    constructor(self) {}
    view() {
        return m(".form-group.col-12", [
            m("button[type=button].btn.btn-outline-secondary.col-6",
                "Cancelar"
            ),
            m("button[type=submit].btn.btn-success.col-6",
                "Enviar"
            )
        ])
    }
}


export class SignInForm extends Form {
    constructor(self) {
        this.body = [
            m(new InputLabelUsername()),
            m(new InputLabelPassword()),
            m(new InputLabelCheckbox()),
            m(".form-group", m("p", "")),
            // buttons
            m(FormButtonGroup)
        ]
    }
    onSubmit() {
        if (vnode.attrs.email) {
            // TODO: change request to CartService
            m.request({
                method: "POST",
                url: "/api/cart",
                data: {
                    email: vnode.attrs.email,
                    phone: vnode.attrs.phone,
                    subject: vnode.attrs.subject,
                    message: vnode.attrs.message,
                }
            })
        }
    }

    view() {
        return m("form#signin.row", [
            m(".form-group", m("h1", "Entrar em Contato")),
            m(this.body)
        ])
    }
}
