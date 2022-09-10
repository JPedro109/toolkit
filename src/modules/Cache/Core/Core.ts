import { IAdapter } from "../Adapter/IAdapter";
import { ICore } from "./ICore";

export class Core implements ICore {

	constructor(private adapter: IAdapter) { }

	set<Type>(key: string, value: Type, expiryTime?: number): void {
		this.adapter.set<Type>(key, value, expiryTime);
	}

	get<Type>(key: string): Type {
		return this.adapter.get<Type>(key);
	}

	del(key: string): void {
		this.adapter.del(key);
	}
}