import { environment } from "../Environment";
import { NodeMailerAdapter } from "./Adapter/NodeMailerAdapter";
import { EmailCore } from "./Core/EmailCore";

const adapter = environment.getValue("INITIALIZED_EMAIL_MODULE") ? new NodeMailerAdapter(
	environment.getRequiredValue("PROVIDER_HOST_EMAIL_MODULE"),
	parseInt(environment.getRequiredValue("PROVIDER_PORT_EMAIL_MODULE")),
	environment.getRequiredValue("PROVIDER_EMAIL_EMAIL_MODULE"),
	environment.getRequiredValue("PROVIDER_PASSWORD_EMAIL_MODULE"),
	environment.getRequiredValue("PROVIDER_EMAILBODIESPATH_EMAIL_MODULE"),
	Boolean(environment.getValue("PROVIDER_SSL_EMAIL_MODULE"))
) : null;

export const email = new EmailCore(adapter);