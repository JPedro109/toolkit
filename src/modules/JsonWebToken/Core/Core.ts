import jwt from "jsonwebtoken";
import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";
import { ICore } from "./ICore";

export class Core implements ICore {

	createToken(payload: object, secretKey: string, expiryTimeInSeconds: number): string {
		return jwt.sign(payload, secretKey, { expiresIn: expiryTimeInSeconds });
	}

	tokenVerification(token: string, secretKey: string): JsonWebTokenModel {
		const decode = jwt.verify(token, secretKey);

		if (typeof decode === "string") throw new Error("Incorrect type return");

		return decode;
	}
}