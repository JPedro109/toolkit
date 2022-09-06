import { IAdapter } from "./IAdapter";
import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";
import jwt from "jsonwebtoken";

export class Adapter implements IAdapter {

	createToken(payload: object, secretKey: string, expiryTime: number): string {
		return jwt.sign(payload, secretKey, { expiresIn: expiryTime });
	}

	tokenVerification(token: string, secretKey: string): JsonWebTokenModel {
		const decode = jwt.verify(token, secretKey);

		if (typeof decode === "string") throw new Error("Incorrect type return");

		return decode;
	}
}