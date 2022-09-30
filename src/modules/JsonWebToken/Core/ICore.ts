import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";

export interface ICore {
	createToken(payload: object, expiryTimeInSeconds: number): string;
	tokenVerification(token: string, secretKey: string): JsonWebTokenModel;
}