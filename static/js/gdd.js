
import { LandingLevel, HomeLevel } from "./levels.js";


export class Game
{
    constructor(self)
    {
        // lista de levels do usuário (página)
        this.levelList = {};
    }
    run(vnode)
    {
        return m.route(document.body, "/", this.levelList)
    }
}
