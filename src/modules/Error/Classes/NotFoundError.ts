export class NotFoundError extends Error {
	statusCode: number;

	constructor(paramName: string) {
		super(paramName);
		this.name = "NotFoundError";
		this.statusCode = 404;
	}
}