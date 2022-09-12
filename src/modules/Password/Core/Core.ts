import { hashSync, compareSync } from "bcryptjs";
import { ICore } from "./ICore";

export class Core implements ICore {

	encryptPassword(password: string): string {
		return hashSync(password, 10);
	}

	comparePasswordEncrypt(password: string, userPassword: string): boolean {
		return compareSync(password, userPassword);
	}
}