
import {FormLabel, FormInput, FormTextarea, FormSelectOptions} from "./Form"

class Form
{
    constructor(vnode)
    {
        this.method = vnode.attrs.method;
        this.action = vnode.attrs.action;
    }
}

class ContactForm {
    constructor(vnode) {}
    onSubmit(vnode) {
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

    view(vnode) {
        return m("form#contact-form.row", [
            m(".form-group", m("h1", "Entrar em Contato")),
            m(".form-group.col-xs-12.col-md-6", [
                m("label.form-label", "E-mail"),
                m("input", {
                    name: "email",
                    type: "email",
                    placeholder: "Seu E-mail"
                })
            ]),
            m(".form-group.col-xs-12.col-md-6", [
                m('label.form-label', "Telefone"),
                m("input",  {
                    name: "phone",
                    type: "tel",
                    placeholder: "Seu Telefone"
                })
            ]),
            m(".form-group.col-xs-12.col-md-6", [
                m('label.form-label', "Assunto"),
                m("input",  {
                    name: "subject",
                    type: "text",
                    placeholder: "Assunto"
                })
            ]),
            m(".form-group.col-12", [
                m("label.form-label", "Conteúdo"),
                m("textarea.form-control", {
                    name: "message",
                    rows: "5",
                    placeholder: "Sua mensagem aqui"
                })
            ]),
            m(".form-group", m("p", "")),
            // buttons
            m(".form-group.col-12", [
                m(
                    "button[type=button].btn.btn-outline-secondary.col-6",
                    "Cancelar"
                ),
                m(
                    "button[type=submit].btn.btn-success.col-6",
                    "Enviar"
                )
            ])
        ])
    }
}




class UserLoginForm extends Form
{
    contructor(vnode)
    {
        //super({method: 'post'});
    }

    view(vnode)
    {
        return m("form", {id: "login-form", class: "row", mehod: this.method}, [
            m(".mb-3.form-floating", [
                m("input", {type: "text", placeHolder: "Username", class: "form-control"}),
                m("label", {class: "form-label"}, "Username"),
            ]),
            m(".mb-3.form-floating", [
                m("input", {type: "password", placeHolder: "Password", class: "form-control"}),
                m("label", {class: "form-label"}, "Password"),
            ]),
            m(".mb-3", [
                m("button", {class: "btn btn-success"}, "Login"),
            ]),
        ]);
    }
}

class UserRegisterForm
{
    contructor(vnode)
    {
        //
    }

    view(vnode)
    {
        return m("form", {id: "register-form", class: "row"}, [
            m(".mb-3.form-floating", [
                m("label", {class: "form-label"}, "Username"),
                m("input", {type: "text", placeHolder: "Username", class: "form-control"})
            ]),
            m(".mb-3.form-floating", [
                m("label", {class: "form-label"}, "Password"),
                m("input", {type: "password", placeHolder: "Your Password", class: "form-control"})
            ]),
            m(".mb-3.form-floating", [
                m("label", {class: "form-label"}, "E-mail"),
                m("input", {type: "text", placeHolder: "Your E-mail", class: "form-control"})
            ]),
            m(".mb-3.form-floating", [
                m("label", {class: "form-label"}, "Telephone"),
                m("input", {type: "text", placeHolder: "Telephone", class: "form-control"})
            ]),
            m(".mb-3", [
                m("button", {class: "btn btn-success"}, "Register"),
            ]),
        ]);
    }
}


class ContactEmail {
    constructor(vnode) {}
    view(vnode) {
        return m(".form-group.col-xs-12.col-md-6", [
                m(FormLabel, {body: "E-mail"}),
                m(
                    FormInput, {
                        name: "email",
                        type: "email",
                        placeholder: "Seu E-mail"
                    }
                )
            ]
        )
    }
}

class ContactPhone {
    constructor(vnode) {}
    view(vnode) {
        return m(
            ".form-group.col-xs-12.col-md-6", 
            [
                m(FormLabel, {body: "Telefone"}),
                m(
                    FormInput, {
                        name: "phone",
                        type: "tel",
                        placeholder: "Seu Telefone"
                    }
                )
            ]
        )
    }
}

class ContactSubject {
    constructor() {}
    view(vnode) {
        return m(
            ".form-group.col-12",
            [
                m(FormLabel, {body: "Assunto"}),
                m(
                    FormInput, {
                        name: "subject",
                        type: "text",
                        placeholder: "Assunto"
                    }
                )
            ]
        )
    }
}

class ContactMessage {
    constructor(vnode) {}
    view(vnode) {
        return m(
            ".form-group.col-12",
            [
                m(FormLabel, {body: "Conteúdo"}),
                m(FormTextarea, {
                    name: "message",
                    //cols: "10",
                    rows: "5",
                    placeholder: "Sua mensagem aqui"
                })
            ]
        )
    }
}

class FormButtonGroup {
    constructor(vnode) {}
    view(vnode) {
        return m(
            ".form-group.col-12",
            [
                m(
                    "button[type=button].btn.btn-outline-secondary.col-6",
                    "Cancelar"
                ),
                m(
                    "button[type=submit].btn.btn-success.col-6",
                    "Enviar"
                )
            ]
        )
    }
}

export class ContactForm {
    constructor(vnode) {}
    onSubmit(vnode) {
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

    view(vnode) {
        return m("form#contact-form.row", [
            m(".form-group", m("h1", "Entrar em Contato")),
                m(ContactEmail),
                m(ContactPhone),
                m(ContactSubject),
                m(ContactMessage),
                m(".form-group", m("p", "")),
                // buttons
                m(FormButtonGroup)
        ])
    }
}
