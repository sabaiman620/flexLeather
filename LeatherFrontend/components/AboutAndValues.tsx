"use client"

import Image from 'next/image'
import { ShieldCheck, Wrench, Lock, Star } from 'lucide-react'

export default function AboutAndValues() {
  return (
    <section className="space-y-14">

     {/* What Sets Us Apart */}
<div className="w-full bg-primary py-12 md:py-16">
  <div className="max-w-5xl mx-auto text-center px-6">

    <h3 className="text-xl md:text-2xl font-serif font-light tracking-wide text-[#E6D8C8] mb-10">
      What Sets Us Apart
    </h3>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

      {[
        {
          icon: <ShieldCheck size={38} strokeWidth={1.5} />,
          title: 'Premium Quality',
        },
        {
          icon: <Wrench size={38} strokeWidth={1.5} />,
          title: 'Expert Craftsmanship',
        },
        {
          icon: <Lock size={38} strokeWidth={1.5} />,
          title: 'Secure Shopping',
        },
        {
          icon: <Star size={38} strokeWidth={1.5} />,
          title: 'Customer First',
        },
      ].map((c, i) => (
        <div
          key={i}
          className="
            min-h-[130px]
            bg-[#5a4640]
            shadow-md
            flex
            flex-col
            items-center
            justify-center
            gap-4
            px-4
            py-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#64504a]
            border
            border-[#75615a]
          "
        >
          <div className="text-[#E6D8C8]">
            {c.icon}
          </div>

          <div className="font-serif text-sm md:text-base text-[#E6D8C8]">
            {c.title}
          </div>
        </div>
      ))}

    </div>
  </div>
</div>
      {/* About Us */}
      <div className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">

            {/* LEFT: Larger About Image Collage */}
            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-[520px] aspect-[1.3/1]">

                {/* Top Left - Hands */}
                <div className="absolute left-0 top-[6%] w-[52%] h-[45%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d2.jpg"
                    alt="Leather craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                </div>

                {/* Top Right - Craftsman */}
                <div className="absolute left-[54%] top-0 w-[44%] h-[51%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d1.jpg"
                    alt="Leather craftsman"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                </div>

                {/* Bottom Left - Bag */}
                <div className="absolute left-[2%] top-[53%] w-[35%] h-[40%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d4.jpg"
                    alt="Leather bag"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                </div>

                {/* Bottom Right - Leather Work */}
                <div className="absolute left-[38%] top-[53%] w-[58%] h-[45%] rounded-xl overflow-hidden">
                  <Image
                    src="/About/d3.jpg"
                    alt="Leather making"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT: About Content */}
            <div className="space-y-8">

              <div>
                <h3 className="text-4xl md:text-5xl font-serif">
                  About Us
                </h3>

                <div className="flex items-center gap-1 mt-4">
                  <div className="w-12 h-[1px] bg-gray-400" />
                  <span className="text-gray-500 text-xs">
                    ∞
                  </span>
                  <div className="w-10 h-[1px] bg-gray-400" />
                </div>
              </div>

              <p className="text-base md:text-[17px] leading-8 text-muted-foreground max-w-2xl">
                At HF Hitmoxes, we believe leather is more than just a
                material—it's a legacy. Our journey began with a passion for
                craftsmanship and a commitment to creating leather goods that
                stand the test of time. Every product we make is a blend of
                tradition, quality, and modern functionality.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-semibold">
                    5+
                  </div>

                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    Years of Experience
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-semibold">
                    10K+
                  </div>

                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    Happy Customers
                  </div>
                </div>

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