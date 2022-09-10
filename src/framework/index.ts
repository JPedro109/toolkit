import { jsonWebToken } from "../modules/JsonWebToken";
import { environment } from "../modules/Environment";
import { email } from "../modules/Email";
import { cache } from "../modules/Cache";
import { password } from "../modules/Password";

export class Fk {
	static jsonWebToken = jsonWebToken;
	static environment = environment;
	static email = email;
	static cache = cache;
	static password = password;
}