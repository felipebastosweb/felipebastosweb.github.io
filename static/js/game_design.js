
/* Start Game Driven Design */

class Actor
{
    username;
    constructor(){}
}

class Player extends Actor
{
    constructor(vnode)
    {
        username = vnode.attrs.username;
    }
}

class Level
{
    sceneActive;
    sceneList = {};

    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
    moveToScene(index)
    {
        this.sceneActive = index;
    }
}

class Scene
{
    constructor(vnode){
        this.actor = vnode.attrs.actor;
    }
}

class Game
{
    constructor(vnode)
    {
        // lista de levels do usuário (página)
        this.levelList = {};
    }
    run(vnode)
    {
        this.loadContent();
        return m.route(document.body, "/", this.levelList)
    }
}


/* End Game Driven Design */
