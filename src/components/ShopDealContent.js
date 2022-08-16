import m from "mithril"
import { Card } from "./Card";

export class DealCard {
    constructor(vnode) {}
    view(vnode) {
        return m(".col-xs-12.col-sm-6.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
            m(".card.border-0.shadow-sm", [
                m("img.card-img-top.border-0", {src: "", width: "100%", height: "100px"}),
                m(".card-body", [
                    m("card-title", "Product on Offer"),
                ]),
                m(".card-footer.border-0", [
                    m(".btn-group", [
                        m("a.btn.shadow-sm", {href: "#!/product/id"}, m("i.bi.bi-cart", "")),
                        m("a.btn.shadow-sm", {href: "#!/product/id/like"}, m("i.bi.bi-hand-thumbs-up", "")),
                    ]),
                ]),
            ]),
        ]);
    }
}

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
