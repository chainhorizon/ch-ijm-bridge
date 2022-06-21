"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
const Swaper_1 = __importDefault(require("../component/Swaper"));
class Home {
    constructor() {
        Layout_1.default.current.title = "IJM";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)("section.home-view", new Swaper_1.default()));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map