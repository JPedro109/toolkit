export interface IPasswordCore {
	encryptPassword(password: string): string;
	comparePasswordEncrypt(password: string, userPassword: string): boolean;
}