import "dotenv/config";
import { ICore } from "./ICore";

export class Core implements ICore {

	getValue(key: string): string | undefined {
		return process.env[key];
	}

	getRequiredValue(key: string): string {
		const value = process.env[key];

		if (!value) throw new Error("The value of the environment variable is null");

		return process.env[key];
	}
}