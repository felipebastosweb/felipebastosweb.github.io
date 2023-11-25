
class Level
{
    sceneActive;
    sceneList = {};

    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
    addScene(index, scene)
    {
        this.sceneList[index] = vnode.attrs.scene;
    }
    moveToScene(index)
    {
        this.sceneActive = index;
    }
}


class LandingLevel extends Level
{
    contructor(vnode)
    {
        //super({actor: vnode.attrs.actor});
        this.scenes = {
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
            m("footer", {class: "container-fluid"}, [
                m(NavFooter),
                m(BottomFooter)
            ]),
        ]);
    }
}


class HomeLevel extends Level
{
    contructor(vnode)
    {
        this.actor = vnode.attrs.actor;
    }

    view(vnode)
    {
        return m("page", [
            m("header", {class: "container-fluid"}, []),
            m("article", {class: "container-fluid"}, []),
            m("footer", {class: "container-fluid"}, []),
        ]);
    }
}

