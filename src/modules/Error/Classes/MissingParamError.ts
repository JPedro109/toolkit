export class MissingParamError extends Error {
	statusCode: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "MissingParamError";
		this.statusCode = 400;
	}
}