import { jsonWebToken } from "../modules/JsonWebToken";
import { environment } from "../modules/Environment";

export class Fk {
	static jsonWebToken = jsonWebToken;
	static environment = environment;
}