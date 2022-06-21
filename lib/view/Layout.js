"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Layout {
    constructor() {
        Layout.current = this;
        let select;
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, skynode_1.el)("img", { src: "/images/shared/logo/gaiaBridge.svg", alt: "gaia bridge logo" })), (0, skynode_1.el)("h2", "IJM")), (0, skynode_1.el)("main", (this.content = (0, skynode_1.el)(".content"))), (0, skynode_1.el)("footer", (0, skynode_1.el)(".copyright", "© GaiaProtocol"), (0, skynode_1.el)(".sns", (0, skynode_1.el)("a", "DOCS", { href: "https://medium.com/gaiaprotocol" }), (0, skynode_1.el)("a", "GITHUB", { href: "https://github.com/gaiabridge" }), (0, skynode_1.el)("a", "TWITTER", { href: "https://twitter.com/gaiabridge" }))))));
    }
    set title(title) {
        document.title = `${title} | Gaia Bridge`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map