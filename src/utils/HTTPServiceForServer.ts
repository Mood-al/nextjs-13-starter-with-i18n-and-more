import { cookies } from "next/headers";

export const getServerData = async (
  url: string,
  token?: string,
  headers: object = {}
) => {
  const cookieStore = cookies();
  const _token: any = cookieStore.get("token")?.value;
  token = _token ? _token : token;
  console.log(_token);
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
// export const getServerData = async (url, token, header = {}, customURL) => {
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
export const postServerData = async (
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
export const putServerData = async (
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

export const deleteServerData = async (
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
