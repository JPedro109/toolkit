import { IAdapter } from "../Adapter/Interfaces/IAdapter";
import { IChacheCore } from "./IChacheCore";

export class ChacheCore implements IChacheCore {

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