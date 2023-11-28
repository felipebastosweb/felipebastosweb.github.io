import { LandingScene } from "./scenes.js";
// internal components
import { LandingHeader, LandingFooter } from "./ui.js";


export class Level
{
    sceneActive;
    sceneList = {};
    constructor(self) {
        this.actor = self.attrs.actor;
        this.sceneList = self.attrs.sceneList;
    }
    addActor(index, actor) {
        this.actor[index] = actor;
    }
    addScene(index, scene)
    {
        this.sceneList[vnode.attrs.index] = vnode.attrs.scene;
    }
    moveToScene(index)
    {
        this.sceneActive = index;
    }
}


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
            m(LandingFooter),
        ]);
    }
}

