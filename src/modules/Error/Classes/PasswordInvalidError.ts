export class PasswordInvalidError extends Error {
	code: number;

	constructor() {
		super();
		this.name = "PasswordInvalidError";
		this.message = "Sua senha precisa ter 8 caracteres, uma letra maiúscula, uma minúscula e um número";
		this.code = 400;
	}
}