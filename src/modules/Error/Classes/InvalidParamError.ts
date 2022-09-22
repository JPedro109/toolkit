export class InvalidParamError extends Error {
	statusCode: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "InvalidParamError";
		this.statusCode = 400;
	}
}