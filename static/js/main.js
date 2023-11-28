import { Game } from "./gdd.js";

import { LandingLevel, HomeLevel } from "./levels.js";

/* End Game Driven Design */

const app = new Game();
app.levelList = {
    "/": LandingLevel,
    "/home": HomeLevel,
};

app.run();
