export default function replaceSpecialCharToSpace(
	oldText: string,
	character: string
) {
	return oldText.replace(character, ' ');
}
