export class UnauthorizedError extends Error {
	statusCode: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "UnauthorizedError";
		this.statusCode = 401;
	}
}