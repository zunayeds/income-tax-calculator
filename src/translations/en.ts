import { TranslationBaseModel } from "../models/translation-base.model";

export const enTranslation: TranslationBaseModel = {
	language: 'Language',
	languages: [
		'English',
		'বাংলা'
	],
	category: 'Tax Payer Category',
	categories: [
		'General',
		'Female / 65 or above aged',
		'Disabled',
		'Gazetted Freedom Fighters'
	],
	zone: 'Tax Zone',
	zones: [
		'Dhaka North / Dhaka South / Chattogram City Corporation',
		'Other City Corporation',
		'Outside City Corporation'
	]
};