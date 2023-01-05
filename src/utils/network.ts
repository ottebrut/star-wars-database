export async function getApiResponse<T>(url: string): Promise<T | false> {
  try {
    const res = await fetch(url);
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
