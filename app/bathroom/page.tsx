import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import { PhoneCall } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";


export const metadata = {
  title: 'MTH Tiling: Bathroom Tiling and Renovation Services',
  keywords: ['bathroom tiling', 'bathroom renovation', 'Brisbane tiling services', 'MTH Tiling', 'high-quality tiling', 'expert tilers', 'bathroom design', 'home renovation'],
  description: 'MTH Tiling offers high-quality bathroom tiling and renovation services in Brisbane. Our expert team specializes in bathroom renovations, ensuring a perfect finish every time. Contact us today for a free quote!',
  icons: {
    icon: '/logo.png',
  },
};

export default function BathroomPage() {
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
          src="/bathroom-desktop.svg"
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
              MTH Tiling Bathroom Tiling and Renovation Services
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-700 text-lg dark:text-gray-300">
                Transform your bathroom into a luxurious retreat with MTH
                Tiling's expert tiling and renovation services. Whether you're
                envisioning a sleek modern design or a timeless, classic look,
                we bring your ideas to life with precision craftsmanship and
                top-tier materials. Our team specializes in complete bathroom
                transformations, from meticulous tile installations to full
                renovations that enhance both functionality and aesthetics.
                <br />
                <br />
                With MTH Tiling, every detail matters. We carefully select tiles
                that not only match your style but are also built for durability
                and moisture resistance, ensuring a long-lasting, pristine
                finish. From walls and floors to custom shower enclosures and
                backsplashes, we create cohesive, elegant designs that elevate
                your bathroom’s look and feel.
                <br />
                <br />
                Beyond tiling, we handle everything from fixture upgrades to
                layout improvements, making sure your new bathroom is as
                practical as it is beautiful. Our renovation process is smooth
                and efficient, minimizing disruption to your daily routine while
                maximizing results.
                <br />
                <br />
                Trust MTH Tiling to turn your bathroom into a space that blends
                luxury, comfort, and function. Whether it’s a small refresh or a
                full-scale renovation, we deliver superior craftsmanship,
                ensuring a bathroom that not only looks stunning but serves as
                your personal sanctuary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-3 gap-4 px-4 sm:grid-cols-2">
          <Image
            src="/gallery/square/bathroom-4.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/bathroom-5.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/bathroom-6.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/bathroom-7.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/bathroom-8.jpg"
            width={1000}
            height={1000}
            alt="bathroom"
            className="rounded-lg"
          />
          <Image
            src="/gallery/square/bathroom-9.jpg"
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
