"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../lib/supabase"

export default function CreateEventPage() {
  const router = useRouter()
  const [session, setSession] = useState<any>(null)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        router.push("/auth/login")
      } else {
        setSession(data.session)
      }
    }
    getSession()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.from("events").insert({
      title,
      date,
      location,
    })

    if (error) {
      setMessage("Erreur : " + error.message)
    } else {
      setMessage("Événement créé avec succès !")
      setTitle("")
      setDate("")
      setLocation("")
    }
  }

  if (!session) return null

  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h1 className="text-2xl font-bold mb-6">Créer un événement</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre de l'événement"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lieu"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          Ajouter l’événement
        </button>
        {message && <p className="mt-2 text-sm text-center">{message}</p>}
      </form>
    </div>
  )
}
