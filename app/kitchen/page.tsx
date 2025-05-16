"use client";

import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import { PhoneCall } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";


export const metadata = {
  title: 'MTH Tiling: Kitchen Tiling and Renovation Services',
  description: 'MTH Tiling offers high-quality kitchen tiling and renovation services in Brisbane. Our expert team specializes in kitchen renovations, ensuring a perfect finish every time. Contact us today for a free quote!',
  keywords: ['kitchen tiling', 'kitchen renovation', 'Brisbane tiling services', 'MTH Tiling', 'high-quality tiling', 'expert tilers', 'kitchen design', 'home renovation'],
  icons: {
    icon: '/logo.png',
  }
};

export default function KitchenPage() {
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
          src="/kitchen-desktop.svg"
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
              MTH Tiling Kitchen Tiling and Renovation Services
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-700 text-lg dark:text-gray-300">
                Reimagine your kitchen with MTH Tiling's premium tiling and
                renovation services, turning it into a space that blends style,
                function, and durability. Whether you're aiming for a sleek,
                contemporary kitchen or a warm, traditional vibe, our expert
                team brings your vision to life with precision and high-quality
                craftsmanship. From modern tile designs to full-scale kitchen
                remodels, we create spaces that inspire cooking and entertaining
                in an environment you’ll love.
                <br />
                <br />
                At MTH Tiling, we offer a wide selection of tiles—whether it’s
                elegant backsplashes, durable floor tiles, or statement walls,
                each choice is tailored to suit your style and the practical
                needs of a busy kitchen. Our materials are selected not only for
                their aesthetic appeal but also for their ability to withstand
                daily wear and tear, ensuring a lasting finish that looks
                pristine for years to come.
                <br />
                <br />
                But we go beyond tiling. Our comprehensive kitchen renovation
                services cover everything from cabinet and countertop
                installations to lighting and layout improvements, ensuring your
                new kitchen is both beautiful and highly functional. We work
                closely with you to optimize your kitchen’s layout for
                efficiency and ease, making sure that your cooking space isn’t
                just visually stunning, but also designed to enhance your
                everyday life.
                <br />
                <br />
                MTH Tiling is dedicated to delivering excellence in every aspect
                of your renovation, ensuring that every detail, from the tiles
                to the fixtures, aligns with your vision. Trust our team to
                transform your kitchen into the heart of your home, where style
                meets functionality in perfect harmony.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 ">
          <Image
            src="/gallery/rectangle/kitchen-1.jpg"
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
