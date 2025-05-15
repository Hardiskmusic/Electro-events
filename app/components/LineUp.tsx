export function LineUp() {
  const events = [
    {
      id: 1,
      title: "Sunset Vibes Lausanne",
      date: "21 juin 2025",
      location: "Les Docks, Lausanne",
    },
    {
      id: 2,
      title: "Electro Mountain Fest",
      date: "29 juin 2025",
      location: "Crans-Montana, Valais",
    },
    {
      id: 3,
      title: "Underground Night Geneva",
      date: "5 juillet 2025",
      location: "Le Zoo, Genève",
    },
  ]

  return (
    <section className="bg-gray-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Prochains événements</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-lg border border-white/10 bg-black p-6 shadow-lg hover:border-pink-600 transition">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="mt-2 text-gray-400">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
