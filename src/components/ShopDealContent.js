import m from "mithril"
import { Card } from "./Card";

export class ShopDealContent {
    constructor(vnode) {
        this.products = []
        for (let i = 0; i < 5; i++) {
            this.products.push(m(new Card({
                id: i+1,
                title: "Product in Deal " + (i+1),
                imageSrc: "",
                imageAlt: "Titulo e descrição do product "+ (i+1),
                imageWidth: "100%",
                imageHeight: "100px"
            })));
        }
    }
    view(vnode) {
        return m(".row", {style: "padding-top: 20px; padding-bottom: 20px;"}, this.products);
    }
}
