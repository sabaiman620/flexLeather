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
    return () => { mounted = false }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = containerRef.current
    if (!el) return
    const step = el.clientWidth * 0.7
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  if (!products || products.length === 0) return null

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-serif">Trending Products</h3>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 bg-gray-100 rounded">‹</button>
            <button onClick={() => scroll('right')} className="p-2 bg-gray-100 rounded">›</button>
          </div>
        </div>

        <div ref={containerRef} className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {products.map((p: any) => (
            <Link key={p._id} href={`/products/${p.slug}`} className="min-w-[160px] max-w-[200px] flex-shrink-0 bg-white border rounded p-3 text-center hover:shadow-md transition">
              <div className="relative w-full h-28 mb-3 rounded overflow-hidden bg-gray-50">
                <Image src={p.imageUrls?.[0] || '/placeholder.jpg'} alt={p.name} fill className="object-contain" />
              </div>
              <div className="text-xs text-muted-foreground mb-1"> <span className="inline-block bg-amber-600 text-white text-[10px] px-2 py-0.5 rounded">TRENDING</span></div>
              <div className="text-sm font-medium text-gray-900 mb-1">{p.name}</div>
              <div className="text-sm font-semibold">PKR {Number(p.price).toLocaleString()}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
