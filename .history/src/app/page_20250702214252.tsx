import React from "react";
import Homepage from "@/src/components/Homepage";
import About from "@/src/components/About";
import Service from "@/src/components/Service";
import Customer from "@/src/components/Customer";
import PortfolioCarousel from "@/src/components/carousel";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Homepage | SIRI SERVICE",
  description:
    "Learn about SIRI SERVICE — our story, mission, team, and values that drive our innovation.",
  keywords: ["SIRI SERVICE", "about", "our story", "mission", "values", "team"],
  openGraph: {
    title: "Homepage | SIRI SERVICE",
    description:
      "Discover SIRI SERVICE's story, mission, and the people behind our success.",
    url: "https://yourdomain.com/about",
    siteName: "SIRI SERVICE",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.jpg", // ✅ Replace with actual path
        width: 1200,
        height: 630,
        alt: "About SIRI SERVICE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <section className="w-full" id="home">
      <ClientLayout>
        <Homepage />
        <About />
        <Service />
        <Customer />
        <PortfolioCarousel />
      </ClientLayout>
    </section>
  );
}
