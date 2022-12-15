export interface IAdapter {
	set<Type>(key: string, value: Type, expiryTime?: number): void;
	get<Type>(key: string): Type;
	del(key: string): void;
}