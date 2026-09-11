'use client'

import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { apiFetch } from '@/lib/api'

type CollectionItem = {
  _id: string
  name: string
  slug?: string
  collectionImageUrl?: string
}

export default function Categories() {
  const [categories, setCategories] = useState<CollectionItem[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)

  // Fetch categories
  useEffect(() => {
    let mounted = true

    apiFetch('/api/v1/categories')
      .then((res: any) => {
        if (!mounted) return

        const all: any[] = res?.data || []

        const mains = all.filter(
          (c) => !c.parentCategory && c.isActive !== false
        )

        const mapped: CollectionItem[] = mains.map((m) => ({
          _id: m._id,
          name: m.name,
          slug: m.slug,
          collectionImageUrl: m.collectionImageUrl || '',
        }))

        setCategories(mapped)
      })
      .catch(() => {})

    return () => {
      mounted = false
    }
  }, [])

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(5)
      }
    }

    updateItemsPerView()

    window.addEventListener('resize', updateItemsPerView)

    return () => {
      window.removeEventListener('resize', updateItemsPerView)
    }
  }, [])

  // Reset page when screen size changes
  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerView])

  // Split categories into pages
  const pages = useMemo(() => {
    const result: CollectionItem[][] = []

    for (let i = 0; i < categories.length; i += itemsPerView) {
      result.push(categories.slice(i, i + itemsPerView))
    }

    return result
  }, [categories, itemsPerView])

  const totalPages = pages.length

  const canGoPrevious = currentPage > 0
  const canGoNext = currentPage < totalPages - 1

  const goPrevious = () => {
    if (canGoPrevious) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const goNext = () => {
    if (canGoNext) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  return (
    <section className="bg-transparent py-16 md:py-20 relative">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-amber-700 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-amber-800 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Carousel */}
        <div className="relative">

          {/* LEFT ARROW */}
          {totalPages > 1 && (
            <button
              type="button"
              onClick={goPrevious}
              disabled={!canGoPrevious}
              aria-label="Previous categories"
              className={`
                absolute
                left-0
                sm:-left-2
                lg:-left-8
                top-1/2
                -translate-y-1/2
                z-30

                w-10 h-10
                md:w-12 md:h-12

                rounded-full
                flex items-center justify-center

                bg-white
                border border-neutral-200
                shadow-md

                transition-all duration-300

                ${
                  canGoPrevious
                    ? 'text-[#3b2622] hover:bg-[#3b2622] hover:text-white cursor-pointer'
                    : 'text-neutral-300 cursor-not-allowed'
                }
              `}
            >
              <ChevronLeft
                size={22}
                strokeWidth={1.8}
              />
            </button>
          )}

          {/* VIEWPORT */}
          <div className="overflow-hidden mx-7 sm:mx-10 lg:mx-12">

            {/* SLIDES */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >

              {pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full"
                >

                  {/* CATEGORY GRID */}
                  <div
                    className={`
                      grid
                      gap-3
                      sm:gap-4
                      md:gap-5
                      lg:gap-6

                      ${
                        itemsPerView === 2
                          ? 'grid-cols-2'
                          : itemsPerView === 3
                          ? 'grid-cols-3'
                          : 'grid-cols-5'
                      }
                    `}
                  >

                    {page.map((category) => (
                      <Link
                        key={category._id}
                        href={`/shop?category=${encodeURIComponent(
                          (
                            category.slug ||
                            category.name ||
                            ''
                          ).toLowerCase()
                        )}`}
                        className="group block min-w-0"
                      >

                        {/* CIRCLE */}
                        <div className="
                          relative
                          w-full
                          aspect-square
                          rounded-full
                          overflow-hidden
                          bg-neutral-700
                        ">

                          {/* IMAGE */}
                          <div className="
                            absolute
                            inset-0
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          ">

                            {category.collectionImageUrl ? (
                              <Image
                                src={category.collectionImageUrl}
                                alt={category.name}
                                width={500}
                                height={500}
                                className="
                                  w-full
                                  h-full
                                  object-cover
                                "
                              />
                            ) : (
                              <div className="
                                w-full
                                h-full
                                bg-neutral-700
                              " />
                            )}

                            {/* DARK OVERLAY */}
                            <div className="
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-black/65
                              via-black/25
                              to-transparent
                            " />

                          </div>

                          {/* CATEGORY NAME */}
                          <div className="
                            absolute
                            inset-0
                            flex
                            items-end
                            justify-center
                            pb-5
                            sm:pb-6
                            md:pb-7
                            lg:pb-8
                          ">

                            <h3 className="
                              text-[13px]
                              sm:text-sm
                              md:text-lg
                              lg:text-xl
                              xl:text-2xl
                              font-light
                              tracking-[0.08em]
                              md:tracking-[0.12em]
                              text-white
                              text-center
                              px-2
                              uppercase
                              leading-tight
                            ">
                              {category.name}
                            </h3>

                          </div>

                        </div>

                      </Link>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT ARROW */}
          {totalPages > 1 && (
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next categories"
              className={`
                absolute
                right-0
                sm:-right-2
                lg:-right-8
                top-1/2
                -translate-y-1/2
                z-30

                w-10 h-10
                md:w-12 md:h-12

                rounded-full
                flex items-center justify-center

                bg-white
                border border-neutral-200
                shadow-md

                transition-all duration-300

                ${
                  canGoNext
                    ? 'text-[#3b2622] hover:bg-[#3b2622] hover:text-white cursor-pointer'
                    : 'text-neutral-300 cursor-not-allowed'
                }
              `}
            >
              <ChevronRight
                size={22}
                strokeWidth={1.8}
              />
            </button>
          )}

        </div>

        {/* PAGINATION DOTS */}
        {totalPages > 1 && (
          <div className="
            flex
            justify-center
            items-center
            gap-2
            mt-7
            md:mt-8
          ">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to category page ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    currentPage === index
                      ? 'w-5 bg-[#d97706]'
                      : 'w-1.5 bg-neutral-300'
                  }
                `}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}