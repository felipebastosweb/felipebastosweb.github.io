import m from "mithril"

var root = document.body

import { HomePage } from "./pages/Index"
import { AboutPage } from "./pages/About"
import { ProjectsPage } from "./pages/Projects"
import { PartnershipPage } from "./pages/Partnership"
import { ContactPage } from "./pages/Contact"
import { ShopPage } from "./pages/Shop"


m.route(root, "/", {
    "/": HomePage,
    "/p/about": AboutPage,
    "/projects": ProjectsPage,
    "/shop": ShopPage,
    "/partnership": PartnershipPage,
    "/p/contact": ContactPage,
})