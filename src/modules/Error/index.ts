import { UnauthorizedError } from "./Classes/UnauthorizedError";
import { ForbiddenError } from "./Classes/ForbiddenError";
import { MissingParamError } from "./Classes/MissingParamError";
import { InvalidParamError } from "./Classes/InvalidParamError";
import { EmailInvalidError } from "./Classes/EmailInvalidError";
import { PasswordInvalidError } from "./Classes/PasswordInvalidError";
import { NotFoundError } from "./Classes/NotFoundError";

export const error = {
	UnauthorizedError,
	ForbiddenError,
	MissingParamError,
	InvalidParamError,
	EmailInvalidError,
	PasswordInvalidError,
	NotFoundError
};