export interface IAdapter {
	sendMail(from: string, to: string, subject: string, template: string, context?: object): Promise<void>
}