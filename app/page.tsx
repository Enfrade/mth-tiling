
import Image from "next/image";
import { NavbarDemo } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/magicui/ripple";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import {
  Bath,
  BrickWall,
  ChefHat,
  ChevronRight,
  Layers2,
  Store,
  TreePalm,
} from "lucide-react";
import { PhoneCall } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";

export const metadata = {
  title: "MTH Tiling: High Quality Tiling and Renovation Services",
  keywords: [
    "tiling",
    "renovation",
    "bathroom",
    "kitchen",
    "wall",
    "floor",
    "outdoor",
    "commercial",
    "Brisbane tiling services",
    "MTH Tiling",
    "high-quality tiling",
    "expert tilers",
  ],
  description: "MTH Tiling offers high-quality tiling and renovation services in Brisbane. Our expert team specializes in bathroom, kitchen, wall, floor, outdoor, and commercial tiling. Contact us today for a free quote!",
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="overflow-x-hidden">
      <div className="fixed bottom-20 left-6 z-10">
        <Link href="tel:0432965533">
          <ShinyButton>
            <PhoneCall />
          </ShinyButton>
        </Link>
      </div>
      <SmoothCursor />
      <div className="fixed z-50 w-full">
        <NavbarDemo />
      </div>
      <div>
        <Image
          src="/hero-desktop.svg"
          fill
          alt="hero image"
          className="absolute w-full hidden lg:block object-cover"
        />
        <Image
          src="/hero-mobile.svg"
          fill
          alt="hero image"
          className="absolute w-full lg:hidden block h-[100vh] object-cover"
        />
      </div>

      <div>
        <Ripple className="overflow-hidden sm:mt-[230px] mt-[380px] h-[100vh]" />
      </div>

      <div className="relative overflow-hidden mt-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-white border border-white/30 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-black/30 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-white/30">
              Welcome to MTH Tiling
              <span className="flex items-center gap-x-1">
                <Link
                  href={"tel:0432965533"}
                  className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700"
                >
                  Call us
                </Link>
                <svg
                  className="shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              High Quality Tiling and Renovation Services
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-300">
              We are a professional tiling and renovation company dedicated to
              providing high-quality services to our clients. Our team of
              experienced professionals is committed to delivering exceptional
              results on every project, no matter the size or complexity.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Link href={"/contact"}>
              <Button>Contact us</Button>
            </Link>
            <Link href={"tel:0432965533"}>
              <Button variant="outline">0432 965 533</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden mt-70 sm:mt-20">
        <div className="mx-auto mt-32 w-full max-w-2xl">
          <div className="text-center text-3xl text-foreground">
            <span className="text-indigo-900 dark:text-indigo-200">
              Take a look and go
            </span>

            <br />

            <span className="text-7xl">&quot;wow&quot;</span>
          </div>
        </div>

        <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#00cefc,transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </div>

        <div>
          <Image
            src="/gallery-desktop.svg"
            width={500}
            height={500}
            alt="hero image"
            className="absolute w-full -z-1"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 px-5 gap-3 -mt-40">
          <Image
            src="/gallery/bathroom-8.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-full h-full rounded-xl sm:mt-20 mt-0"
          />
          <Image
            src="/gallery/bathroom-5.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-full h-full rounded-xl"
          />
          <Image
            src="/gallery/bathroom-7.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-full h-full rounded-xl sm:mt-20 mt-0"
          />
          <Image
            src="/gallery/commercial-1.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-full h-full rounded-xl sm:mt-20 mt-0"
          />
          <Image
            src="/gallery/outdoor-2.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-full h-full rounded-xl"
          />
          <Image
            src="/gallery/pool-1.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-full h-full rounded-xl sm:mt-20 mt-0"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Image
          src="/services-desktop.svg"
          width={500}
          height={500}
          alt="hero image"
          className="absolute w-full -z-1 h-[100vh] object-cover opacity-50"
        />
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[url(/services-desktop.svg)] bg-cover bg-no-repeat bg-center">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-3xl font-bold md:text-5xl md:leading-tight dark:text-white">
            Every Service you Need for a Beautiful Home
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-300">
            MTH Tiling provides the essental services to make your home look
            like a dream.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/gallery/bathroom-1.jpg"
                alt="Blog Image"
                width={500}
                height={500}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                High Quality Bathroom Tiling and Renovation
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                Upgrade your bathroom with MTH Tiling&apos;s expert tiling
                services and innovative designs, creating a fresh, modern look.
                Our precision and focus on luxury ensure a flawless finish that
                exceeds expectations. Trust us to deliver beautifully crafted
                bathroom renovations that combine aesthetics with long-lasting
                quality.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-center gap-x-3">
              <div>
                <Link href={"/bathroom"}>
                  <Button>
                    Read More <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div>
                <Bath />
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/gallery/kitchen-1.jpg"
                alt="Blog Image"
                width={500}
                height={500}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                Premium Quality Kitchen Tiling and Renovation
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                Elevate your kitchen to a culinary masterpiece with MTH
                Tiling&apos;s expert tiling and renovation services. Our
                meticulous craftsmanship and premium materials ensure a perfect
                blend of modern design and functionality. Create a kitchen that
                is visually stunning and practical for cooking and entertaining.
                With MTH Tiling, your kitchen will be a true reflection of
                style, efficiency, and quality.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-center gap-x-3">
              <div>
                <Link href={"/kitchen"}>
                  <Button>
                    Read More <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div>
                <ChefHat />
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/gallery/wall-1.jpg"
                alt="Blog Image"
                width={500}
                height={500}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                MTH Tiling Expert Wall Tiling Services Brisbane
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                Transform your home with MTH Tiling&apos;s expert wall tiling
                services. Whether updating a single feature wall or redesigning
                an entire room, our meticulous attention to detail and premium
                materials guarantee flawless results. Add texture, color, and
                style to your walls, creating a timeless visual statement that
                is both durable and sophisticated. Trust MTH Tiling to enhance
                your space with wall tiling that reflects elegance and lasting
                beauty.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-center gap-x-3">
              <div>
                <Link href={"/wall-and-floor"}>
                  <Button>
                    Read More <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div>
                <BrickWall />
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/gallery/floor-1.jpg"
                alt="Blog Image"
                width={500}
                height={500}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                MTH Tiling Expert Floor Tiling Services
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                Elevate your home with MTH Tiling&apos;s stunning floor tiling,
                expertly designed to blend durability and style. Whether
                upgrading high-traffic areas or adding elegance to your living
                spaces, our skilled team guarantees precise installation using
                top-quality materials. Create a beautiful foundation that stands
                the test of time, enhancing both the aesthetic appeal and
                functionality of your home. With MTH Tiling, your floors will
                radiate sophistication while remaining practical for everyday
                life.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-center gap-x-3">
              <div>
                <Link href={"/wall-and-floor"}>
                  <Button>
                    Read More <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div>
                <Layers2 />
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/gallery/outdoor-1.jpg"
                alt="Blog Image"
                width={500}
                height={500}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                MTH Tiling Premium Outdoor Tiling Services
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                Revitalize your outdoor spaces with MTH Tiling&apos;s premium
                outdoor tiling solutions. Whether you&apos;re designing a
                beautiful patio, walkway, or poolside area, our durable tiles
                are crafted to withstand the elements while elevating your
                exterior’s aesthetic. Our skilled team guarantees precision
                installation, delivering a seamless finish that merges
                functionality with timeless design. Transform your outdoor
                living experience with MTH Tiling&apos;s high-quality tiling,
                perfect for any weather and every space.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-center gap-x-3">
              <div>
                <Link href={"/outdoor"}>
                  <Button>
                    Read More <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div>
                <TreePalm />
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/gallery/commercial-1.jpg"
                alt="Blog Image"
                width={500}
                height={500}
              />
            </div>

            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                MTH Tiling Beautiful Commercial Tiling Services
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                Enhance your business with MTH Tiling&apos;s beautiful
                commercial tiling services, designed to combine durability and
                style. Whether you need to upgrade high-traffic areas, reception
                spaces, or conference rooms, our expert team ensures precise
                installation with top-quality materials. Create an inviting
                atmosphere that elevates your brand while standing the test of
                time. With MTH Tiling, your commercial floors will radiate
                professionalism and practicality, making a lasting impression on
                clients and employees alike.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-center gap-x-3">
              <div>
                <Link href={"/commercial"}>
                  <Button>
                    Read More <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div>
                <Store />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="text-center mt-20 border border-gray-200 dark:border-neutral-700 rounded-xl w-[95%] mx-auto p-5">
        <BackgroundPaths />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
