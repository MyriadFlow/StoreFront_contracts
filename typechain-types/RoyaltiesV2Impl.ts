/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace LibPart {
  export type PartStruct = { account: string; value: BigNumberish };

  export type PartStructOutput = [string, BigNumber] & {
    account: string;
    value: BigNumber;
  };
}

export interface RoyaltiesV2ImplInterface extends utils.Interface {
  contractName: "RoyaltiesV2Impl";
  functions: {
    "getRaribleV2Royalties(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRaribleV2Royalties",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRaribleV2Royalties",
    data: BytesLike
  ): Result;

  events: {
    "RoyaltiesSet(uint256,tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoyaltiesSet"): EventFragment;
}

export type RoyaltiesSetEvent = TypedEvent<
  [BigNumber, LibPart.PartStructOutput[]],
  { tokenId: BigNumber; royalties: LibPart.PartStructOutput[] }
>;

export type RoyaltiesSetEventFilter = TypedEventFilter<RoyaltiesSetEvent>;

export interface RoyaltiesV2Impl extends BaseContract {
  contractName: "RoyaltiesV2Impl";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoyaltiesV2ImplInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getRaribleV2Royalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[LibPart.PartStructOutput[]]>;
  };

  getRaribleV2Royalties(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<LibPart.PartStructOutput[]>;

  callStatic: {
    getRaribleV2Royalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<LibPart.PartStructOutput[]>;
  };

  filters: {
    "RoyaltiesSet(uint256,tuple[])"(
      tokenId?: null,
      royalties?: null
    ): RoyaltiesSetEventFilter;
    RoyaltiesSet(tokenId?: null, royalties?: null): RoyaltiesSetEventFilter;
  };

  estimateGas: {
    getRaribleV2Royalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRaribleV2Royalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
