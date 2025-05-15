import './globals.css';

export const metadata = {
  title: 'Electro-events',
  description: 'Plateforme d’événements électro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
