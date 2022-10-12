import { IAdapter } from "../Adapter/IAdapter";
import { ICore } from "./ICore";

export class Core implements ICore {

	constructor(private adapter: IAdapter) { }

	private moduleInialized() {
		if (!this.adapter) throw new Error("The email module inialized environment variable not set");
	}

	async sendMail(to: string, subject: string, template: string, context?: object): Promise<void> {
		this.moduleInialized();

		await this.adapter.sendMail(to, subject, template, context);
	}
}