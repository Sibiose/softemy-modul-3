import { Game } from "./game.js";
import { ConsoleGameView } from "./ConsoleGameView.js";
import { HtmlGameView } from "./HtmlGameView.js";
import { SideBarGameView } from "./SideBarGameView.js";

const game = new Game();
// game.attachView(new ConsoleGameView());
game.attachView(new SideBarGameView());
game.attachView(new HtmlGameView());


export {game}