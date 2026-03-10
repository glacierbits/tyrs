import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TYRŠ — Music · Theatre · Dance · Praha',
  description:
    'A multi-disciplinary arts venue on Kampa Island, Prague. Presenting music, theatre, and dance that demands attention.',
  openGraph: {
    title: 'TYRŠ — Music · Theatre · Dance · Praha',
    description:
      'A multi-disciplinary arts venue on Kampa Island, Prague. Presenting music, theatre, and dance that demands attention.',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
