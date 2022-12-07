import NodeCache from "node-cache";
import { IAdapter } from "./Interfaces/IAdapter";

export class NodeCacheAdapter implements IAdapter {

	private cache: NodeCache;

	constructor() {
		this.cache = new NodeCache();
	}

	set<Type>(key: string, value: Type, expiryTime?: number): void {
		this.cache.set<Type>(key, value, expiryTime);
	}

	get<Type>(key: string): Type {
		return this.cache.get<Type>(key);
	}

	del(key: string): void {
		this.cache.del(key);
	}
}