import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";

export interface ICore {
	createToken(payload: object, secretKey: string, expiryTimeInSeconds: number): string;
	tokenVerification(token: string, secretKey: string): JsonWebTokenModel;
}