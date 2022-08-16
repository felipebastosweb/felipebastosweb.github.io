import m from "mithril"

import {PageHeader} from "../components/PageHeader"
import { AboutContent } from "../components/AboutContent"
import {PageFooter} from "../components/PageFooter"


export class AboutPage  {
    constructor(vnode) {
        this.kind = "AboutPage"
    }

    view(vnode) {
        return m(".page", [
            m(PageHeader),
            m(AboutContent),
            m(PageFooter)
        ]);
    }
}