import m from "mithril"

import {PageHeader} from "../components/PageHeader"
import {ProjectsContent} from "../components/ProjectsContent"
import {PageFooter} from "../components/PageFooter"


export class ProjectsPage  {
    constructor(vnode) {
        this.kind = "Projects Page"
    }

    view(vnode) {
        return m(".page", [
            m(PageHeader),
            m(ProjectsContent),
            m(PageFooter)
        ]);
    }
}