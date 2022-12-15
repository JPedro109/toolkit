import { IAdapter } from "../Adapter/Interfaces/IAdapter";
import { IEmailCore } from "./IEmailCore";

export class EmailCore implements IEmailCore {

	constructor(private adapter: IAdapter) { }

	private moduleInialized() {
		if (!this.adapter) throw new Error("The email module inialized environment variable not set");
	}

	async sendMail(to: string, subject: string, template: string, context?: object): Promise<void> {
		this.moduleInialized();

		await this.adapter.sendMail(to, subject, template, context);
	}
}