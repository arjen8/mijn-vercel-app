import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'] });

export const metadata = {
  title: 'Based Platform — Digitale oplossingen voor uw organisatie',
  description: 'Based bouwt maatwerk digitale platforms voor ambitieuze organisaties. Vragenlijsten, analytics en rapportages op maat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
