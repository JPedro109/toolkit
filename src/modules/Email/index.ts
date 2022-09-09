import { environment } from "../Environment";
import { Adapter } from "./Adapter/Adapter";
import { Core } from "./Core/Core";

const adapter = environment.getValue("INITIALIZED_EMAIL_MODULE") ? new Adapter(
	environment.getRequiredValue("PROVIDER_HOST_EMAIL_MODULE"),
	parseInt(environment.getRequiredValue("PROVIDER_PORT_EMAIL_MODULE")),
	environment.getRequiredValue("PROVIDER_EMAIL_EMAIL_MODULE"),
	environment.getRequiredValue("PROVIDER_PASSWORD_EMAIL_MODULE"),
	environment.getRequiredValue("PROVIDER_EMAILBODIESPATH_EMAIL_MODULE"),
	Boolean(environment.getValue("PROVIDER_SSL_EMAIL_MODULE"))
) : null;

export const email = new Core(adapter);