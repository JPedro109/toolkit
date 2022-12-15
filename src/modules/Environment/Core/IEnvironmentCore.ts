export interface IEnvironmentCore {
	getValue(key: string): string | undefined;
	getRequiredValue(key: string): string
}