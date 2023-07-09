// const cookieStore = cookies();

import { useLocale, useTranslations } from "next-intl";

// const _token: any = cookieStore.get("token")?.value;
export default function Home() {
  // const res = await getServerData(`${API_URL}/links`, undefined, {
  //   cache: "no-cache",
  // });
  // const data = await res.json();
  const locale = useLocale();
  const t = useTranslations();
  return (
    <main className="container mt-3">
      <div className="display-5">
        {t("Index.selected_locale_txt")}{" "}
        <span className="text-danger">{locale} </span> - {t("Index.title")}
      </div>
    </main>
  );
}
