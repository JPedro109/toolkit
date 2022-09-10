export class InvalidParamError extends Error {
	code: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "InvalidParamError";
		this.code = 400;
	}
}