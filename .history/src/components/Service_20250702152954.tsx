"use client";

import Image from "next/image";
import type { Metadata } from "next";
import Service1 from "@/public/service/service1.png";
import Service2 from "@/public/service/service2.png";
import Service3 from "@/public/service/service3.png";
import Service4 from "@/public/service/service4.png";
import Service5 from "@/public/service/service5.png";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Service() {
  return (
    <div className="w-full bg-white px-6 md:px-12 py-20" id="service">
      {/* Section Title */}
      <div className="text-center flex justify-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          Our Services
        </h2>
      </div>
<div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-10 space-y-20">
  {/* Service 1 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5">
    {/* Text */}
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Event Planning & Management
      </h1>
      <p className="text-gray-700 text-2xl md:text-2xl font-normal leading-relaxed">
        We provide end-to-end planning and<br />
        on-site management for government,<br />
        corporate, and institutional events<br />
        including forums, exhibitions, and<br />
        conferences.
      </p>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
      <Image
        src={Service1}
        alt="Service1"
        width={500}
        height={340}
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>
  </div>

  {/* Service 2 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5">
    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
      <Image
        src={Service2}
        alt="Service2"
        width={500}
        height={340}
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Interpretation & Translation (Korean–Lao / English–Lao)
      </h1>
      <p className="text-gray-700 text-2xl md:text-2xl font-normal leading-relaxed">
        Professional interpretation and document<br />
        translation services for meetings,<br />
        conferences, and official engagements,<br />
        delivered by experienced Lao interpreters<br />
        and translators.
      </p>
    </div>
  </div>
   {/* Service 3 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5">
    {/* Text */}
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Reservation & Administrative Support
      </h1>
      <p className="text-gray-700 text-2xl md:text-2xl font-normal leading-relaxed">
        We offer one-stop assistance for hotel,<br />
        vehicle, and flight bookings, as well as<br />
        support for visa applications, driver’s<br />
        licenses, vehicle registration, and<br />
        insurance for foreign visitors.
      </p>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
      <Image
        src={Service3}
        alt="Service3"
        width={500}
        height={340}
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>
  </div>
   {/* Service 4 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5">
    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
      <Image
        src={Service4}
        alt="Service4"
        width={500}
        height={340}
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Visual Design Services
      </h1>
      <p className="text-gray-700 text-2xl md:text-2xl font-normal leading-relaxed">
        Customized visual content for events,<br />
        including banners, posters, and<br />
        infographics — from concept design to<br />
        final delivery.
      </p>
    </div>
  </div>
  {/* Service 5 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5">
    {/* Text */}
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Publishing & Printing Services
      </h1>
      <p className="text-gray-700 text-2xl md:text-2xl font-normal leading-relaxed">
        Editing, designing, and printing of<br />
        materials such as forum booklets, leaflets,<br />
        and publications — complete support<br />
        from layout to binding.
      </p>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
      <Image
        src={Service5}
        alt="Service5"
        width={500}
        height={340}
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>
  </div>
</div>

    </div>
  );
}
