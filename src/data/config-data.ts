import { TaxPayerCategory, TaxZone, Language } from '../models/enums';
import { getEnumValues } from "../utils/helpers";

export const taxPayerCategories: number[] = getEnumValues(TaxPayerCategory) as number[];
export const taxZones: number[] = getEnumValues(TaxZone) as number[];
export const languages: string[] = getEnumValues(Language) as string[];