
import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import { PhoneCall } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";


export const metadata = {
  title: 'MTH Tiling: Wall and Floor Tiling Services',
  description: 'MTH Tiling offers high-quality wall and floor tiling services in Brisbane. Our expert team specializes in wall and floor renovations, ensuring a perfect finish every time. Contact us today for a free quote!',
  keywords: ['wall tiling', 'floor tiling', 'Brisbane tiling services', 'MTH Tiling', 'high-quality tiling', 'expert tilers', 'home renovation'],
  icons: {
    icon: '/logo.png',
  }
};

export default function WallAndFloorPage() {
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
          src="/wall-and-floor-desktop.svg"
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
              MTH Tiling Wall and Floor Tiling Services
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-700 text-lg dark:text-gray-300">
                At MTH Tiling, we bring craftsmanship, quality, and design
                together to elevate the heart of your home—its floors and walls.
                Whether you're refreshing a single feature wall, revamping a
                room, or planning a full-home makeover, our expert team delivers
                stunning tiling and renovation solutions that balance beauty,
                durability, and practicality.
                <br />
                <br />
                We specialize in transforming flooring with premium materials
                and flawless installation. From classic ceramic and porcelain to
                modern wood-look and natural stone tiles, we offer a wide range
                of styles and finishes tailored to your space. Whether you want
                a sleek, polished living room floor or a functional,
                easy-to-clean surface in your kitchen or bathroom, our floor
                tiling solutions provide a lasting foundation that’s both
                stylish and tough against daily wear.
                <br />
                <br />
                Our floor renovation services go beyond just tiling—we handle
                full surface preparation, old flooring removal, leveling, and
                smooth transitions between rooms. Every step is executed with
                care to ensure your new floors look incredible and perform even
                better.
                <br />
                <br />
                Walls are more than just structural—they’re a canvas for
                expression. Our wall tiling services help you turn blank
                surfaces into design features that reflect your personality.
                Whether it’s ceramic, porcelain, mosaic, or natural stone, we
                help you pick the perfect materials to match your vision and
                complement your space. From a bold bathroom accent wall to a
                sophisticated kitchen backsplash or a refined living room
                feature, we manage everything from tile selection and layout
                planning to prep and installation. Our team ensures a seamless,
                professional finish every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-3 gap-4 px-4 sm:grid-cols-2">
          <Image
            src="/gallery/square/wall-2.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/wall-1.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/wall-3.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/floor-1.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/floor-2.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/wall-4.jpg"
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
