/* Start Game Driven Design */

class Actor
{
    username;
    constructor(){}
}

class Player extends Actor
{
    constructor(vnode)
    {
        username = vnode.attrs.username;
    }
}

class Level
{
    sceneActive;
    sceneList = {};

    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
    moveToScene(index)
    {
        this.sceneActive = index;
    }
}

class Scene
{
    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
}

/* End Game Driven Design */

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
    constructor(vnode)
    {
        this.method = vnode.attrs.method;
        this.action = vnode.attrs.action;
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
        //super({method: 'post'});
    }

    view(vnode)
    {
        return m("form", {id: "login-form", class: "row", mehod: this.method}, [
            m(".mb-3", [
                m("label", {class: "form-label"}, "Username"),
                m("input", {type: "text", placeHolder: "Username", class: "form-control"})
            ]),
            m(".mb-3", [
                m("label", {class: "form-label"}, "Password"),
                m("input", {type: "password", placeHolder: "Password", class: "form-control"})
            ]),
            m(".mb-3", [
                m("label", {class: "btn btn-success"}, "Login"),
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
            m(".mb-3", [
                m("label", {class: "form-label"}, "Username"),
                m("input", {type: "text", placeHolder: "Username", class: "form-control"})
            ]),
            m(".mb-3", [
                m("label", {class: "form-label"}, "Password"),
                m("input", {type: "password", placeHolder: "Your Password", class: "form-control"})
            ]),
            m(".mb-3", [
                m("label", {class: "form-label"}, "E-mail"),
                m("input", {type: "text", placeHolder: "Your E-mail", class: "form-control"})
            ]),
            m(".mb-3", [
                m("label", {class: "form-label"}, "Telephone"),
                m("input", {type: "text", placeHolder: "Telephone", class: "form-control"})
            ]),
            m(".mb-3", [
                m("label", {class: "btn btn-success"}, "Register"),
            ]),
        ]);
    }
}

/* Level Components */

class LandingNavHeader
{
    constructor(vnode) {
        this.actor = vnode.attrs.actor;
    }
    view(vnode) {
        return m("section.row", [
            m("nav.nav", [
                m("a.nav-link", {href: "#!/"}, "Início"),
                //m("a.nav-link", {href: "#!/shop"}, "Loja"),
                //m("a.nav-link", {href: "#!/projects"}, "Projetos"),
                //m("a.nav-link", {href: "#!/partnership"}, "Parcerias"),
                //m("a.nav-link", {href: "#!/p/about"}, "Sobre"),
                //m("a.nav-link", {href: "#!/p/contact"}, "Contato"),
                /*
                m("a.nav-link", {href: "#!/cart"}, [
                    m("i.bi.bi-cart"),
                    m("span.badge.bg-danger.rounded-pill.position-absolute.top-0.border.border-light", "0")
                ]),
                */
            ]),
        ]);
    }
}

class LandingHeroHeader
{
    constructor(vnode){}
    view(vnode)
    {
        return m("article", {class: "px-4 py-5 my-5 text-center"}, [
            //<img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            m("h1", {class: "display-5 fw-bold text-body-emphasis"}, [
                m("span", {style: "background-color: #338FFF"}, "FelipeBastos"),
                m("span", "Web")
            ]),
            m("div", {class: "col-lg-6 mx-auto"}, [
                m("p", {class: "lead mb-4"}, "Programador e Analista de Sistemas")
            ])
            /*
            <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
            */
        ])
    }
}

class JumbotronHeader
{
    constructor(vnode) {}
    view(vnode) {
        return m("section.row", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
            m(".col-12", [
                m("h1.text-center", "FelipeBastosWeb"), [
                    m("p.lead.text-center", "Analista, Desenvolvedor e Projetista de Sistemas e Aplicativos")
                ]
            ]),
        ]);
    }
}


class NavFooter {
    constructor(vnode) {}
    view(vnode) {
        return m(".row", [
            m("section.col-md-3.col-sm-4.col-xs-6", [
                m("h3", "Sobre o Site"),
                m("nav.nav.flex-column", [
                    m("a.nav-link", {href: "#!/"}, "Início"),
                    //m("a.nav-link", {href: "#!/p/about"}, "Sobre"),
                    //m("a.nav-link", {href: "#!/p/concact"}, "Contato"),
                ])
            ]),
            m("section.col-md-3.col-sm-4.col-xs-6", [
                m("h3", "Interação"),
                m("nav.nav.flex-column", [
                    //m("a.nav-link", {href: "#!/shop"}, "Shop"),
                    //m("a.nav-link", {href: "#!/projects"}, "Projects"),
                    //m("a.nav-link", {href: "#!/partnership"}, "Partnership"),
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

class BottomFooter {
    constructor(vnode) {}
    view(vnode) {
        return m(".row", {style: "padding-top: 20px; padding-bottom: 20px"}, [
            m(".col-6", [
                m("p", "2023 - FelipeBastosWeb - Todos os direitos reservados"),
            ]),
            m(".col-6", [
                m("p", [
                    "Desenvolvido por ",
                    m("a", {href:"https://felipebastosweb.github.io", target: "_blank" }, "FelipeBastosWeb" ),
                    " (atualizado em 25/05/2023)"
                ])
            ]),
            m(".col-12", [
                m("address", "Rua Vista do Mar, 64 - apto 004, Pirajá, Salvador-BA, Brasil."),
            ]),
        ]);
    }
}


/* Pages */

class LandingLevel extends Level
{
    contructor(vnode){
        //super({actor: vnode.attrs.actor});
    }

    view(vnode)
    {
        return m("page", [
            m("header", {class: "container-fluid"}, [
                m(LandingNavHeader, {actor: vnode.attrs.actor}),
                m(LandingHeroHeader)
            ]),
            m("article", {class: "container-fluid"}, [
                m(UserRegisterForm),
                m(UserLoginForm)
            ]),
            m("footer", {class: "container-fluid"}, [
                m(NavFooter),
                m(BottomFooter)
            ]),
        ]);
    }
}


class HomeLevel extends Level
{
    contructor(vnode)
    {
        this.actor = vnode.attrs.actor;
    }

    view(vnode)
    {
        return m("page", [
            m("header", {class: "container-fluid"}, []),
            m("article", {class: "container-fluid"}, []),
            m("footer", {class: "container-fluid"}, []),
        ]);
    }
}




/* main execute */



// Game Design https://agilebygamedesign.github.io/
class Application // Game
{
    

    constructor(vnode)
    {
        // lista de levels do usuário (página)
        this.levelList = {};
    }

    loadContent()
    {
        this.levelList = {
            "/": LandingLevel,
            "/home": HomeLevel,
        }
    }

    run()
    {
        this.loadContent();
        return m.route(document.body, "/", this.levelList)
    }
}

app = new Application()
app.run()

/*
m.route(document.body, "/", {
    "/": WelcomePage,
    "/home": HomePage,
})
*/