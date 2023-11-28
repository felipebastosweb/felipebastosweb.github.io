
import { LandingLevel, HomeLevel } from "./levels.js";

/* Start Game Driven Design */

export class Game
{
    constructor(vnode)
    {
        // lista de levels do usuário (página)
        this.levelList = {};
    }
    run(vnode)
    {
        this.levelList = {
            "/": LandingLevel,
            "/home": HomeLevel,
        }
        return m.route(document.body, "/", this.levelList)
    }
}

export class Level
{
    actor;
    sceneActive;
    sceneList = {};

    addScene(index, scene)
    {
        this.sceneList[vnode.attrs.index] = vnode.attrs.scene;
    }
    moveToScene(index)
    {
        this.sceneActive = index;
    }
}


export class Scene
{
    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
    addActor(vnode)
    {
        this.actor = vnode.attrs.actor
    }
}
