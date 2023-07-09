import { getRequestConfig } from "next-intl/server";
import { cache } from "react";

interface IObjectKeys {
  [key: string]: string;
}
export default getRequestConfig(
  cache(async ({ locale }) => {
    // const res = await fetch("YOUR_API_ENDPOINT");
    //or you can set up your local messages check out next-intl docs
    // const constants = await res.json();

    const contants = {};

    return {
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  })
);
