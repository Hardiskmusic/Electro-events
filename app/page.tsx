'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function HomePage() {
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('events').select('*')
      console.log('✅ Données reçues depuis Supabase :', data)
      if (error) {
        console.error('❌ Erreur Supabase :', error.message)
      }
    }

    fetchData()
  }, [])

  return (
    <main>
      <h1>Bienvenue sur Electro-events</h1>
      <p>Ouvre la console du navigateur pour voir si Supabase fonctionne</p>
    </main>
  )
}
