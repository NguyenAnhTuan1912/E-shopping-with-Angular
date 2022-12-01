export default function toTitleCase(text: string) {
  return text.replace(/(^\w|\s+\w)/gi, (c) => c.toUpperCase());
}
