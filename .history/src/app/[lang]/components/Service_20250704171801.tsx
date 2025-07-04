"use client";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "@/src/lib/i18n"; // import i18n setup
import Image from "next/image";
import Service1 from "@/public/service/service1.png";
import Service2 from "@/public/service/service2.png";
import Service3 from "@/public/service/service3.png";
import Service4 from "@/public/service/service4.png";
import Service5 from "@/public/service/service5.png";
import { motion } from "framer-motion";

const images = [Service1, Service2, Service3, Service4, Service5];

export default function Service() {
  const { t } = useTranslation();

  // Load the services from translation
  const services = t("services", { returnObjects: true }) as {
    title: string;
    text: string[];
  }[];

  return (
    <section id="service" className="md:scroll-mt-20 scroll-mt-15">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-5 sm:py-5 lg:py-15">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#D3B156]">
            {t("servicesSectionTitle")}
          </h2>
        </motion.div>

        <div className="w-full max-w-screen-xl mx-auto space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-8 md:gap-12`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
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

              <motion.div
                className="w-full md:w-1/2 max-w-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={images[index]}
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
