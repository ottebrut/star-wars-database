export function getLocalStorageData<T>(key: string): T | null {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data) as T;
  }
  return null;
}

export function setLocalStorageData(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}
