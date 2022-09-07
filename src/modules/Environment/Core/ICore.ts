export interface ICore {
	getValue(key: string): string | undefined;
	getRequiredValue(key: string): string
}