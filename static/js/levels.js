import { Level } from "./gdd.js";
// internal components
import { LandingHeader, LandingFooter } from "./ui.js";

export class LandingLevel extends Level
{
    contructor(vnode)
    {
        this.actor = vnode.attrs.actor;
        //super({actor: vnode.attrs.actor});
        this.sceneList = {
            start: LandingScene
        };
        this.sceneActive = this.scenes.start;
    }

    oninit(vnode)
    {
        //alert(this.scenes.length);
    }

    view(vnode)
    {
        return m("page", [
            m(LandingHeader),
            m(LandingScene, vnode),
            //m(this.sceneActive, vnode),
            m(LandingFooter)
        ]);
    }
}


export class HomeLevel extends Level
{
    contructor(vnode)
    {
        this.actor = vnode.attrs.actor;
    }

    view(vnode)
    {
        return m("page", [
            m(LandingHeader),
            m("article", {class: "container-fluid"}, []),
            m("footer", {class: "container-fluid"}, [
                m(NavFooter),
                m(BottomFooter)
            ]),
        ]);
    }
}

