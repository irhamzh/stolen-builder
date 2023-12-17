export function capitalize(inputString: string): string {
	return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
}
