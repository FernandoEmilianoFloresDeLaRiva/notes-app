import { AUTHKEY_LOCALSTORAGE } from "../../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postWithAuth = async (
  url: string,
  token: string,
  data: unknown
) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    const body = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const response = await fetch(url, body);
    if (response.status === 401) {
      window.alert("You are not authorized, please try again");
      window.localStorage.removeItem(AUTHKEY_LOCALSTORAGE);
      window.location.href = "/";
    }
    if (response.status === 400) {
      throw new Error("There was an error processing the request");
    }
    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
