"use client";

import Image from "next/image";
import type { Metadata } from "next";
import Service1 from "@/public/service/service1.png";
import Service2 from "@/public/service/service2.png";
import Service3 from "@/public/service/service3.png";
import Service4 from "@/public/service/service4.png";
import Service5 from "@/public/service/service5.png";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

const services = [
  {
    title: "Event Planning & Management",
    text: [
      "We provide end-to-end planning and",
      "on-site management for government,",
      "corporate, and institutional events",
      "including forums, exhibitions, and",
      "conferences.",
    ],
    image: Service1,
    reverse: false,
  },
  {
    title: "Interpretation & Translation (Korean–Lao / English–Lao)",
    text: [
      "Professional interpretation and document",
      "translation services for meetings,",
      "conferences, and official engagements,",
      "delivered by experienced Lao interpreters",
      "and translators.",
    ],
    image: Service2,
    reverse: true,
  },
  {
    title: "Reservation & Administrative Support",
    text: [
      "We offer one-stop assistance for hotel,",
      "vehicle, and flight bookings, as well as",
      "support for visa applications, driver’s",
      "licenses, vehicle registration, and",
      "insurance for foreign visitors.",
    ],
    image: Service3,
    reverse: false,
  },
  {
    title: "Visual Design Services",
    text: [
      "Customized visual content for events,",
      "including banners, posters, and",
      "infographics — from concept design to",
      "final delivery.",
    ],
    image: Service4,
    reverse: true,
  },
  {
    title: "Publishing & Printing Services",
    text: [
      "Editing, designing, and printing of",
      "materials such as forum booklets, leaflets,",
      "and publications — complete support",
      "from layout to binding.",
    ],
    image: Service5,
    reverse: false,
  },
];

export default function Service() {
  return (
<section id="service" className="scroll-mt-10">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-16 sm:py-20 lg:py-15">
        {/* Section Title */}
          <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#D3B156]">
                   Our Services
                </h2>
              </motion.div> 
   

        {/* Services List */}
        <div className="w-full max-w-screen-xl mx-auto space-y-20">
        {services.map((service, index) => (
  <motion.div
    key={index}
    className={`flex flex-col ${
      service.reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between gap-8 md:gap-12`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Text */}
    <motion.div
      className="w-full md:w-1/2 max-w-xl text-center md:text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
        {service.text.map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      className="w-full md:w-1/2 max-w-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
      viewport={{ once: true }}
    >
      <Image
        src={service.image}
        alt={`Service ${index + 1}`}
        width={500}
        height={340}
        className="object-cover w-full h-auto"
        priority
      />
    </motion.div>
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
}
