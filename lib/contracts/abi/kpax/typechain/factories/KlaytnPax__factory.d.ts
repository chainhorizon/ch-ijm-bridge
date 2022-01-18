import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KlaytnPax, KlaytnPaxInterface } from "../KlaytnPax";
export declare class KlaytnPax__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_signer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KlaytnPax>;
    getDeployTransaction(_signer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KlaytnPax;
    connect(signer: Signer): KlaytnPax__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405160208062001c41833981018060405260208110156200003357600080fd5b5051604080518082018252600e81527f434e44204b6c6179746e2050617800000000000000000000000000000000000060208281019190915282518084018452600481527f4b5041580000000000000000000000000000000000000000000000000000000091810191909152600080546001600160a01b03191633178082559351929391926012926001600160a01b031691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3620001036301ffc9a760e01b620001b860201b60201c565b6200011b636578737160e01b620001b860201b60201c565b8251620001309060059060208601906200028a565b508151620001469060069060208501906200028a565b506007805460ff191660ff8316179055620001887fa219a02500000000000000000000000000000000000000000000000000000000620001b8602090811b901c565b5050600780546001600160a01b0390931661010002610100600160a81b031990931692909217909155506200032f565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200024a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152600160208190526040909120805460ff19169091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002cd57805160ff1916838001178555620002fd565b82800160010185558215620002fd579182015b82811115620002fd578251825591602001919060010190620002e0565b506200030b9291506200030f565b5090565b6200032c91905b808211156200030b576000815560010162000316565b90565b611902806200033f6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80636c19e783116100de578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e14610621578063eb7955491461064f578063ec79b1851461070a578063f2fde38b1461073c57610173565b8063a9059cbb146104f5578063b88d4fde14610521578063ba133b33146105e757610173565b80636c19e7831461048957806370a08231146104af578063715018a6146104d55780638da5cb5b146104dd5780638f32d59b146104e557806395d89b41146104ed57610173565b8063238ac93311610130578063238ac9331461037957806323b872dd1461039d578063313ce567146103d3578063423f6cef146103f157806342842e0e1461041d5780635acfbbd31461045357610173565b806301ffc9a71461017857806306fdde03146101b3578063095ea7b3146102305780630d268d0a1461025c57806318160ddd146103255780631c5489b71461033f575b600080fd5b61019f6004803603602081101561018e57600080fd5b50356001600160e01b031916610762565b604080519115158252519081900360200190f35b6101bb610781565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f55781810151838201526020016101dd565b50505050905090810190601f1680156102225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019f6004803603604081101561024657600080fd5b506001600160a01b038135169060200135610817565b610323600480360360a081101561027257600080fd5b8135916001600160a01b036020820135169160408201359160608101359181019060a0810160808201356401000000008111156102ae57600080fd5b8201836020820111156102c057600080fd5b803590602001918460018302840111640100000000831117156102e257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061082d945050505050565b005b61032d610b7b565b60408051918252519081900360200190f35b61019f6004803603608081101561035557600080fd5b506001600160a01b0381358116916020810135916040820135169060600135610b81565b610381610bb0565b604080516001600160a01b039092168252519081900360200190f35b61019f600480360360608110156103b357600080fd5b506001600160a01b03813581169160208101359091169060400135610bc4565b6103db610c1b565b6040805160ff9092168252519081900360200190f35b6103236004803603604081101561040757600080fd5b506001600160a01b038135169060200135610c24565b6103236004803603606081101561043357600080fd5b506001600160a01b03813581169160208101359091169060400135610c42565b61032d6004803603606081101561046957600080fd5b506001600160a01b03813581169160208101359160409091013516610c62565b6103236004803603602081101561049f57600080fd5b50356001600160a01b0316610c95565b61032d600480360360208110156104c557600080fd5b50356001600160a01b0316610d43565b610323610d5e565b610381610e04565b61019f610e13565b6101bb610e24565b61019f6004803603604081101561050b57600080fd5b506001600160a01b038135169060200135610e85565b6103236004803603608081101561053757600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561057257600080fd5b82018360208201111561058457600080fd5b803590602001918460018302840111640100000000831117156105a657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e92945050505050565b61032d600480360360808110156105fd57600080fd5b506001600160a01b0381358116916020810135916040820135169060600135610eee565b61032d6004803603604081101561063757600080fd5b506001600160a01b0381358116916020013516610f36565b6103236004803603606081101561066557600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561069557600080fd5b8201836020820111156106a757600080fd5b803590602001918460018302840111640100000000831117156106c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f61945050505050565b61032d6004803603606081101561072057600080fd5b508035906001600160a01b036020820135169060400135610fb6565b6103236004803603602081101561075257600080fd5b50356001600160a01b0316611048565b6001600160e01b03191660009081526001602052604090205460ff1690565b60058054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561080d5780601f106107e25761010080835404028352916020019161080d565b820191906000526020600020905b8154815290600101906020018083116107f057829003601f168201915b5050505050905090565b60006108243384846110b0565b50600192915050565b80516041146108865760408051600160e51b62461bcd02815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e6774680000000000000000604482015290519081900360640190fd5b33600090815260096020908152604080832088845282528083206001600160a01b0388168452825280832086845290915290205460ff16156108c757600080fd5b6040805133606090811b60208084019190915260348301899052612019605484018190526001600160a01b038916831b60748501526088840188905260a88085018890528551808603909101815260c8850186528051908301207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060e8860152610104808601829052865180870390910181526101249095018652845194830194909420918601519486015192860151909491929060001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156109f75760408051600160e51b62461bcd02815260206004820152601b60248201527f696e76616c6964207369676e6174757265202773272076616c75650000000000604482015290519081900360640190fd5b8060ff16601b1480610a0c57508060ff16601c145b610a605760408051600160e51b62461bcd02815260206004820152601b60248201527f696e76616c6964207369676e6174757265202776272076616c75650000000000604482015290519081900360640190fd5b6007546040805160008152602080820180845288905260ff851682840152606082018790526080820186905291516101009093046001600160a01b03169260019260a0808401939192601f1981019281900390910190855afa158015610aca573d6000803e3d6000fd5b505050602060405103516001600160a01b031614610ae757600080fd5b610af133896111a2565b3360008181526009602090815260408083208f845282528083206001600160a01b038f168085529083528184208e8552835292819020805460ff1916600117905580518d81529182018c9052805192938f9390927f9b8cc913c3e25613faea2e6cfeb6dce457ef77c33f5d9f12119326580bec128f92908290030190a45050505050505050505050565b60045490565b600960209081526000948552604080862082529385528385208152918452828420909152825290205460ff1681565b60075461010090046001600160a01b031681565b6000610bd1848484611297565b6001600160a01b038416600090815260036020908152604080832033808552925290912054610c11918691610c0c908663ffffffff6113e116565b6110b0565b5060019392505050565b60075460ff1690565b610c3e828260405180602001604052806000815250610f61565b5050565b610c5d83838360405180602001604052806000815250610e92565b505050565b6001600160a01b039283166000908152600860209081526040808320948352938152838220929094168152925290205490565b610c9d610e13565b610cf15760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60078054610100600160a81b0319166101006001600160a01b038416908102919091179091556040517fbb10aee7ef5a307b8097c6a7f2892b909ff1736fd24a6a5260640c185f7153b690600090a250565b6001600160a01b031660009081526002602052604090205490565b610d66610e13565b610dba5760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b60068054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561080d5780601f106107e25761010080835404028352916020019161080d565b6000610824338484611297565b610e9d848484610bc4565b50610eaa8484848461142a565b610ee857604051600160e51b62461bcd02815260040180806020018281038252602e81526020018061181a602e913960400191505060405180910390fd5b50505050565b60086020528360005260406000206020528260005260406000206020528160005260406000208181548110610f1f57fe5b906000526020600020016000935093505050505481565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b610f6b8383610e85565b50610f783384848461142a565b610c5d57604051600160e51b62461bcd02815260040180806020018281038252602e81526020018061181a602e913960400191505060405180910390fd5b6000610fc23383611564565b33600081815260086020908152604080832088845282528083206001600160a01b038816808552908352818420805460018101825581865294849020850188905582518581529384018890528251909591938a937f88a9fbb0dbf3ab14fab2aaeca87654c792e7f2de49b08a01bdc60820e4429e4692918290030190a495945050505050565b611050610e13565b6110a45760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6110ad81611658565b50565b6001600160a01b0383166110f857604051600160e51b62461bcd0281526004018080602001828103825260238152602001806118b46023913960400191505060405180910390fd5b6001600160a01b03821661114057604051600160e51b62461bcd0281526004018080602001828103825260218152602001806117f96021913960400191505060405180910390fd5b6001600160a01b03808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0382166112005760408051600160e51b62461bcd02815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600454611213908263ffffffff6116fb16565b6004556001600160a01b03821660009081526002602052604090205461123f908263ffffffff6116fb16565b6001600160a01b03831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0383166112df57604051600160e51b62461bcd0281526004018080602001828103825260248152602001806118906024913960400191505060405180910390fd5b6001600160a01b03821661132757604051600160e51b62461bcd02815260040180806020018281038252602281526020018061186e6022913960400191505060405180910390fd5b6001600160a01b038316600090815260026020526040902054611350908263ffffffff6113e116565b6001600160a01b038085166000908152600260205260408082209390935590841681522054611385908263ffffffff6116fb16565b6001600160a01b0380841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061142383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611758565b9392505050565b600061143e846001600160a01b03166117f2565b61144a5750600161155c565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b838110156114c75781810151838201526020016114af565b50505050905090810190601f1680156114f45780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561151657600080fd5b505af115801561152a573d6000803e3d6000fd5b505050506040513d602081101561154057600080fd5b50516001600160e01b031916600160e11b634e8c461102149150505b949350505050565b6001600160a01b0382166115c25760408051600160e51b62461bcd02815260206004820181905260248201527f4b4950373a206275726e2066726f6d20746865207a65726f2061646472657373604482015290519081900360640190fd5b6004546115d5908263ffffffff6113e116565b6004556001600160a01b038216600090815260026020526040902054611601908263ffffffff6113e116565b6001600160a01b0383166000818152600260209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6001600160a01b0381166116a057604051600160e51b62461bcd0281526004018080602001828103825260268152602001806118486026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000828201838110156114235760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081848411156117ea57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117af578181015183820152602001611797565b50505050905090810190601f1680156117dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058200a2c6251007657018a691655b4c4751c86f2041ae5cc0607c537e854d9d5118a0029";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): KlaytnPaxInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KlaytnPax;
}
//# sourceMappingURL=KlaytnPax__factory.d.ts.map