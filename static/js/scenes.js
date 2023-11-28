
export class Scene
{
    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
    addActor(vnode)
    {
        this.actor = vnode.attrs.actor
    }
}

export class LandingScene extends Scene
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
                        m("h3", "Cursos e Recursos")
                    ]),
                ]),
                m("section.row.lms-list", LmsRepository.resources.map(
                    resource => m("article.col-4", [
                        m(CardView, {
                            title: resource.title,
                            target: "_blank",
                            subtitle: resource.tags.map(tag => m("strong", tag + ", ")),
                            url: resource.url,
                            src: resource.src,
                            text: resource.description
                        })
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
                            target: "_blank",
                            subtitle: project.tags.map(tag => m("strong", tag + ", ")),
                            url: project.url,
                            src: project.src,
                            text: project.description
                        })
                    ])
                ).reverse())
            ]),
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
                            title: post.title,
                            target: "_blank",
                            subtitle: "",
                            url: post.url,
                            src: post.imageUrl,
                            text: "",
                        }),
                    ])
                ).reverse())
            ]),
        ]);
    }
}


export class ContactScene {
    constructor(vnode) {}
    view(vnode) {
        return m("p", "&nbsp;");
    }
}

