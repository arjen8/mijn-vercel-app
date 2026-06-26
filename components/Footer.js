import Link from 'next/link';

const nav = [
  { label: 'Home',          href: '/' },
  { label: 'Vragenlijsten', href: '/vragenlijsten' },
  { label: 'Dashboard',     href: '/dashboard' },
  { label: 'Contact',       href: '/contact' },
];

const services = [
  'Vragenlijsten & Enquêtes',
  'Datastrategie',
  'Digitaal assetmanagement',
  'BIM-implementatie',
  'Change management',
  'Digital twin',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-extrabold text-xl text-white mb-3">
              <span className="bg-based-600 text-white text-xs font-black px-1.5 py-0.5 rounded">B</span>
              BASED
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Gedreven door technologie, gefocust op de mens. Wij bouwen digitale oplossingen voor ambitieuze organisaties.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Tilburg, Nederland<br />
              info@based.co.nl
            </p>
          </div>

          {/* Platform nav */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Based. Alle rechten voorbehouden.</p>
          <p>Samen werken aan de digitale toekomst.</p>
        </div>
      </div>
    </footer>
  );
}
