import { jsonWebToken } from "../modules/JsonWebToken";
import { environment } from "../modules/Environment";
import { email } from "../modules/Email";
import { cache } from "../modules/Cache";
import { password } from "../modules/Password";
import { validation } from "../modules/Validation";
import { error } from "../modules/Error";
import { generation } from "../modules/Generation";

export class Toolkit {
	static jsonWebToken = jsonWebToken;
	static environment = environment;
	static email = email;
	static cache = cache;
	static password = password;
	static validation = validation;
	static error = error;
	static generation = generation;
}