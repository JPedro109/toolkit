export class ForbiddenError extends Error {
	code: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "ForbiddenError";
		this.code = 403;
	}
}