import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
	name: Yup.string()
		.required('Full Name is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	website: Yup.boolean(),
	automation: Yup.boolean(),
	mobileApp: Yup.boolean(),
	others: Yup.boolean(),
	message: Yup.string().optional(),
});

