import jwt from "jsonwebtoken";
import { environment } from "../../Environment";
import { UnauthorizedError } from "../../Error/Classes/UnauthorizedError";
import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";
import { ICore } from "./ICore";

export class Core implements ICore {

	createToken(payload: object, expiryTimeInSeconds: number): string {
		return jwt.sign(payload, environment.getRequiredValue("JWT_SECRET_KEY"), { expiresIn: expiryTimeInSeconds });
	}

	tokenVerification(token: string): JsonWebTokenModel {
		try {
			const decode = jwt.verify(token, environment.getRequiredValue("JWT_SECRET_KEY"),);

			if (typeof decode === "string") throw new Error("Incorrect type return");
	
			return decode;
		} catch(e) {
			throw new UnauthorizedError("Token inválido");
		}
	}
}