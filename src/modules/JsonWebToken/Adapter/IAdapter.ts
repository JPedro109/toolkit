import { JsonWebTokenModel } from "../Model/JsonWebTokenModel";

export interface IAdapter {
	createToken(payload: object, secretKey: string, expiryTime: number): string;
	tokenVerification(token: string, secretKey: string): JsonWebTokenModel;
}