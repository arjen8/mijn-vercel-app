'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react';

const topics = [
  'Vragenlijsten & Enquêtes',
  'Datastrategie',
  'BIM-implementatie',
  'Digitaal assetmanagement',
  'Algemene vraag',
  'Demo aanvragen',
];

export default function ContactPage() {
  const [form, setForm]         = useState({ name: '', company: '', email: '', phone: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function canSubmit() {
    return form.name && form.company && form.email && form.message;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50">

      {/* Header */}
      <div className="gradient-hero dot-pattern text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-based-300 text-sm font-semibold uppercase tracking-widest mb-2">Neem contact op</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Wij staan voor u klaar</h1>
          <p className="text-blue-100 mt-2">Vertel ons over uw uitdaging — wij reageren binnen één werkdag.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-5 gap-10">

          {/* ── Contact info ── */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">
              <h2 className="font-bold text-slate-900 mb-5">Contactgegevens</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-based-50 text-based-700 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">E-mail</p>
                    <p className="text-sm text-slate-800 font-semibold">info@based.co.nl</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-based-50 text-based-700 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Telefoon</p>
                    <p className="text-sm text-slate-800 font-semibold">+31 (0)13 123 45 67</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-based-50 text-based-700 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Adres</p>
                    <p className="text-sm text-slate-800 font-semibold">Tilburg, Nederland</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-based-950 rounded-2xl p-7 text-white">
              <h3 className="font-bold mb-2">Demo aanvragen</h3>
              <p className="text-sm text-based-200 leading-relaxed mb-4">
                Wil u het platform in actie zien voor uw eigen organisatie? Wij verzorgen een persoonlijke demonstratie op locatie of online.
              </p>
              <ul className="space-y-2.5 text-sm text-based-200">
                {['Vrijblijvend en kosteloos','Afgestemd op uw sector','Met concrete use cases'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-based-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-10 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle2 size={52} className="text-emerald-500 mb-5" />
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Bericht ontvangen!</h2>
                <p className="text-slate-500 max-w-sm">
                  Bedankt, <strong>{form.name}</strong>. Wij nemen binnen één werkdag contact met u op via <strong>{form.email}</strong>.
                </p>
                <button
                  onClick={() => { setForm({ name:'',company:'',email:'',phone:'',topic:'',message:'' }); setSubmitted(false); }}
                  className="mt-8 px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Nieuw bericht versturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-5">
                <h2 className="font-bold text-slate-900 text-lg mb-2">Stuur ons een bericht</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Naam <span className="text-rose-500">*</span></label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Jan de Vries"
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-based-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Bedrijf <span className="text-rose-500">*</span></label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Organisatienaam"
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-based-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">E-mail <span className="text-rose-500">*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="jan@bedrijf.nl"
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-based-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Telefoon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+31 6 00 00 00 00"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-based-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Onderwerp</label>
                  <select
                    value={form.topic}
                    onChange={(e) => update('topic', e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-based-500 transition-colors bg-white"
                  >
                    <option value="">— Selecteer een onderwerp —</option>
                    {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Bericht <span className="text-rose-500">*</span></label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Beschrijf uw vraag of uitdaging…"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-based-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit() || loading}
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-all text-sm ${
                    canSubmit() && !loading
                      ? 'bg-based-700 text-white hover:bg-based-800'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {loading ? 'Versturen…' : <><Send size={16} /> Bericht versturen</>}
                </button>
                <p className="text-xs text-slate-400 text-center">Velden met <span className="text-rose-500">*</span> zijn verplicht.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
