"use server"

import { MailOptions, SMTPConfig } from "@/config/types";
import nodemailer, { SentMessageInfo } from "nodemailer";

class MailService {
	private static instance: MailService;
	private transporter!: nodemailer.Transporter;

	static getInstance() {
		if (!MailService.instance) {
			MailService.instance = new MailService();
		}
		return MailService.instance;
	}

	async createConnection() {
		const smtpOptions: SMTPConfig = {
			host: process.env.SMTP_HOST!,
			port: parseInt(process.env.SMTP_PORT!),
			// cause of secure connection of server unable to use the secure connection
			secure: true,
			auth: {
				user: process.env.SMTP_USER!,
				pass: process.env.SMTP_PASSWORD!,
			},
		};
		this.transporter = nodemailer.createTransport(smtpOptions);
		if (await this.transporter.verify()) console.log("=> Mail Service started");
	}

	async sendMail(
		options: MailOptions,
		cb?: (err: Error | null, info?: SentMessageInfo) => void
	) {
		try {
			const res: SentMessageInfo = await this.transporter.sendMail({
				from: options.from,
				to: process.env.SITE_MAIL_RECIEVER || options.to,
				subject: options.subject,
				text: options.text,
				html: options.html,
			});
			if (cb) cb(null, res);
			else return res;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async verifyConnection() {
		return this.transporter.verify();
	}

	get getTransporter() {
		return this.transporter;
	}
}

const mailer = new MailService();
mailer.createConnection();
export default mailer;
