import m from "mithril"
import { Card } from "./Card";

export class ProjectListContent {
    constructor(vnode) {
        this.projects = []
        for (let i = 0; i < 5; i++) {
            this.projects.push(m(new Card({
                id: i+1,
                title: "Project " + (i+1),
                imageSrc: "",
                imageAlt: "Titulo e descrição do projeto "+ (i+1),
                imageWidth: "100%",
                imageHeight: "100px"
            })));
        }
    }
    view(vnode) {
        return m(".row", {style: "padding-top: 20px; padding-bottom: 20px;"}, this.projects);
    }
}
