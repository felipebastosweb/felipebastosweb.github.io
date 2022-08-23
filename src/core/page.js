import m from "mithril"

import {PageHeader} from "../components/PageHeader"
import {PageFooter} from "../components/PageFooter"


export class BasePage {
    constructor(self) {
        this.title = self.title
        this.body = null
    }
    view = () => m("#page", [
        m(PageHeader),
        m(this.body),
        m(PageFooter)
    ])
}