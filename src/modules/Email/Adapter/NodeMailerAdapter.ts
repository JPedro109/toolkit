import { IAdapter } from "./Interfaces/IAdapter";
import path from "path";
import nodemailer, { SentMessageInfo, Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

export class NodeMailerAdapter implements IAdapter {

	private mail: Transporter<SentMessageInfo>;
	private email: string;
	private password: string;
	private host: string;
	private port: number;
	private emailBodiesPath: string;
	private ssl?: boolean;

	constructor(host: string, port: number, email: string, password: string, emailBodiesPath: string, ssl?: boolean) {
		this.host = host;
		this.port = port;
		this.email = email;
		this.password = password;
		this.emailBodiesPath = emailBodiesPath;
		this.ssl = ssl;

		this.mail = nodemailer.createTransport({
			host: this.host,
			port: this.port,
			secure: this.ssl || false,
			auth: { user: this.email, pass: this.password }
		});

		this.mail.use("compile", hbs({
			viewEngine: {
				defaultLayout: null,
				partialsDir: path.resolve(this.emailBodiesPath)
			},
			viewPath: path.resolve(this.emailBodiesPath),
			extName: ".html"
		}));

	}

	async sendMail(to: string, subject: string, template: string, context?: object) {
		const email = {
			from: this.email,
			to,
			subject,
			template,
			context
		};

		await this.mail.sendMail(email);
	}
}