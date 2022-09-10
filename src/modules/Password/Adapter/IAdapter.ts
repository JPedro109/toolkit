export interface IAdapter {
	encryptPassword(password: string): string;
	comparePasswordEncrypt(password: string, userPassword: string): boolean;
}