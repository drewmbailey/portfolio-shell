/**
 * Check if a URL is reachable.
 * Returns true if the response is a 2xx or 3xx HTTP status.
 */
export async function isUrlAvailable(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
    });

    return response.ok || (response.status >= 300 && response.status < 400);
  } catch {
    return false;
  }
}
