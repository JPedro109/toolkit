import { IAdapter } from "../Adapter/IAdapter";
import { ICore } from "./ICore";

export class Core implements ICore {

	constructor(private adapter: IAdapter) { }

	encryptPassword(password: string): string {
		return this.adapter.encryptPassword(password);
	}
	comparePasswordEncrypt(password: string, userPassword: string): boolean {
		return this.adapter.comparePasswordEncrypt(password, userPassword);
	}
}