import { MainBanner } from "./components/MainBanner";
import { LineUp } from "./components/LineUp";
import { supabase } from "@/lib/supabase";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
};

export default async function HomePage() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  return (
    <main className="p-6 text-white space-y-12">
      <MainBanner />
      <LineUp />

      <section>
        <h2 className="text-3xl font-bold mb-6 mt-12">🎟️ Événements à venir</h2>

        {error && (
          <p className="text-red-500">Erreur lors du chargement : {error.message}</p>
        )}

        {events && events.length > 0 ? (
          <ul className="grid gap-4">
            {events.map((event: Event) => (
              <li
                key={event.id}
                className="border border-neutral-700 p-4 rounded-md bg-neutral-900"
              >
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p>Date : {event.date}</p>
                <p>Lieu : {event.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-400">Aucun événement à venir.</p>
        )}
      </section>
    </main>
  );
}
