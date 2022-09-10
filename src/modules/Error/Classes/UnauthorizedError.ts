export class UnauthorizedError extends Error {
	code: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "UnauthorizedError";
		this.code = 401;
	}
}