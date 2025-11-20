export default function Why() {
  const items = [
    {
      title: 'Curated with love',
      desc: 'We handpick the best makers and brands to ensure every gift feels special.'
    },
    {
      title: 'Fast, careful delivery',
      desc: 'Nationwide shipping with tracking and protective packaging.'
    },
    {
      title: 'Thoughtful presentation',
      desc: 'Premium gift wrap and a personalized note included with every order.'
    },
    {
      title: 'Sustainable choices',
      desc: 'Eco‑friendly materials and carbon‑aware delivery partners.'
    }
  ]
  return (
    <section id="why" className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Why Giftnama</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white border border-black/10">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
