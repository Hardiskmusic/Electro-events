import { supabase } from "@/lib/supabase";
import { LineUp } from "@/components/LineUp";
import { MainBanner } from "@/components/MainBanner";
import { Navbar } from "@/components/Navbar";

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

  if (error) {
    return <div>Erreur lors du chargement : {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <MainBanner />
      <LineUp />

      <main className="p-6 text-white space-y-12">
        <h1 className="text-3xl font-bold mb-6">🎫 Événements à venir</h1>
        <ul className="grid gap-4">
          {events?.map((event: Event) => (
            <li key={event.id} className="border p-4 rounded-md bg-neutral-900">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>Date : {event.date}</p>
              <p>Lieu : {event.location}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
