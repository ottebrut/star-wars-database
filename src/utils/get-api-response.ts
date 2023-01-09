export async function getApiResponse<T>(
  url: string,
  controller?: AbortController
): Promise<T | false> {
  try {
    const res = await fetch(url.replace("http:", "https:"), {
      signal: controller?.signal,
    });
    if (!res.ok) {
      console.error("Could not fetch:", res.status);
      return false;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error("Could not fetch:", err);
    return false;
  }
}

export function getApiResponses<T>(urls: string[]): Promise<(T | false)[]> {
  return Promise.all(urls.map((url) => getApiResponse<T>(url)));
}
