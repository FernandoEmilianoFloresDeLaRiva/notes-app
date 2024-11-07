import { AUTHKEY_LOCALSTORAGE } from "../../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteWithAuth = async (url: string, token: string) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    const body = {
      method: "DELETE",
      headers,
    };
    const response = await fetch(url, body);
    if (response.status === 401) {
      window.localStorage.removeItem(AUTHKEY_LOCALSTORAGE);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err: any = await response.json();
      throw new Error(err?.message);
    }
    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
