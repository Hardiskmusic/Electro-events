export function MainBanner() {
  return (
    <section className="bg-black py-20 text-center text-white">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          ElectroEvents
        </span>
      </h1>
      <p className="mt-6 text-lg max-w-xl mx-auto text-gray-300">
        Découvrez les meilleurs événements électro en Suisse romande
        <br />
        et réservez vos billets dès maintenant.
      </p>
    </section>
  )
}
