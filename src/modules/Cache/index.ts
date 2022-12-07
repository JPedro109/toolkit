import { ChacheCore } from "./Core/ChacheCore";
import { NodeCacheAdapter } from "./Adapter/NodeCacheAdapter";

const adapter = new NodeCacheAdapter();

export const cache = new ChacheCore(adapter);