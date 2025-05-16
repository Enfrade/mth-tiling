"use client";

import { NavbarDemo } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import Link from "next/link";
import { ShinyButton } from "@/components/magicui/shiny-button";

export const metadata = {
  title: "MTH Tiling: About Us",
  description: "MTH Tiling is a leading tiling company with over 20 years of experience in the industry. We specialize in providing high-quality tiling solutions for residential and commercial projects.",
  keywords: [
    "MTH Tiling",
    "tiling company",
    "tiling services",
    "residential tiling",
    "commercial tiling",
    "high-quality tiling",
    "tiling solutions",
    "Brisbane tiling services",
  ],
  icons: {
    icon: "/logo.png",
  },
};
export default function AboutPage() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
          src="/about-desktop.svg"
          alt="About MTH Tiling"
          width={1000}
          height={1000}
          className=" w-full h-full object-cover absolute -z-1"
        />
      </div>
      <div className="fixed z-50 w-full">
        <NavbarDemo />
      </div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="mt-20">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Choose MTH Tiling for Your Next Project
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              MTH Tiling is a leading tiling company with over 20 years of
              experience in the industry. We specialize in providing
              high-quality tiling solutions for residential and commercial
              projects. Our team of skilled professionals is dedicated to
              delivering exceptional results that exceed our clients'
              expectations.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link href={"/contact"}>
                <Button>
                  Contact us <ChevronRight />
                </Button>
              </Link>
              <Link href={"tel:0432965533"}>
                <Button variant="outline" className="hidden sm:inline-flex">
                  <PhoneCall /> 0432 965 533
                </Button>
              </Link>
            </div>
            {/* End Review */}
          </div>
          {/* End Col */}

          <div className="relative mt-0 sm:mt-50">
            <Image
              className="h-100 w-150 rounded-md sm:h-140 sm:w-150"
              width={1000}
              height={1000}
              src="/about.jpg"
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-1 bg-linear-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="space-y-4 px-4">
        <h1 className="text-6xl font-bold max-w-3xl">
          Check out our work on recent projects
        </h1>
        <p className="text-xl max-w-2xl">
          We've completed over 1000 projects over the years and we're proud of
          them all. Check some of our work below.
        </p>
        <div className="h-[80vh] w-full overflow-y-auto overflow-x-hidden">
          <div className="mb-[50vh]  py-12 text-center text-sm">
            Scroll down
          </div>
          <div className="flex h-[1200px] items-end justify-center pb-12">
            <InView
              viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.09 },
                },
              }}
            >
              <div className="columns-2 gap-4 px-8 sm:columns-3">
                {[
                  "/gallery/rectangle/bathroom-1.jpg",
                  "/gallery/rectangle/bathroom-2.jpg",
                  "/gallery/rectangle/bathroom-3.jpg",
                  "/gallery/rectangle/wall-1.jpg",
                  "/gallery/rectangle/outdoor-1.jpg",
                  "/gallery/rectangle/outdoor-2.jpg",
                  "/gallery/rectangle/pool-1.jpg",
                  "/gallery/rectangle/kitchen-1.jpg",
                  "/gallery/rectangle/commercial-1.jpg",
                  "/gallery/square/bathroom-4.jpg",
                  "/gallery/square/bathroom-5.jpg",
                  "/gallery/square/bathroom-6.jpg",
                  "/gallery/square/bathroom-7.jpg",
                  "/gallery/square/bathroom-8.jpg",
                  "/gallery/square/outdoor-3.jpg",
                ].map((imgSrc, index) => {
                  return (
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                      }}
                      key={index}
                      className="mb-4"
                    >
                      <img
                        src={imgSrc}
                        alt={`Image placeholder from cosmos.so, index:${index}`}
                        className="size-full rounded-lg object-contain"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </InView>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 border border-gray-200 dark:border-neutral-700 rounded-xl w-[95%] mx-auto p-5">
        <BackgroundPaths title="Contact MTH Tiling Renimagine Your Space" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
