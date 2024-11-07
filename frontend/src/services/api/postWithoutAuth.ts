export const postWithoutAuth = async (url: string, data: unknown) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const response = await fetch(url, body);
    console.log(response);
    if (
      response.status === 400 ||
      response.status === 401 ||
      response.status === 404 ||
      response.status === 409
    ) {
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
