export class MissingParamError extends Error {
	code: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "MissingParamError";
		this.code = 400;
	}
}