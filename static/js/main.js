
/***
 * oninit, oncreate, onupdate
 * https://mithril.js.org/lifecycle-methods.html
 * **/

/* General Components */

class Card
{
    constructor(vnode)
    {
        //
    }
}

class Form
{
    fields;

    constructor(vnode)
    {
        this.method = vnode.attrs.items['method'];
    }
}

class Page
{
    constructor(vnode)
    {
        //
    }
}

/* Forms */

class UserLoginForm extends Form
{
    contructor(vnode)
    {
        //
    }

    view(vnode)
    {
        return m("form", {'id': "login-form", 'class': ".row"}, [
            m(".mb-3", [
                m("label", {'class': "form-label"}, "Username"),
                m("input", {'type': "text", 'placeHolder': "Username", 'class': "form-input"})
            ]),
            m(".mb-3", [
                m("label", {'class': "form-label"}, "Password"),
                m("input", {'type': "password", 'placeHolder': "Password", 'class': "form-input"})
            ]),
            m(".mb-3", [
                m("label", {'class': "btn.btn-success"}, "Login"),
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
        return m("form", {'id': "register-form", 'class': ".row"}, [
            m(".mb-3", [
                m("label", {'class': "form-label"}, "Username"),
                m("input", {'type': "text", 'placeHolder': "Username", 'class': "form-input"})
            ]),
            m(".mb-3", [
                m("label", {'class': "form-label"}, "Password"),
                m("input", {'type': "password", 'placeHolder': "Your Password", 'class': "form-input"})
            ]),
            m(".mb-3", [
                m("label", {'class': "form-label"}, "E-mail"),
                m("input", {'type': "text", 'placeHolder': "Your E-mail", 'class': "form-input"})
            ]),
            m(".mb-3", [
                m("label", {'class': "form-label"}, "Telephone"),
                m("input", {'type': "text", 'placeHolder': "Telephone", 'class': "form-input"})
            ]),
            m(".mb-3", [
                m("label", {'class': "btn.btn-success"}, "Register"),
            ]),
        ]);
    }
}

/* Pages */

class WelcomePage
{
    contructor(vnode)
    {
        //
    }

    view(vnode)
    {
        return m("page", [
            m("header", {'class': "container-fluid"}, []),
            m("article", {'class': "container-fluid"}, [
                m(UserRegisterForm),
                m(UserLoginForm)
            ]),
            m("footer", {'class': "container-fluid"}, []),
        ]);
    }
}


class HomePage
{
    contructor(vnode)
    {
        //
    }

    view(vnode)
    {
        return m("page", [
            m("header", {'class': "container-fluid"}, []),
            m("article", {'class': "container-fluid"}, []),
            m("footer", {'class': "container-fluid"}, []),
        ]);
    }
}






m.route(root, "/", {
    "/": WelcomePage,
    "/home": HomePage,
})