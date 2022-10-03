export function getEnumValues(enumType: any): string[] | number[] {
	let keys = Object.keys(enumType);
	if (Number.isInteger(+keys[0])) { // For number type enum
		keys = keys.slice(0, keys.length / 2);
	}
	return keys.map(type => { return enumType[type] });
}