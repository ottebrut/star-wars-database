export function getLocalStorageData<T>(
  key: string,
  isOfType?: (_: unknown) => boolean
): T | null {
  const data = localStorage.getItem(key);
  if (data) {
    const parsedData = JSON.parse(data);
    if (!isOfType || isOfType(parsedData)) {
      return parsedData;
    }
  }
  return null;
}

export function setLocalStorageData(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}
