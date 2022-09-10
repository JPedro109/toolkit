export interface ICore {
	email(email: string): boolean;
	password(password: string): boolean;
}