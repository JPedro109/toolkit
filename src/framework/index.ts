import { jsonWebToken } from "../modules/JsonWebToken";
import { environment } from "../modules/Environment";
import { email } from "../modules/Email";
import { cache } from "../modules/Cache";
import { password } from "../modules/Password";
import { validation } from "../modules/Validation";

export class Fk {
	static jsonWebToken = jsonWebToken;
	static environment = environment;
	static email = email;
	static cache = cache;
	static password = password;
	static validation = validation;
}