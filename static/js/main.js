/* Pages */

class PostRepository
{
    static posts = [
        {
            imageUrl: "https://raw.githubusercontent.com/jonataslaw/getx-community/master/getx.png",
            title: "Flutter e GetX — Parte 1",
            url: "https://medium.com/@felipebastosweb/flutter-e-getx-parte-1-bddc78a3ba4f",
        },
        {
            imageUrl: "https://raw.githubusercontent.com/jonataslaw/getx-community/master/getx.png",
            title: "Flutter e GetX — Parte 2",
            url: "https://medium.com/@felipebastosweb/flutter-e-getx-parte-2-d37e619ded30",
        },
        {
            imageUrl: "https://user-images.githubusercontent.com/32497443/48977150-cfe2ab00-f062-11e8-9e84-483ca902df98.png",
            title: "Flutter e Sqlite — Criando várias tabelas",
            url: "https://medium.com/@felipebastosweb/flutter-e-sqlite-criando-v%C3%A1rias-tabelas-bc5324a83e96",
        },
        {
            imageUrl: "https://raw.githubusercontent.com/jonataslaw/getx-community/master/getx.png",
            title: "Flutter e GetX — Mudança de estado apenas com controller",
            url: "https://medium.com/@felipebastosweb/flutter-e-getx-mudan%C3%A7a-de-estado-apenas-com-controller-c96ab7697066",
        },
    ];

    constructor(vnode)
    {
    }
}

class ProjectRepository
{
    static projects = [
        {
            title: "CondominioApp",
            description: "Aplicativo Mobile e Desktop voltado para Gestão de Condomínios sendo desenvolvido usando os frameworks MAUI Blazor.",
            url: "https://github.com/felipebastosweb/CondominioApp",
            src: "",
            tags: ["C#", ".net7", "MAUI", "Blazor", "SQLite"]
        }
    ];
}

class LandingScene extends Scene
{
    constructor(vnode)
    {
        super(vnode);
    }
    view(vnode)
    {
        return m("section.container-fluid", [
            m("article", {class: "mb-3"}, [
                m("section.row", [
                    m("header.col-12", [
                        m("h3", "Posts recentes"),
                        m("p", "Diário de desenvolvimento de Sistemas e Apps")
                    ]),
                ]),
                m("section.row.post-list", PostRepository.posts.map(
                    post => m("article.col-3", [
                        m(CardView, {
                            title: m("a", {href: post.url, target: "_blank"}, post.title),
                            subtitle: "",
                            url: post.url,
                            src: post.imageUrl,
                            text: "",
                        }),
                    ])
                ).reverse())
            ]),
            m("article", {class: "mb-3"}, [
                m("section.row", [
                    m("header.col-12", [
                        m("h3", "Projetos Open Source")
                    ]),
                ]),
                m("section.row.project-list", ProjectRepository.projects.map(
                    project => m("article.col-4", [
                        m(CardView, {
                            title: project.title,
                            subtitle: project.tags.map(tag => m("strong", tag + ", ")),
                            url: project.url,
                            src: project.src,
                            text: project.description
                        })
                    ])
                ).reverse())
            ]),
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
