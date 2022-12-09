export interface IGenerationCore {
	id(): string;
	token(): string;
	tokenExpirationTime(timeInMinutes: number): number;
}