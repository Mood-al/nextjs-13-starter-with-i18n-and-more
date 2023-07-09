import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <main>
      {t("lorem_ipsum_40")}
      {locale}
    </main>
  );
}
