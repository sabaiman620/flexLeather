"use client"

import Image from "next/image"
import { ShieldCheck, Wrench, Lock, Star } from "lucide-react"

export default function AboutAndValues() {
  return (
    <section className="space-y-14">

      {/* =========================
          WHAT SETS US APART
      ========================== */}
      <div className="w-full bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center px-4">

          <h3 className="text-xl md:text-3xl font-serif font-medium tracking-wide text-[#E6D8C8] font-semibold mb-8">
            What Sets Us Apart
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              {
                icon: <ShieldCheck size={20} strokeWidth={1.5} />,
                title: "Premium Quality",
                description:
                  "We use genuine leather and carefully selected materials to create products built for lasting quality.",
              },
              {
                icon: <Wrench size={20} strokeWidth={1.5} />,
                title: "Expert Craftsmanship",
                description:
                  "Every piece is crafted with precision, attention to detail, and respect for traditional leatherwork.",
              },
              {
                icon: <Lock size={20} strokeWidth={1.5} />,
                title: "Secure Shopping",
                description:
                  "Shop with confidence through secure payments, reliable delivery, and a smooth buying experience.",
              },
              {
                icon: <Star size={20} strokeWidth={1.5} />,
                title: "Customer First",
                description:
                  "Your satisfaction comes first. We’re here to make every purchase simple, personal, and worthwhile.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="min-h-[130px] bg-primary/90 rounded-lg shadow-sm px-6 py-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="w-full h-full rounded-[18px] flex flex-col items-center justify-center gap-4 p-4 border border-white/30">

                  <div className="bg-amber-600 text-white rounded-full p-3 shadow-md">
                    {c.icon}
                  </div>

                  <div className="font-serif text-sm md:text-base text-[#E6D8C8] font-semibold">
                    {c.title}
                  </div>

                  <p className="text-xs text-[#D8CDBF] opacity-85 max-w-[14rem]">
                    {c.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>


      {/* =========================
          ABOUT US
      ========================== */}
      <div className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 xl:gap-16 items-center">

            {/* =========================
                LEFT: IMAGE COLLAGE
            ========================== */}
            <div className="flex justify-center w-full">

              <div className="relative w-full max-w-[620px] aspect-[1.3/1]">

                {/* Top Left - Leather Material */}
                <div className="absolute left-0 top-[6%] w-[52%] h-[45%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d2.png"
                    alt="Leather craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 95vw, 620px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>


                {/* Top Right - Craftsman */}
                <div className="absolute left-[54%] top-0 w-[44%] h-[51%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d1.png"
                    alt="Leather craftsman"
                    fill
                    sizes="(max-width: 1024px) 95vw, 620px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>


                {/* Bottom Left - Leather Bag */}
                <div className="absolute left-[2%] top-[53%] w-[35%] h-[40%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d4.png"
                    alt="Leather bag"
                    fill
                    sizes="(max-width: 1024px) 95vw, 620px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>


                {/* Bottom Right - Leather Work */}
                <div className="absolute left-[38%] top-[53%] w-[58%] h-[45%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d3.png"
                    alt="Leather making"
                    fill
                    sizes="(max-width: 1024px) 95vw, 620px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

              </div>
            </div>


            {/* =========================
                RIGHT: ABOUT CONTENT
            ========================== */}
            <div className="space-y-8">

              <div>
                <h3 className="text-4xl md:text-5xl font-serif font-semibold">
                  About Us
                </h3>
              </div>


              <p className="text-base md:text-[17px] leading-8 text-muted-foreground max-w-2xl">
                At Flex Leather, we create leather goods that bring together
                quality materials, practical design, and timeless style. Our
                collection is thoughtfully developed for everyday use — from
                work and travel to gifting and personal essentials. We pay
                attention to the details that make each piece feel both
                functional and refined.
              </p>


              {/* =========================
                  STATS
              ========================== */}
              <div className="grid grid-cols-3 gap-4 pt-4">

                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-semibold">
                    3+
                  </div>

                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    Years of Experience
                  </div>
                </div>


                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-semibold">
                    500+
                  </div>

                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    Happy Customers
                  </div>
                </div>


                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-semibold">
                    100%
                  </div>

                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    Genuine Leather
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}