type DashboardLayoutProps = {
  children: JSX.Element | JSX.Element[];
  params: any;
};

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ar" }];
// }

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  return <div>dashboard</div>;
}
