export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const results = await response.json();
  return results;
}
