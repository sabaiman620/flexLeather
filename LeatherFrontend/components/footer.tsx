
import Link from 'next/link'
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import PaymentBadges from './PaymentBadges'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">

        {/* Footer Content Grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-[1fr_1fr_1.5fr_0.8fr]
          gap-x-12
          gap-y-12
          w-full
          mb-12
        ">

          {/* Brand */}
          <div className="min-w-0">
            <Link
              href="/"
              className="flex items-center gap-4 group mb-6"
            >
              <div className="relative w-14 h-14 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/logos.png"
                  alt="Flex Leather Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col text-primary-foreground ml-1">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-70">
                  Flex
                </span>
                <span className="text-[15px] font-serif font-bold tracking-widest uppercase leading-none">
                  Leather
                </span>
              </div>
            </Link>

            <p className="text-sm font-light leading-relaxed opacity-80 mt-4">
              Handcrafted luxury leather goods for the discerning individual.
            </p>
          </div>

          {/* Customer Service */}
          <div className="min-w-0">
            <h4 className="text-sm font-light tracking-wide mb-4">
              Customer Service
            </h4>

            <nav className="space-y-3">
              <Link
                href="/contact"
                className="block text-sm font-light opacity-80 hover:opacity-100"
              >
                Contact Us
              </Link>

              <Link
                href="/shipping-returns"
                className="block text-sm font-light opacity-80 hover:opacity-100"
              >
                Shipping & Returns
              </Link>

              <Link
                href="/faq"
                className="block text-sm font-light opacity-80 hover:opacity-100"
              >
                FAQ
              </Link>

              <Link
                href="/privacy-policy"
                className="block text-sm font-light opacity-80 hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="text-sm font-light tracking-wide mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm font-light opacity-80">

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+92 3003395535</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-words">
                  info@theflexleather.com
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="font-medium opacity-100 mb-1">
                    Corporate Office:
                  </p>

                  <p>
                    Plot # 3 Climax Garden Near Allena Hotel GT Road
                    <br />
                    Gujranwala Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Payment */}
          <div className="min-w-0">
            <h4 className="text-sm font-light tracking-wide mb-4">
              Payment
            </h4>

            <PaymentBadges />
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <h3 className="text-sm font-light tracking-wide mb-4 opacity-80">
            Subscribe to get latest updates and exclusive offers
          </h3>

          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                min-w-0
                px-4
                py-2
                bg-white/5
                border
                border-white/20
                text-sm
                font-light
                outline-none
                placeholder:text-white/60
              "
            />

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-light">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="
          border-t
          border-white/20
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          text-xs
          font-light
          opacity-75
          gap-4
        ">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} FlexLeather. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/flexleather.official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-100 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61584596186889"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-100 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@FlexLeather-f2h"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:opacity-100 transition"
            >
              <Youtube className="w-5 h-5" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  )
}
