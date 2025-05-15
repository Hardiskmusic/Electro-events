"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ElectroEvents
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            <Link href="/" className="text-white hover:text-purple-400">
              Accueil
            </Link>
            <Link href="/events" className="text-white hover:text-purple-400">
              Événements
            </Link>
            <Link href="/auth/login" className="text-white hover:text-purple-400">
              Connexion
            </Link>
            <Link href="/auth/register" className="rounded-full bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
              S’inscrire
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            <Link href="/" className="block text-white">
              Accueil
            </Link>
            <Link href="/events" className="block text-white">
              Événements
            </Link>
            <Link href="/auth/login" className="block text-white">
              Connexion
            </Link>
            <Link href="/auth/register" className="block rounded-full bg-pink-600 px-4 py-2 text-white">
              S’inscrire
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
