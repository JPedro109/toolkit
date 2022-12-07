export interface IAdapter {
	sendMail(to: string, subject: string, template: string, context?: object): Promise<void>
}