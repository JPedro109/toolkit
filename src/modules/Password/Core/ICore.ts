export interface ICore {
	encryptPassword(password: string): string;
	comparePasswordEncrypt(password: string, userPassword: string): boolean;
}