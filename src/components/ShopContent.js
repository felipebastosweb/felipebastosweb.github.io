import m from "mithril"
import {ShopDiscountsContent} from "./ShopDiscountsContent"
import { ShopDealContent } from "./ShopDealContent"

export class ShopContent {
    constructor(vnode) {}
    view(vnode) {
        return m("article.container-fluid", [
            m("section.row", [
                m(".col-12.alert.alert-danger.shadow-sm", [
                    m("h2", "Trabalho em Progresso"),
                    m("p", "Esta página está em desenvolvimento. Em breve você poderá comprar pacotes de software/aplicativos."),
                ]),
            ]),
            m("section.row", [
                m(".col-12", [
                    m("h2", "Discounts"),
                    m(ShopDiscountsContent),
                ]),
            ]),
            m("section.row", [
                m(".col-12", [
                    m("h2", "Deals"),
                    m(ShopDealContent),
                ]),
            ]),
            ]
        )
    }
}
