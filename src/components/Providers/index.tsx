"use client";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import {
  SSRProvider,
  ThemeProvider as BootstrapThemeProvider,
} from "react-bootstrap";
import { AuthProvider } from "./AuthContext";
import { SWRConfig } from "swr";
import { fetcher } from "@/utils/HTTPService";
type ProvidersProps = {
  children: JSX.Element | JSX.Element[] | any;
  messages: any;
  locale: string;
};

const Providers = ({ children, messages, locale }: ProvidersProps) => {
  return (
    <NextIntlClientProvider
      // onError={onError}
      // getMessageFallback={getMessageFallback}
      onError={() => null}
      locale={locale}
      messages={messages}
    >
      <SSRProvider>
        <BootstrapThemeProvider dir={locale === "ar" ? "rtl" : "ltr"}>
          <SWRConfig
            value={{
              fetcher,
              onError: (e) => {
                console.log(e, "swr err");
              },
            }}
          >
            <AuthProvider>{children}</AuthProvider>
          </SWRConfig>
        </BootstrapThemeProvider>
      </SSRProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
