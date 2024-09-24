export interface SMTPConfig {
	host: string;
	port: number;
	secure?: boolean;
	auth: {
		user: string;
		pass: string;
	};
}

export interface EmailFrom {
	name: string;
	address: string;
}

export interface MailOptions {
	from: EmailFrom;
	to?: string;
	subject: string;
	text?: string;
	html?: string;
}
