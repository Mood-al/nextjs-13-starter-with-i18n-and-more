import { IntlErrorCode, NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
// import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import useHTMLDirection from "@/hooks/useHTMLDirection";
import { ToastContainer } from "react-toastify";
import useIsRTL from "@/hooks/useIsRTL";

type LocaleLayoutProps = {
  children: JSX.Element | JSX.Element[];
  params: any;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = useLocale();

  let messages;
  try {
    // const res = await fetch("YOUR_API_ENDPOINT");
    //or you can set up your local messages check out next-intl docs
    // const constants = await res.json();
    // messages = constants[locale];
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
  }
  const isRTL = useIsRTL();
  const dir = useHTMLDirection();

  return (
    <html lang={locale} dir={dir}>
      <body className={dir}>
        <ToastContainer
          className="toastify-container"
          // transition={Zoom}
          // delay={2000}
          rtl={isRTL}
          position={isRTL ? "bottom-right" : "bottom-left"}
          hideProgressBar={true}
          autoClose={3500}
        />
        <Providers messages={messages} locale={locale}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
function reportToErrorTracking(error: any) {
  throw new Error("Function not implemented.");
}
