// app/page.tsx
import { supabase } from "@/lib/supabase";
import MainBanner from "@/components/MainBanner";
import Navbar from "@/components/Navbar";
import LineUp from "@/components/LineUp";

export default async function HomePage() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    return <div>Erreur lors du chargement : {error.message}</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <MainBanner />
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Prochains événements</h2>
        <LineUp />
      </section>
      <section className="px-6 pb-10">
        <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {events?.map((event) => (
            <li
              key={event.id}
              className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-neutral-400 mb-1">Date : {event.date}</p>
                <p className="text-sm text-neutral-400">Lieu : {event.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
