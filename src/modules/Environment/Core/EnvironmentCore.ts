import "dotenv/config";
import { IEnvironmentCore } from "./IEnvironmentCore";

export class EnvironmentCore implements IEnvironmentCore {

	getValue(key: string): string | undefined {
		return process.env[key];
	}

	getRequiredValue(key: string): string {
		const value = process.env[key];

		if (!value) throw new Error(`The value of the environment variable ${key} is null`);

		return process.env[key];
	}
}