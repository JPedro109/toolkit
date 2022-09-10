export class EmailInvalidError extends Error {
	code: number;

	constructor() {
		super();
		this.name = "EmailInvalidError";
		this.message = "Coloque um e-mail válido";
		this.code = 400;
	}
}