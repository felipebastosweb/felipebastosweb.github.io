import m from "mithril"
import { BasePage } from "../core/page"

export class SignInPage extends BasePage {
    constructor(self) {
        super(self)
        this.body = new SignInContent()
    }
    view() {
        super.view()
    }
}