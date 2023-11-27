
/* Start Game Driven Design */

class Game
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


/* End Game Driven Design */



// Game Design https://agilebygamedesign.github.io/
class Application extends Game// Game
{
}

app = new Application()
app.run()
