"use client";

import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import { PhoneCall } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";

export const metadata = {
  title: "MTH Tiling: Commercial Tiling Services",
  description:
    "MTH Tiling offers high-quality commercial tiling services in Brisbane. Our expert team specializes in commercial renovations, ensuring a perfect finish every time. Contact us today for a free quote!",
  keywords: [
    "MTH Tiling",
    "commercial tiling",
    "commercial renovation",
    "Brisbane tiling services",
    "high-quality tiling",
    "expert tilers",
    "commercial design",
    "home renovation",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function CommercialPage() {
  return (
    <div>
      <div className="fixed bottom-20 left-6 z-10">
        <Link href="tel:0432965533">
          <ShinyButton>
            <PhoneCall />
          </ShinyButton>
        </Link>
      </div>
      <div>
        <Image
          src="/outdoor-desktop.svg"
          width={1000}
          height={1000}
          alt="bathroom"
          className="hidden lg:block w-full h-auto absolute -z-1"
        />
      </div>
      <div className="fixed w-full z-50">
        <NavbarDemo />
      </div>
      <div>
        <div>
          <div className="w-full mx-auto px-4 pt-24 lg:pt-32 pb-24">
            <h1 className="font-semibold text-gray-800 text-5xl md:text-6xl dark:text-white max-w-4xl">
              MTH Tiling Commercial Tiling Services Brisbane
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-700 text-lg dark:text-gray-300">
                Elevate your commercial spaces with MTH Tiling's premier tiling
                and renovation services, designed to combine high performance
                with exceptional style. Whether you're revamping an office,
                retail environment, or any commercial property, our team
                delivers top-notch craftsmanship and materials that meet the
                demands of high-traffic areas while reflecting your brand’s
                identity.
                <br />
                <br />
                Our extensive selection of commercial-grade tiles includes
                everything from durable porcelain and ceramic to stylish stone
                and custom mosaics. Each tile is chosen for its durability and
                aesthetic appeal, ensuring that your floors and walls stand up
                to the rigors of daily use while providing a professional and
                polished look. Our installations are carried out with precision,
                minimizing downtime and ensuring that your business operations
                continue smoothly throughout the renovation process.
                <br />
                <br />
                At MTH Tiling, we understand the importance of creating an
                inviting and functional commercial environment. Our renovation
                services extend beyond tiling to include comprehensive planning
                and design solutions tailored to your specific needs. From
                enhancing customer-facing areas to optimizing workspace
                functionality, we work closely with you to create spaces that
                enhance productivity and leave a lasting impression on clients
                and employees alike.
                <br />
                <br />
                Trust MTH Tiling to deliver commercial tiling solutions that
                balance aesthetic sophistication with practical durability. Our
                commitment to quality and attention to detail ensures that your
                commercial spaces are not only visually impressive but also
                resilient, maintaining their appearance and performance for
                years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4">
          <Image
            src="/gallery/rectangle/commercial-1.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
        <BackgroundPaths />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
