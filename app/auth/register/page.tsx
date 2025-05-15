"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabase"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      const user = data.user
      if (user) {
        // ✅ Crée un profil dans la table `profiles`
        await supabase.from("profiles").insert([
          { id: user.id, role: "organisateur" }
        ])
      }
      
      setMessage("Compte créé. Vérifie ta boîte mail.")
      // Optionnel : rediriger après quelques secondes
      // setTimeout(() => router.push("/auth/login"), 3000)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h1 className="text-2xl font-bold mb-6">Créer un compte organisateur</h1>
      <form onSubmit={handleRegister} className="space-y-4">
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
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded"
        >
          S'inscrire
        </button>
        {message && <p className="mt-2 text-sm text-center">{message}</p>}
      </form>
    </div>
  )
}
