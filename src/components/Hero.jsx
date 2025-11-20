import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#EEE7FF]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-800 shadow-sm"
        >
          Giftnama · One‑stop gifting made effortless
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          A clean, modern gifting experience for every moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg text-gray-700"
        >
          Curated fragrances, gourmet hampers, and personalized keepsakes — beautifully packaged and delivered with care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#products" className="inline-flex items-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black transition">
            Shop our bestsellers
          </a>
          <a href="#why" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow border border-black/10 hover:bg-gray-50 transition">
            Why Giftnama
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#EEE7FF] via-transparent to-transparent" />
    </section>
  )
}
