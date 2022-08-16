import m from "mithril"

import {PageHeader} from "../components/PageHeader"
import {PageFooter} from "../components/PageFooter"
import { PartnershipContent } from "../components/PartnershipContent";


export class PartnershipPage  {
    constructor(vnode) {
        this.kind = "Partnership Page"
    }

    view(vnode) {
        return m(".page", [
            m(PageHeader),
            m(PartnershipContent),
            m(PageFooter)
        ]);
    }
}