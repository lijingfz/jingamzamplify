import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCFtemplate = {
  readonly id: string;
  readonly name: string;
  readonly S3link: string;
  readonly desc: string;
  readonly group: string;
  readonly cfstack?: (CFstack | null)[] | null;
}

type LazyCFtemplate = {
  readonly id: string;
  readonly name: string;
  readonly S3link: string;
  readonly desc: string;
  readonly group: string;
  readonly cfstack: AsyncCollection<CFstack>;
}

export declare type CFtemplate = LazyLoading extends LazyLoadingDisabled ? EagerCFtemplate : LazyCFtemplate

export declare const CFtemplate: (new (init: ModelInit<CFtemplate>) => CFtemplate) & {
  copyOf(source: CFtemplate, mutator: (draft: MutableModel<CFtemplate>) => MutableModel<CFtemplate> | void): CFtemplate;
}

type EagerCFstack = {
  readonly id: string;
  readonly stackname: string;
  readonly stack: string;
  readonly stackstatus: string;
  readonly createuser: string;
  readonly cfoutput?: string | null;
  readonly cftemplate?: CFtemplate | null;
}

type LazyCFstack = {
  readonly id: string;
  readonly stackname: string;
  readonly stack: string;
  readonly stackstatus: string;
  readonly createuser: string;
  readonly cfoutput?: string | null;
  readonly cftemplate: AsyncItem<CFtemplate | undefined>;
}

export declare type CFstack = LazyLoading extends LazyLoadingDisabled ? EagerCFstack : LazyCFstack

export declare const CFstack: (new (init: ModelInit<CFstack>) => CFstack) & {
  copyOf(source: CFstack, mutator: (draft: MutableModel<CFstack>) => MutableModel<CFstack> | void): CFstack;
}