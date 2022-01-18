/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Injeolmi } from "../Injeolmi";

export class Injeolmi__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Injeolmi> {
    return super.deploy(overrides || {}) as Promise<Injeolmi>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Injeolmi {
    return super.attach(address) as Injeolmi;
  }
  connect(signer: Signer): Injeolmi__factory {
    return super.connect(signer) as Injeolmi__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Injeolmi {
    return new Contract(address, _abi, signerOrProvider) as Injeolmi;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f496e6a656f6c6d690000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f494a4d00000000000000000000000000000000000000000000000000000000008152506012620000986301ffc9a760e01b6200014360201b60201c565b620000b0636578737160e01b6200014360201b60201c565b8251620000c5906004906020860190620003ad565b508151620000db906005906020850190620003ad565b506006805460ff191660ff83161790556200011d7fa219a0250000000000000000000000000000000000000000000000000000000062000143602090811b901c565b5050506200013d336a52b7d2dcc80cd2e40000006200021260201b60201c565b62000452565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620001d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b6001600160a01b0382166200028857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b620002a4816003546200033160201b62000b411790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620002d991839062000b4162000331821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620003a657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003f057805160ff191683800117855562000420565b8280016001018555821562000420579182015b828111156200042057825182559160200191906001019062000403565b506200042e92915062000432565b5090565b6200044f91905b808211156200042e576000815560010162000439565b90565b610d2280620004626000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342842e0e1161008c578063a9059cbb11610066578063a9059cbb146102d3578063b88d4fde146102ff578063dd62ed3e146103c5578063eb795549146103f3576100ea565b806342842e0e1461026f57806370a08231146102a557806395d89b41146102cb576100ea565b806318160ddd116100c857806318160ddd146101d357806323b872dd146101ed578063313ce56714610223578063423f6cef14610241576100ea565b806301ffc9a7146100ef57806306fdde031461012a578063095ea7b3146101a7575b600080fd5b6101166004803603602081101561010557600080fd5b50356001600160e01b0319166104ae565b604080519115158252519081900360200190f35b6101326104cd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016c578181015183820152602001610154565b50505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610116600480360360408110156101bd57600080fd5b506001600160a01b038135169060200135610563565b6101db610579565b60408051918252519081900360200190f35b6101166004803603606081101561020357600080fd5b506001600160a01b0381358116916020810135909116906040013561057f565b61022b6105d6565b6040805160ff9092168252519081900360200190f35b61026d6004803603604081101561025757600080fd5b506001600160a01b0381351690602001356105df565b005b61026d6004803603606081101561028557600080fd5b506001600160a01b038135811691602081013590911690604001356105fd565b6101db600480360360208110156102bb57600080fd5b50356001600160a01b031661061d565b610132610638565b610116600480360360408110156102e957600080fd5b506001600160a01b038135169060200135610699565b61026d6004803603608081101561031557600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561035057600080fd5b82018360208201111561036257600080fd5b8035906020019184600183028401116401000000008311171561038457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106a6945050505050565b6101db600480360360408110156103db57600080fd5b506001600160a01b0381358116916020013516610702565b61026d6004803603606081101561040957600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561043957600080fd5b82018360208201111561044b57600080fd5b8035906020019184600183028401116401000000008311171561046d57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061072d945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b5050505050905090565b6000610570338484610782565b50600192915050565b60035490565b600061058c848484610874565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546105cc9186916105c7908663ffffffff6109be16565b610782565b5060019392505050565b60065460ff1690565b6105f982826040518060200160405280600081525061072d565b5050565b610618838383604051806020016040528060008152506106a6565b505050565b6001600160a01b031660009081526001602052604090205490565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105595780601f1061052e57610100808354040283529160200191610559565b6000610570338484610874565b6106b184848461057f565b506106be84848484610a07565b6106fc57604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610c60602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6107378383610699565b5061074433848484610a07565b61061857604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610c60602e913960400191505060405180910390fd5b6001600160a01b0383166107ca57604051600160e51b62461bcd028152600401808060200182810382526023815260200180610cd46023913960400191505060405180910390fd5b6001600160a01b03821661081257604051600160e51b62461bcd028152600401808060200182810382526021815260200180610c3f6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166108bc57604051600160e51b62461bcd028152600401808060200182810382526024815260200180610cb06024913960400191505060405180910390fd5b6001600160a01b03821661090457604051600160e51b62461bcd028152600401808060200182810382526022815260200180610c8e6022913960400191505060405180910390fd5b6001600160a01b03831660009081526001602052604090205461092d908263ffffffff6109be16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610962908263ffffffff610b4116565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610a0083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610b9e565b9392505050565b6000610a1b846001600160a01b0316610c38565b610a2757506001610b39565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610aa4578181015183820152602001610a8c565b50505050905090810190601f168015610ad15780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610af357600080fd5b505af1158015610b07573d6000803e3d6000fd5b505050506040513d6020811015610b1d57600080fd5b50516001600160e01b031916600160e11b634e8c461102149150505b949350505050565b600082820183811015610a005760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610c3057604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bf5578181015183820152602001610bdd565b50505050905090810190601f168015610c225780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820fb2aea74f3a6696b66e17f266ef85075e87a73059dd6e5bfd42274949f8696850029";
