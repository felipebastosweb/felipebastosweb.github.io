import m from "mithril"
import { InputPhone } from "../core/form"
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

class InputLabelEmail {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
                m(new FormLabel({body: "E-mail"})),
                m(new InputEmail({
                    name: "email",
                    placeholder: "Seu E-mail"
                }))
            ]
        )
    }
}

class InputLabelCelular {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
                m(new FormLabel({body: "Telephone"})),
                m(new InputPhone({
                    name: "celular",
                    placeholder: "Seu Celular"
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

class InputLabelRepeatPassword {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
                m(new FormLabel({body: "Repeat Password"})),
                m(new InputPassword({
                    name: "password",
                    placeholder: "Repita sua Senha"
                }))
            ]
        )
    }
}

/***
 * Change name class to Accept Terms and Privacy Policy
 * **/
export class InputLabelCheckbox {
    constructor(self) {}
    view() {
        return m(".form-group.col-xs-12.col-md-6", [
            m(new FormLabel({body: "You accept Use Terms and Privacy Policy"})),
            m(new InputCheckbox({
                name: "accept",
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
                "Cancel"
            ),
            m("button[type=submit].btn.btn-success.col-6",
                "Register Now"
            )
        ])
    }
}


export class SignUpForm extends Form {
    constructor(self) {
        this.body = [
            m(new InputLabelUsername()),
            m(new InputLabelEmail()),
            m(new InputLabelCelular()),
            m(new InputLabelPassword()),
            m(new InputLabelRepeatPassword()),
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
                url: "/api/signup",
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
