export default function toCapicalCase(text: string) {
	return text[0].toUpperCase() + text.slice(1, text.length);
}
