import m from "mithril"
import { CartContent } from "../components/CartContent"
import { PageHeader } from "../components/PageHeader"
import { PageFooter } from "../components/PageFooter"

export class CartPage {
    constructor(self) {}
    view(vnode) {
        return m(
            ".page",
            [
                m(PageHeader),
                m(CartContent),
                m(PageFooter)
            ]
        )
    }
}