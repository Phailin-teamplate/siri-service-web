import "@/src/app/globals.css";
import { Inter, Noto_Sans_Lao, Noto_Sans_KR } from "next/font/google";

// Font setups
import { Inter, Noto_Sans_Lao, Noto_Sans_KR } from "next/font/google";

export const metadata = {
  title: "SIRI Service",
  description: "Laos-based professional service company",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
  <body className={`dark:bg-black bg-white ${inter.className}`}>
    {children}
  </body>
</html>

  );
}