import m from "mithril"

import {PageHeader} from "../components/PageHeader"
import {PageFooter} from "../components/PageFooter"
import { ShopContent } from "../components/ShopContent"


export class ShopPage  {
    constructor(vnode) {
        this.kind = "Shop Page"
    }

    view(vnode) {
        return m(".page", [
            m(PageHeader),
            m(ShopContent),
            m(PageFooter)
        ]);
    }
}