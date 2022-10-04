import { BreakdownModel } from "../models/breakdown.model";

export class Constants {
  public static readonly defaultLanguage: string = 'en';
  public static readonly breakdownFixedRange: BreakdownModel[] = [
    { amount: 100000, rate: 5 },
    { amount: 300000, rate: 10 },
    { amount: 400000, rate: 15 },
    { amount: 500000, rate: 20 },
  ];
  public static readonly maximumTaxRate = 25;
}