"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'

export default function TrendingProducts() {
  const [products, setProducts] = useState<any[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mounted = true

    apiFetch('/api/v1/products/trending')
      .then((res: any) => {
        if (!mounted) return
        setProducts(res?.data || [])
      })
      .catch(() => {})

    return () => {
      mounted = false
    }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const container = containerRef.current
    if (!container) return

    const card = container.querySelector<HTMLElement>('[data-product-card]')
    if (!card) return

    const gap = 24
    const scrollAmount = card.offsetWidth + gap

    container.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  if (!products.length) return null

  return (
    <section className="w-full bg-white py-22">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl">
            Trending Products
          </h3>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar snap-x snap-mandatory"
          >
            {products.map((p: any) => (
              <Link
                key={p._id}
                href={`/products/${p.slug}`}
                data-product-card
                className="
                  flex-none snap-start
                  w-full
                  sm:w-[calc((100%-24px)/2)]
                  md:w-[calc((100%-48px)/3)]
                  lg:w-[calc((100%-72px)/4)]
                  rounded border bg-white p-4 text-center
                  transition hover:shadow-lg
                "
              >
                <div className="relative mb-3 h-56 w-full rounded bg-gray-50">
                  <Image
                    src={p.imageUrls?.[0] || '/placeholder.jpg'}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mb-2">
                  <span className="inline-block rounded bg-amber-600 px-2 py-0.5 text-[11px] text-white">
                    TRENDING
                  </span>
                </div>

                <div className="mb-1 text-sm font-medium text-gray-900 md:text-base">
                  {p.name}
                </div>

                <div className="text-sm font-semibold md:text-base">
                  PKR {Number(p.price).toLocaleString()}
                </div>
              </Link>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="
              absolute -left-14 top-1/2 z-20 hidden
              h-10 w-10 -translate-y-1/2
              items-center justify-center
              rounded-full border bg-white shadow-sm
              lg:flex
            "
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="
              absolute -right-14 top-1/2 z-20 hidden
              h-10 w-10 -translate-y-1/2
              items-center justify-center
              rounded-full border bg-white shadow-sm
              lg:flex
            "
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}