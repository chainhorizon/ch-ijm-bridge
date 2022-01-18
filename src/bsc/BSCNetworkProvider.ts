import { ethers } from "ethers";
import EventContainer from "eventcontainer";

class BSCNetworkProvider extends EventContainer {

    public provider: ethers.providers.WebSocketProvider;
    public signer: ethers.providers.JsonRpcSigner;

    constructor() {
        super();
        this.provider = new ethers.providers.WebSocketProvider("wss://bsc-ws-node.nariox.org:443");
        this.signer = this.provider.getSigner(ethers.constants.AddressZero);
    }

    public async getBlockNumber() {
        return await this.provider.getBlockNumber();
    }

    public async getBalance(address: string) {
        return await this.provider.getBalance(address);
    }
}

export default new BSCNetworkProvider();
