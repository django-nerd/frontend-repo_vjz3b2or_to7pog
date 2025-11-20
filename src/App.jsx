import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Why from './components/Why'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => (p.id || p._id) === (product.id || product._id))
      if (existing) {
        return prev.map((p) => (p.id || p._id) === (product.id || product._id) ? { ...p, qty: (p.qty || 1) + 1 } : p)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cart.reduce((n, i) => n + (i.qty || 1), 0)} />
      <Hero />
      <Products onAdd={addToCart} />
      <Why />

      <footer id="contact" className="border-t border-black/10 mt-16">
        <div className="container mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-extrabold text-lg">Giftnama</h3>
            <p className="text-sm text-gray-600 mt-2">Your one‑stop gifting solution. From elegant fragrances to personalized keepsakes — delivered beautifully.</p>
          </div>
          <div>
            <h4 className="font-semibold">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gray-900">Gift Wrapping</a></li>
              <li><a href="#" className="hover:text-gray-900">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Stay in the loop</h4>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <input placeholder="Email address" className="flex-1 px-3 py-2 border border-black/10 rounded-md" />
              <button className="px-4 py-2 rounded-md bg-gray-900 text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Giftnama. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
