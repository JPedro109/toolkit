import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";

export interface IJsonWebTokenCore {
	createToken(payload: object, expiryTimeInSeconds: number): string;
	tokenVerification(token: string, secretKey: string): JsonWebTokenModel;
}