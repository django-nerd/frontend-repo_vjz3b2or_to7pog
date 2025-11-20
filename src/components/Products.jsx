import { useEffect, useState, useMemo } from 'react'
import ProductCard from './ProductCard'

export default function Products({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return products.filter(p => p.title?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q))
  }, [products, query])

  return (
    <section id="products" className="container mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Bestsellers</h2>
          <p className="text-gray-600 mt-1">Thoughtfully curated gifts people actually love.</p>
        </div>
        <input
          placeholder="Search gifts..."
          className="w-60 hidden sm:block px-3 py-2 border border-black/10 rounded-md"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id || p._id || p.title} product={p} onAdd={onAdd} />)
          )}
        </div>
      )}
    </section>
  )
}
