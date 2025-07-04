import "@/src/app/globals.css";

export const metadata = {
  title: "SIRI Service",
  description: "Laos-based professional service company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}