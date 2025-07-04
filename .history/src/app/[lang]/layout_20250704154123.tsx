import "@/src/app/globals.css";
import { Inter, Noto_Sans_Lao, Noto_Sans_KR } from "next/font/google";

// Font setups
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lao = Noto_Sans_Lao({ subsets: ["lao"], variable: "--font-lao" });
const korean = Noto_Sans_KR({ subsets: ["korean"], variable: "--font-kr" });
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
    <html
      lang={params.lang}
      className={`${inter.variable} ${lao.variable} ${korean.variable}`}
    >
      <body className="bg-white dark:bg-black">
        {children}
      </body>
    </html>
  );
}
