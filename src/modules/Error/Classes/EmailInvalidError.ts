export class EmailInvalidError extends Error {
	statusCode: number;

	constructor() {
		super();
		this.name = "EmailInvalidError";
		this.message = "Coloque um e-mail válido";
		this.statusCode = 400;
	}
}