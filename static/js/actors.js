
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
