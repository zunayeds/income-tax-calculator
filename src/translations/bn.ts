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
	]
};