import { ICore } from "./ICore";
import crypto from "crypto";
import uuid from "uuid";

export class Core implements ICore {

	id(): string {
		return uuid.v4();
	}

	token(): string {
		return crypto.randomBytes(15).toString("hex");
	}

	tokenExpirationTime(timeInMinutes: number): number {
		return new Date().setMinutes(new Date().getMinutes() + timeInMinutes);
	}
}