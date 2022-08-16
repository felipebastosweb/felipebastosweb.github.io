import m from "mithril"

import {PageFooter} from "../components/PageFooter"
import { PageHeader } from "../components/PageHeader"
import {ContactContent} from "../components/ContactContent"


export class ContactPage {
    
    constructor(vnode) {
    }
    
    view(vnode) {
        return m(
            ".page",
            [
                m(PageHeader),
                m(ContactContent),
                m(PageFooter)
            ]
        )
    }
}