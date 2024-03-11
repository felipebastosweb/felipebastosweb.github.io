/* Pages */

export class LmsRepository
{
    static courses = [];
    static resources = [
        {
            type: "PDF",
            title: "Ebook MAUI Blazor com C#.Net",
            description: "Ebook sobre criação de Aplicativo Mobile e Desktop.",
            //  voltado para Gestão de Condomínios sendo desenvolvido usando os frameworks MAUI Blazor
            url: "https://github.com/felipebastosweb/Ebook-MAUI-Blazor-CSharp-Net/blob/main/index.md",
            src: "",
            tags: ["C#", ".Net7", "MAUI", "Blazor", "SQLite"]
        },
    ];
}
    

export class PostRepository
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
        {
            imageUrl: "",
            title: "Javascript para Devs backend — parte 1",
            url: "https://medium.com/@felipebastosweb/javascript-para-devs-backend-parte-1-12e2b82a37ad"
        }
    ];

    constructor(vnode)
    {
    }
}

export class ProjectRepository
{
    static projects = [
        {
            title: "StoreApp Local Server",
            url: "https://github.com/felipebastosweb/storeapp_dlang",
            description: "Aplicativo Gestor de Loja Físicas",
            src: "https://raw.githubusercontent.com/felipebastosweb/storeapp_dlang/main/screenshots/home.png",
            tags: ["D", "Vibe.d", "Html5", "Javascript", "Bootstrap"]
        },
        {
            title: "Agile by Game Design",
            description: "Metodologia Ágil de Desevolvimento de Sistemas baseado em Design de Jogos",
            url: "https://agilebygamedesign.github.io/",
            src: "",
            tags: ["JavaScript", "ECMAScript", "Agile"]
        },
        {
            title: "LMS Lite",
            description: "Aplicativo básico para Plataforma de Gerenciamento de Aprendizado para a Cada da Aprendizagem",
            url: "https://github.com/felipebastosweb/LMS",
            src: "",
            tags: ["C#", ".Net7", "MAUI", "Blazor", "SQLite"]
        }
    ];
}
