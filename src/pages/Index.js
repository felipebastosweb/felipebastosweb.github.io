import m from "mithril"

import {PageHeader} from "../components/PageHeader"
import {HomeContent} from "../components/HomeContent"
import {PageFooter} from "../components/PageFooter"

export class HomePage {
    
    constructor(vnode) {}
    
    view(vnode) {
        return m(".page", [
            m(PageHeader),
            m(HomeContent),
            m(PageFooter)
        ])
    }
}