import Homepage from "@/components/Homepage";
import { Metadata } from "next";
export const metadata = {
  title: "About | TEAMPLATE",
  description:
    "Learn about TEAMPLATE — our story, mission, team, and values that drive our innovation.",
  keywords: ["teamplate", "about", "our story", "mission", "values", "team"],
  openGraph: {
    title: "About | TEAMPLATE",
    description:
      "Discover TEAMPLATE's story, mission, and the people behind our success.",
    url: "https://yourdomain.com/about",
    siteName: "TEAMPLATE",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.jpg", // ✅ Replace with actual path
        width: 1200,
        height: 630,
        alt: "About TEAMPLATE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (

        <section className="w-full" id="about">
      <Homepage
        title="About TEAMPLATE"
        subtitle="Our story, mission, and the team behind our success"
      />
</section>
  );
}
