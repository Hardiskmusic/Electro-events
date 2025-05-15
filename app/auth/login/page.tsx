"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage("Erreur : " + error.message)
    } else {
      setMessage("Connexion réussie ! Redirection en cours...")
      setTimeout(() => router.push("/create"), 2000)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h1 className="text-2xl font-bold mb-6">Connexion organisateur</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
        >
          Se connecter
        </button>
        {message && <p className="mt-2 text-sm text-center">{message}</p>}
      </form>
    </div>
  )
}
