import { TranslationBaseModel } from "../models/translation-base.model";

export const bnTranslation: TranslationBaseModel = {
	language: 'ভাষা',
	category: 'করদাতার ধরন',
	categories: [
		'সাধারন',
		'মহিলা / ৬৫ বা তদূর্ধ্ব বয়সী',
		'প্রতিবন্ধী',
		'গেজেটভুক্ত যুদ্ধাহত মুক্তিযোদ্ধা'
	],
	zone: 'কর এলাকা',
	zones: [
		'ঢাকা উত্তর / ঢাকা দক্ষিন / চট্টগ্রাম সিটি কর্পোরেশন',
		'অন্যান্য সিটি কর্পোরেশন',
		'সিটি কর্পোরেশন বহির্ভুত'
	],
	taxBreakdown: {
		totalIncomeHeader: 'মোট আয়',
		taxRateHeader: 'কর হার',
		taxAmountHeader: 'করের পরিমাণ',
		remainingHeader: 'অবশিষ্ট',
		totalIncomeUpto: 'প্রথম {{ number, format }} টাকা পর্যন্ত',
		nextIncome: 'পরবর্তী {{ number, format }} টাকা পর্যন্ত',
		remainingIncomeAmount: 'অবশিষ্ট {{ number, format }} টাকার উপর',
		remainingElse: 'অবশিষ্ট টাকার উপর',
		grossTax: 'মোট আয়করের পরিমাণ'
	}
};