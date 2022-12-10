import { hashSync, compareSync } from "bcryptjs";
import { IPasswordCore } from "./IPasswordCore";

export class PasswordCore implements IPasswordCore {

	encryptPassword(password: string): string {
		return hashSync(password, 10);
	}

	comparePasswordEncrypt(password: string, userPassword: string): boolean {
		return compareSync(password, userPassword);
	}
}