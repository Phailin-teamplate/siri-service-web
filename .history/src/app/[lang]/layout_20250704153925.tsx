import "@/src/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Noto_Sans_Lao } from "next/font/google";
// Font setups
const inter = Inter({ subsets: ["latin"] });
const notoSansLao = Noto_Sans_Lao({ subsets: ["lao"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
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