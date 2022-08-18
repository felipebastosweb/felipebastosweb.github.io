import m from "mithril"
import { CartForm } from "../forms/CartForm"

export class CartContent {
    constructor(self) {}
    view(vnode) {
        return m("article.container-fluid", {style: "padding-top: 20px; padding-bottom: 20px;"}, [
            m("section.row", [
                m("header.col-12", [
                    m("h2", "Your Cart"),
                ]),
                m("article.col-12", [
                    m(CartForm)
                ])
            ])
        ])
    }
}