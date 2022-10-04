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
	],
	taxBreakdown: {
		totalIncomeHeader: 'Total Income',
		taxRateHeader: 'Tax Rate',
		taxAmountHeader: 'Tax Amount',
		remainingHeader: 'Remaining',
		totalIncomeUpto: 'Upto first {{ number, format }} Taka',
		nextIncome: 'On the Next {{ number, format }} Taka',
		remainingIncomeAmount: 'On remaining {{ number, format }} Taka',
		remainingElse: 'For remaininging amount',
		taxRate: '{{ number, format }}%',
		taxAmount: '{{ number, format }}',
		remaining: '{{ number, format }}',
		grossTax: 'Gross Tax Amount'
	}
};