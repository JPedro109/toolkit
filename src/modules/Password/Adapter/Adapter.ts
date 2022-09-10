import { IAdapter } from "./IAdapter";
import { hashSync, compareSync } from "bcryptjs";

export class Adapter implements IAdapter {

	encryptPassword(password: string): string {
		return hashSync(password, 10);
	}

	comparePasswordEncrypt(password: string, userPassword: string): boolean {
		return compareSync(password, userPassword);
	}
}