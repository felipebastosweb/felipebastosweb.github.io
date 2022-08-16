import m from "mithril"

export class DiscountCard {
    constructor(vnode) {}
    view(vnode) {
        return m(".col-xs-12.col-sm-6.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
            m(".card.border-0.shadow-sm", [
                m("img.card-img-top.border-0", {src: "", width: "100%", height: "100px"}),
                m(".card-body.border-0", [
                    m("card-title", "Product Discount"),
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

export class ShopDiscountsContent {
    constructor(vnode) {}
    view(vnode) {
        return m(".row", {style: "padding-bottom: 10px;"}, [
            m(DiscountCard),
            m(DiscountCard),
            m(DiscountCard),
            m(DiscountCard),
            m(DiscountCard),
            m(DiscountCard),
            m(DiscountCard),
        ]);
    }
}
