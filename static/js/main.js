import { Game } from "./gdd.js";

/* End Game Driven Design */

const app = new Game();
app.levelList = {
    "/": LandingLevel,
    "/home": HomeLevel,
};

app.run();
