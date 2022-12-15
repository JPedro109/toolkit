export interface IValidationCore {
	email(email: string): boolean;
	password(password: string): boolean;
}