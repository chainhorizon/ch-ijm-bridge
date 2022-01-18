import { DomNode } from "@hanul/skynode";
import InjeolmiSenderInterface from "../contracts/InjeolmiSenderInterface";
import Swaper from "./Swaper";
export default class Form extends DomNode {
    private swaper;
    chainId: number;
    private isFrom;
    sender: InjeolmiSenderInterface | undefined;
    private chainIcon;
    private chainSelect;
    private balanceDisplay;
    private inputContainer;
    private buttonContainer;
    constructor(swaper: Swaper, chainId: number, isFrom?: boolean);
    changeChain(chainId: number): Promise<void>;
    private loadBalance;
    private connectHandler;
    private transferHandler;
    private sendOverHorizonHandler;
    delete(): void;
}
//# sourceMappingURL=Form.d.ts.map