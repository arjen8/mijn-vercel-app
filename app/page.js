import Link from 'next/link';
import {
  ClipboardList, BarChart3, FileText, Shield, Puzzle, Smartphone,
  ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Vragenlijsten & Enquêtes',
    desc: 'Bouw en verspreid professionele vragenlijsten. Meerdere vraagtypes, logica en branding volledig naar wens.',
    color: 'bg-based-50 text-based-700',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Bekijk responsen live in een helder dashboard. Van aggregaten tot individuele antwoorden, altijd inzichtelijk.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: FileText,
    title: 'Maatwerk Rapportages',
    desc: 'Exporteer resultaten als PDF of Excel. Automatisch gegenereerde rapportages met uw huisstijl.',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Shield,
    title: 'Veilige Dataopslag',
    desc: 'AVG-compliant opslag binnen de EU. Volledige controle over wie toegang heeft tot uw data.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Puzzle,
    title: 'Integraties',
    desc: 'Koppel met bestaande tools als SharePoint, Power BI of uw eigen dataplatform via onze API.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: Smartphone,
    title: 'Multi-platform',
    desc: 'Werkt op elk apparaat. Desktop, tablet of mobiel — uw respondenten vullen in waar het hen uitkomt.',
    color: 'bg-cyan-50 text-cyan-700',
  },
];

const stats = [
  { value: '150+', label: 'tevreden klanten' },
  { value: '4.8',  label: 'gemiddelde score' },
  { value: '98%',  label: 'uptime garantie' },
];

const useCases = [
  { sector: 'Bouw & Vastgoed',    desc: 'Digitale volwassenheidsscan voor BIM-adoptie en datamanagement.' },
  { sector: 'Overheid',           desc: 'Medewerkerstevredenheid, beleidsevaluaties en publieksraadpleging.' },
  { sector: 'Zorg & Welzijn',     desc: 'Patiënttevredenheid, kwaliteitsmonitoring en procesoptimalisatie.' },
  { sector: 'Industrie',          desc: 'Leveranciersbeoordeling, audits en interne kwaliteitsmetingen.' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="gradient-hero dot-pattern text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 md:py-36">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Platform voor digitale innovatie
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Samen werken aan<br />
              <span className="text-based-300">uw digitale toekomst</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-10 leading-relaxed">
              Based bouwt maatwerk digitale oplossingen voor ambitieuze organisaties. Van vragenlijsten en analytics tot complete informatieplatforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/vragenlijsten"
                className="inline-flex items-center justify-center gap-2 bg-white text-based-800 font-bold px-7 py-3.5 rounded-xl hover:bg-based-50 transition-colors shadow-lg"
              >
                Start de demo <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-3 gap-6 divide-x divide-slate-100 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-2">
                <p className="text-3xl md:text-4xl font-extrabold text-based-700">{value}</p>
                <p className="text-sm text-slate-500 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-based-700 font-semibold text-sm uppercase tracking-widest mb-3">Functionaliteiten</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Alles wat uw platform nodig heeft
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Based levert kant-en-klare bouwstenen die wij aanpassen aan uw organisatie, processen en huisstijl.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-slate-100 card-hover shadow-sm"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${color} mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo preview ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-based-700 font-semibold text-sm uppercase tracking-widest mb-3">Live demo</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
                Digitale Volwassenheidsscan
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Wil u weten hoe digitaal volwassen uw organisatie is? Probeer onze interactieve scan — in vijf stappen inzicht in uw digitale startpositie.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Vijf gerichte vragen, resultaat in minder dan 3 minuten',
                  'Sectorspecifieke vergelijking met andere organisaties',
                  'Concrete aanbevelingen als uitkomst',
                  'Volledig aanpasbaar voor uw eigen vragenlijst',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="text-based-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/vragenlijsten"
                className="inline-flex items-center gap-2 bg-based-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-based-800 transition-colors"
              >
                Scan starten <ChevronRight size={18} />
              </Link>
            </div>

            {/* Mock questionnaire preview */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-inner">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Stap 2 van 5</span>
                <span className="text-xs font-semibold text-based-700">40%</span>
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full mb-8">
                <div className="h-1.5 bg-based-600 rounded-full w-2/5 transition-all" />
              </div>
              <p className="font-bold text-slate-800 mb-5">Hoe digitaal volwassen schat u uw organisatie in?</p>
              <div className="grid grid-cols-5 gap-2">
                {[1,2,3,4,5].map((n) => (
                  <div
                    key={n}
                    className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold border-2 transition-all ${
                      n === 3
                        ? 'bg-based-700 border-based-700 text-white'
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-400">Beginner</span>
                <span className="text-xs text-slate-400">Digitaal leader</span>
              </div>
              <button className="mt-8 w-full bg-based-700 text-white font-semibold py-3 rounded-xl text-sm">
                Volgende stap →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-based-700 font-semibold text-sm uppercase tracking-widest mb-3">Voor wie</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ingezet in diverse sectoren
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map(({ sector, desc }) => (
              <div key={sector} className="bg-white rounded-2xl p-6 border border-slate-100 card-hover shadow-sm">
                <h3 className="font-bold text-based-700 mb-2 text-sm">{sector}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="gradient-hero dot-pattern py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 tracking-tight">
            Klaar om te starten?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Wij staan naast u bij het begin van een nieuw digitaal avontuur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-based-800 font-bold px-8 py-3.5 rounded-xl hover:bg-based-50 transition-colors shadow-lg"
            >
              Demo aanvragen <ArrowRight size={18} />
            </Link>
            <Link
              href="/vragenlijsten"
              className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Bekijk de demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
