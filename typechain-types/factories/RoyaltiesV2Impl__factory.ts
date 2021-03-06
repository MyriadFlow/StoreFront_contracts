/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RoyaltiesV2Impl,
  RoyaltiesV2ImplInterface,
} from "../RoyaltiesV2Impl";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "value",
            type: "uint96",
          },
        ],
        indexed: false,
        internalType: "struct LibPart.Part[]",
        name: "royalties",
        type: "tuple[]",
      },
    ],
    name: "RoyaltiesSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getRaribleV2Royalties",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "value",
            type: "uint96",
          },
        ],
        internalType: "struct LibPart.Part[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610199806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063cad96cca14610030575b600080fd5b61004361003e3660046100e4565b610059565b60405161005091906100fd565b60405180910390f35b600081815260208181526040808320805482518185028101850190935280835260609492939192909184015b828210156100d957600084815260209081902060408051808201909152908401546001600160a01b0381168252600160a01b90046bffffffffffffffffffffffff1681830152825260019092019101610085565b505050509050919050565b6000602082840312156100f657600080fd5b5035919050565b602080825282518282018190526000919060409081850190868401855b8281101561015657815180516001600160a01b031685528601516bffffffffffffffffffffffff1686850152928401929085019060010161011a565b509197965050505050505056fea26469706673582212203e52a217ba4138995e6159b66b7ecbb07d506c8f9fdd6714fd34665e4cd77d2e64736f6c63430008090033";

type RoyaltiesV2ImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoyaltiesV2ImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoyaltiesV2Impl__factory extends ContractFactory {
  constructor(...args: RoyaltiesV2ImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RoyaltiesV2Impl";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RoyaltiesV2Impl> {
    return super.deploy(overrides || {}) as Promise<RoyaltiesV2Impl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RoyaltiesV2Impl {
    return super.attach(address) as RoyaltiesV2Impl;
  }
  connect(signer: Signer): RoyaltiesV2Impl__factory {
    return super.connect(signer) as RoyaltiesV2Impl__factory;
  }
  static readonly contractName: "RoyaltiesV2Impl";
  public readonly contractName: "RoyaltiesV2Impl";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoyaltiesV2ImplInterface {
    return new utils.Interface(_abi) as RoyaltiesV2ImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoyaltiesV2Impl {
    return new Contract(address, _abi, signerOrProvider) as RoyaltiesV2Impl;
  }
}
