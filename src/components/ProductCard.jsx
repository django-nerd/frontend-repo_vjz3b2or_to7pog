import { motion } from 'framer-motion'

export default function ProductCard({ product, onAdd }) {
  const image = product.images?.[0]?.url || 'https://images.unsplash.com/photo-1519681393784-d120267933ba'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img src={image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price?.toFixed?.(2) ?? product.price}</span>
          <button onClick={() => onAdd?.(product)} className="inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-semibold hover:bg-black">Add to cart</button>
        </div>
      </div>
    </motion.div>
  )
}
