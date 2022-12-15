import { IGenerationCore } from "./IGenerationCore";
import { v4 } from "uuid";
import { randomBytes } from "crypto";

export class GenerationCore implements IGenerationCore {

	id(): string {
		return v4();
	}

	token(): string {
		return randomBytes(15).toString("hex");
	}

	tokenExpirationTime(timeInMinutes: number): number {
		return new Date().setMinutes(new Date().getMinutes() + timeInMinutes);
	}
}