export const getData = async (
  url: string,
  token?: string,
  headers: object = {}
) => {
  const res = await fetch(url, {
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Connection: "keep-alive",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  // const data = await res.json();
  return res;
};
// export const getData = async (url, token, header = {}, customURL) => {
//     const res = await axios.get(`${customURL ? customURL : url}`, {
//       headers: token
//         ? {
//             Authorization: `Bearer ${token}`,
//             ...header,
//           }
//         : { ...header },
//     });
//     return res;
//   };
export const postData = async (
  url: string,
  _data?: object | null,
  token?: string,
  headers: object = {}
) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Connection: "keep-alive",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  // const data = await res.json();
  return res;
};
export const putData = async (
  url: string,
  _data: object,
  token: string,
  headers: object = {}
) => {
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(_data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Connection: "keep-alive",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  const data = await res.json();
  return data;
};

export const deleteData = async (
  url: string,
  token: string,
  headers: object = {}
) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Connection: "keep-alive",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  const data = await res.json();
  return data;
};

interface Error {
  status?: number;
  info?: any;
}
export const fetcher = async (
  endpoint?: string,
  token?: string,
  customURL?: string,
  header?: object
) => {
  const res = await fetch(`${customURL ? customURL : endpoint}`, {
    method: "GET",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          ...header,
        }
      : { ...header },
  });
  if (!res.ok) {
    const error = new Error(
      "An error occurred while fetching the data."
    ) as Error;
    // if (error instanceof Error) {
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
    // }
  }
  return res.json();
};
