import { IAdapter } from "../Adapter/IAdapter";
import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";
import { ICore } from "./ICore";

export class Core implements ICore {

	constructor(private adapter: IAdapter) { }

	createToken(payload: object, secretKey: string, expiryTimeInSeconds: number): string {
		return this.adapter.createToken(payload, secretKey, expiryTimeInSeconds);
	}

	tokenVerification(token: string, secretKey: string): JsonWebTokenModel {
		return this.adapter.tokenVerification(token, secretKey);
	}
}