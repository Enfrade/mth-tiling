
import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import { PhoneCall } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";


export const metadata = {
  title: 'MTH Tiling: Outdoor Tiling Services',
  keywords: ['MTH Tiling', 'outdoor tiling', 'Brisbane tiling services', 'high-quality tiling', 'expert tilers', 'outdoor renovation', 'home renovation'],
  description: 'MTH Tiling offers high-quality outdoor tiling and renovation services in Brisbane. Our expert team specializes in outdoor renovations, ensuring a perfect finish every time. Contact us today for a free quote!',
  icons: {
    icon: '/logo.png',
  },
};

export default function OutdoorPage() {
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
              MTH Tiling Outdoor Tiling Services Brisbane
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-700 text-lg dark:text-gray-300">
                Revitalize your outdoor spaces with MTH Tiling's expert outdoor
                tiling and renovation services. Whether you’re creating a sleek
                patio, a stylish poolside area, or a durable walkway, our team
                provides the craftsmanship and high-quality materials necessary
                to elevate your exterior spaces. Outdoor tiling offers the
                perfect blend of beauty and resilience, allowing you to design a
                space that is not only visually striking but built to withstand
                the elements.
                <br />
                <br />
                At MTH Tiling, we offer a wide range of outdoor tiling options,
                including stone, porcelain, and non-slip surfaces, each designed
                to handle weather conditions while adding elegance to your
                outdoor areas. From modern minimalist designs to natural, earthy
                tones, our tiles are selected to complement your landscape and
                personal style. Our expert installers ensure every tile is laid
                with precision, creating a flawless finish that enhances the
                overall appeal of your exterior.
                <br />
                <br />
                But we don’t stop at tiling. Our outdoor renovation services
                include comprehensive preparation and design consultation,
                helping you optimize your space for functionality and
                aesthetics. Whether you're looking to create an inviting
                entertainment area or a peaceful outdoor retreat, we’ll guide
                you through every step, from layout planning to installation,
                ensuring that your outdoor space becomes a seamless extension of
                your home.
                <br />
                <br />
                With MTH Tiling, your outdoor areas will become stunning
                environments that you can enjoy year-round. Our focus on
                durability, style, and precision guarantees a long-lasting
                result that transforms your exterior into a beautiful,
                functional space that’s perfect for relaxing and entertaining.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-3 gap-4 px-4 sm:grid-cols-2">
          <Image
            src="/gallery/square/outdoor-1.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/outdoor-2.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/outdoor-3.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/outdoor-4.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/outdoor-5.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/outdoor-6.jpg"
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
