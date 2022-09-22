export class ForbiddenError extends Error {
	statusCode: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "ForbiddenError";
		this.statusCode = 403;
	}
}