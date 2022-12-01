export default function getPathSegments(pattern: string, url: string) {
  url = url[0] === '/' ? url.slice(1) : url;
  let urlSegments = url.split('/').slice(1);
  let keys = Array.from(pattern['matchAll'](/:(\w+)/g)).map(
    (match) => match[1]
  );
  console.log(urlSegments);
  console.log(keys);
  return Object['fromEntries'](
    keys.map((key, index) => [key, urlSegments[index]])
  );
}
