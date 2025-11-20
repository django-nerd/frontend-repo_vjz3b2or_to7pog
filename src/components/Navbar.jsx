import { ShoppingBag, Search } from 'lucide-react'

export default function Navbar({ cartCount = 0, onSearch }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-black/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-xl tracking-tight">Giftnama</a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-sm text-gray-700 hover:text-gray-900">Shop</a>
          <a href="#why" className="text-sm text-gray-700 hover:text-gray-900">Why us</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              onChange={(e) => onSearch?.(e.target.value)}
              placeholder="Search gifts..."
              className="pl-8 pr-3 py-2 rounded-md border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
          <a href="#cart" className="relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-black/10">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-black text-white text-[10px] flex items-center justify-center">{cartCount}</span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}
