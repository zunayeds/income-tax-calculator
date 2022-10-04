export interface TranslationBaseModel {
  language: string,
  languages?: string[],
  category: string,
  categories: string[],
  zone: string,
  zones: string[],
  taxBreakdown: taxBreakdownTranslationModel
}

interface taxBreakdownTranslationModel {
  totalIncomeHeader: string,
  taxRateHeader: string,
  taxAmountHeader: string,
  remainingHeader: string,
  totalIncomeUpto: string,
  nextIncome: string,
  remainingIncomeAmount: string,
  remainingElse: string,
  taxRate?: string,
  taxAmount?: string,
  remaining?: string,
  grossTax: string
}