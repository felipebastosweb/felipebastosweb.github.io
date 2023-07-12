/* Pages */

class PostRepository
{
    static posts = [
        {
            title: "",
            slug: "",
            content: ""
        }
    ];
    
    constructor(vnode)
    {
    }
}

class LandingScene extends Scene
{
    constructor(vnode)
    {
        super(vnode);
    }
    view(vnode)
    {
        return m("section", [
            m("article", {class: "mb-3"}, [
                m("section.row", [
                    m("header.col-12", [
                        m("h3", "")
                    ]),
                ]),
                m("section.row.post-list", PostRepostirory.posts.map(
                    post => m("article.col-12", [
                        m("h5", m("a", {href: post.slug}, post.title)),
                    ])
                ))
            ])
        ]);
    }
}

/*
            m("article", {class: "container-fluid"}, [
                m(".row", [
                    m(".col-6", [
                        m("h3", "Cadastrar"),
                        m(UserRegisterForm)
                    ]),
                    m(".col-6", [
                        m("h3", "Entrar"),
                        m(UserLoginForm)
                    ])
                ]),
            ]),
            m("article.container-fluid", [
                m("section.row", [
                    m(".col-12.alert.alert-danger", [
                        m("h2", "Trabalho em Progresso"),
                        m("p", "Esta página está em desenvolvimento. Em breve você poderá comprar pacotes de software/aplicativos."),
                    ]),
                ]),
                m("section.row", [
                    m(ContactForm)
                ]) 
            ])
            */


class ContactScene {
    constructor(vnode) {}
    view(vnode) {
        return 
    }
}

class LandingLevel extends Level
{
    contructor(vnode){
        //super({actor: vnode.attrs.actor});
        this.scenes = {
            start: LandingScene
        };
        this.sceneActive = this.scenes.start;
    }

    oninit(vnode)
    {
        //alert(this.scenes.length);
    }

    view(vnode)
    {
        return m("page", [
            m(LandingHeader),
            m(LandingScene, vnode),
            //m(this.sceneActive, vnode),
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
class Application extends Game// Game
{
    
    loadContent()
    {
        this.levelList = {
            "/": LandingLevel,
            "/home": HomeLevel,
        }
    }
}

app = new Application()
app.run()
