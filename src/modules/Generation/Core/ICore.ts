export interface ICore {
	id(): string;
	token(): string;
	tokenExpirationTime(timeInMinutes: number): number;
}