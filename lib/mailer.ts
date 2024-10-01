"use server"

import { MailOptions, SMTPConfig } from "@/config/types";
import nodemailer, { SentMessageInfo } from "nodemailer";

const smtpOptions: SMTPConfig = {
	host: process.env.SMTP_HOST!,
	port: parseInt(process.env.SMTP_PORT!),
	secure: true,
	auth: {
		user: process.env.SMTP_USER!,
		pass: process.env.SMTP_PASSWORD!,
	},
};

const transporter = nodemailer.createTransport(smtpOptions);

export async function sendMail(
	options: MailOptions,
	cb?: (err: Error | null, info?: SentMessageInfo) => void
) {
	try {
		await transporter.verify();
		const res: SentMessageInfo = await transporter.sendMail({
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
