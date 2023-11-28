/* UI Components */

/* General Components */

export class Image {
    view(self) {
        return m("img", {
            src: self.attrs.src,
            title: self.attrs.title,
            alt: self.attrs.alt
        });
    }
}

export class Video {
    view(self) {
        return m("video", {controls: self.attrs.controls}, [
            m("source[type='video/mp4'][src]"),
        ]);
    }
}

export class CardView
{
    view(vnode)
    {
        return m("div.card", [
            m("img", {
                class: "card-img-top",
                src: vnode.attrs.src,
                width: "100%",
                height: vnode.attrs.height != "" ? vnode.attrs.height : "400px"
            }),
            m(".card-body", [
                m("h5.card-title", m("a", {href: vnode.attrs.url, target: vnode.attrs.target == "" ? "_self" : "_blank"}, vnode.attrs.title)),
                m("h6.card-subtitle.mb-2.text-body-secondary", vnode.attrs.subtitle),
                m("p.card-text", vnode.attrs.text)
            ])
        ]);
    }
}

/***
 * oninit, oncreate, onupdate
 * https://mithril.js.org/lifecycle-methods.html
 * **/

/* LandingScene Components */



/* End LandingScene Components */

/* Level Components */

export class LandingNavHeader
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
                m("a.nav-link", {href: "https://web.whatsapp.com/send?phone=5571997364959&text=Vi%20no%20seu%20site%20que%20você%20cria%20apps%2E%20Gostaria%20de%2E%2E", target: "_blank"}, [
                    m("i.bi.bi-whatsapp"),
                    " WhatsApp"
                ]),
                m("a.nav-link", {href: "https://www.facebook.com/profile.php?id=100088454193001&text=Vi%20no%20seu%20site%20que%20você%20cria%20apps%2E%20Gostaria%20de%2E%2E", target: "_blank"}, [
                    m("i.bi.bi-facebook"),
                    " Facebook"
                ]),
                
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

export class LandingHeroHeader
{
    constructor(vnode){}
    view(vnode)
    {
        return m("article", {class: "px-4 py-5 my-5 text-center"}, [
            //<img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            m("h1", {class: "display-5 fw-bold text-body-emphasis"}, [
                m("span", "FelipeBastosWeb")
            ]),
            m("div", {class: "col-lg-6 mx-auto"}, [
                m("p", {class: "lead mb-4"}, "Programador, Analista, e Projetista de Aplicativos")
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

export class Jumbotron
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

export class LandingHeader
{
    view(vnode)
    {
        return m("header", {class: "container-fluid"}, [
            m(LandingNavHeader, {actor: vnode.attrs.actor}),
            m(LandingHeroHeader)
        ]);
    }
}

export class NavFooter {
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

export class BottomFooter {
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


export class LandingFooter {
    constructor(vnode){}
    view(vnode)     {
        return m("footer", {class: "container-fluid"}, [
            m(NavFooter),
            m(BottomFooter)
        ]);
    }
}