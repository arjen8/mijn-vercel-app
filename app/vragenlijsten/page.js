'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, CheckCircle2, BarChart2 } from 'lucide-react';

/* ── Question definitions ── */
const questions = [
  {
    id: 1,
    type: 'radio',
    question: 'In welke sector bent u actief?',
    options: ['Bouw & Vastgoed', 'Overheid & Semi-overheid', 'Industrie', 'Gezondheidszorg', 'Anders'],
  },
  {
    id: 2,
    type: 'scale',
    question: 'Hoe digitaal volwassen schat u uw organisatie in?',
    min: 'Beginner',
    max: 'Digitaal leader',
    steps: 5,
  },
  {
    id: 3,
    type: 'checkbox',
    question: 'Welke uitdagingen ervaart uw organisatie? (meerdere keuzes mogelijk)',
    options: [
      'Gebrek aan datastructuur',
      'Verouderde IT-systemen',
      'Onvoldoende digitale vaardigheden',
      'Samenwerking tussen afdelingen',
      'Compliance & wet- en regelgeving',
      'Kosten van digitalisering',
    ],
  },
  {
    id: 4,
    type: 'radio',
    question: 'Wat is de omvang van uw organisatie?',
    options: ['< 50 medewerkers', '50–250 medewerkers', '250–1.000 medewerkers', '> 1.000 medewerkers'],
  },
  {
    id: 5,
    type: 'textarea',
    question: 'Beschrijf kort uw grootste digitale uitdaging',
    placeholder: 'Bijv. "Wij worstelen met het centraliseren van projectdata over afdelingen heen…"',
  },
];

/* ── Score labels ── */
function getProfile(score) {
  if (score <= 1) return { label: 'Digitale Starter',     color: 'text-rose-600',    bg: 'bg-rose-50',    bar: 'bg-rose-400',    pct: 20 };
  if (score <= 2) return { label: 'Digitale Verkenner',   color: 'text-amber-600',   bg: 'bg-amber-50',   bar: 'bg-amber-400',   pct: 40 };
  if (score <= 3) return { label: 'Digitale Groeier',     color: 'text-yellow-600',  bg: 'bg-yellow-50',  bar: 'bg-yellow-400',  pct: 60 };
  if (score <= 4) return { label: 'Digitaal Gevorderde',  color: 'text-based-600',   bg: 'bg-based-50',   bar: 'bg-based-500',   pct: 80 };
  return            { label: 'Digitaal Leader',           color: 'text-emerald-600', bg: 'bg-emerald-50', bar: 'bg-emerald-500', pct: 100 };
}

export default function VragenlijstenPage() {
  const [step, setStep]       = useState(0);   // 0 = intro, 1-5 = vragen, 6 = resultaat
  const [answers, setAnswers] = useState({});

  const q      = questions[step - 1];
  const total  = questions.length;
  const pct    = step === 0 ? 0 : Math.round((step / total) * 100);

  /* ── Handlers ── */
  function handleRadio(val) {
    setAnswers((a) => ({ ...a, [step]: val }));
  }

  function handleScale(val) {
    setAnswers((a) => ({ ...a, [step]: val }));
  }

  function handleCheckbox(val) {
    setAnswers((a) => {
      const current = a[step] || [];
      return {
        ...a,
        [step]: current.includes(val) ? current.filter((v) => v !== val) : [...current, val],
      };
    });
  }

  function handleTextarea(val) {
    setAnswers((a) => ({ ...a, [step]: val }));
  }

  function canContinue() {
    if (step === 0) return true;
    const ans = answers[step];
    if (!ans) return false;
    if (Array.isArray(ans)) return ans.length > 0;
    return String(ans).trim().length > 0;
  }

  function next() {
    if (!canContinue()) return;
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  /* ── Result calc ── */
  const scoreRaw = Number(answers[2]) || 1;
  const profile  = getProfile(scoreRaw);

  /* ──────────────────────────────────────────── */
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50">

      {/* Page header */}
      <div className="gradient-hero dot-pattern text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-based-300 text-sm font-semibold uppercase tracking-widest mb-2">Demo vragenlijst</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Digitale Volwassenheidsscan</h1>
          <p className="text-blue-100 mt-3">Vijf vragen. Volledig inzicht in uw digitale startpositie.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* ── INTRO ── */}
        {step === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 animate-fade-in">
            <div className="flex items-center justify-center w-14 h-14 bg-based-50 text-based-700 rounded-2xl mb-6 mx-auto">
              <BarChart2 size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-3">Hoe digitaal is uw organisatie?</h2>
            <p className="text-slate-500 text-center mb-8 leading-relaxed">
              Beantwoord vijf gerichte vragen en ontvang direct inzicht in uw digitale volwassenheid — inclusief een persoonlijk profiel en aanbevelingen van Based.
            </p>
            <ul className="space-y-3 mb-8">
              {['Duurt slechts 2–3 minuten', 'Geen registratie vereist', 'Resultaat direct zichtbaar', 'Volledig anoniem'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={17} className="text-based-600 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={next}
              className="w-full bg-based-700 text-white font-bold py-3.5 rounded-xl hover:bg-based-800 transition-colors flex items-center justify-center gap-2"
            >
              Scan starten <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* ── QUESTION ── */}
        {step >= 1 && step <= total && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 animate-fade-in">

            {/* Progress */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Vraag {step} van {total}</span>
              <span className="text-xs font-bold text-based-700">{pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full mb-8">
              <div
                className="h-1.5 bg-based-600 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-6">{q.question}</h2>

            {/* RADIO */}
            {q.type === 'radio' && (
              <div className="space-y-3">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleRadio(opt)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      answers[step] === opt
                        ? 'border-based-600 bg-based-50 text-based-800'
                        : 'border-slate-200 text-slate-700 hover:border-based-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* SCALE */}
            {q.type === 'scale' && (
              <>
                <div className="grid grid-cols-5 gap-3">
                  {Array.from({ length: q.steps }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => handleScale(n)}
                      className={`aspect-square rounded-xl flex items-center justify-center text-lg font-bold border-2 transition-all ${
                        answers[step] === n
                          ? 'bg-based-700 border-based-700 text-white shadow-md scale-105'
                          : 'bg-white border-slate-200 text-slate-400 hover:border-based-400'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-xs text-slate-400">{q.min}</span>
                  <span className="text-xs text-slate-400">{q.max}</span>
                </div>
              </>
            )}

            {/* CHECKBOX */}
            {q.type === 'checkbox' && (
              <div className="space-y-3">
                {q.options.map((opt) => {
                  const checked = (answers[step] || []).includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => handleCheckbox(opt)}
                      className={`w-full text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-3 ${
                        checked
                          ? 'border-based-600 bg-based-50 text-based-800'
                          : 'border-slate-200 text-slate-700 hover:border-based-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        checked ? 'bg-based-600 border-based-600' : 'border-slate-300'
                      }`}>
                        {checked && <CheckCircle2 size={13} className="text-white" />}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* TEXTAREA */}
            {q.type === 'textarea' && (
              <textarea
                rows={5}
                placeholder={q.placeholder}
                value={answers[step] || ''}
                onChange={(e) => handleTextarea(e.target.value)}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 resize-none focus:outline-none focus:border-based-500 transition-colors"
              />
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 gap-3">
              <button
                onClick={back}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft size={16} /> Terug
              </button>
              <button
                onClick={next}
                disabled={!canContinue()}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  canContinue()
                    ? 'bg-based-700 text-white hover:bg-based-800'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {step === total ? 'Resultaat bekijken' : 'Volgende'} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {step === total + 1 && (
          <div className="animate-slide-up space-y-6">
            {/* Score card */}
            <div className={`${profile.bg} rounded-2xl border border-slate-200 p-8 text-center`}>
              <CheckCircle2 size={40} className={`mx-auto mb-4 ${profile.color}`} />
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">Uw profiel</p>
              <h2 className={`text-3xl font-extrabold ${profile.color} mb-4`}>{profile.label}</h2>
              <div className="max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Digitale volwassenheid</span>
                  <span>{profile.pct}%</span>
                </div>
                <div className="h-2.5 bg-white rounded-full border border-slate-200">
                  <div
                    className={`h-2.5 ${profile.bar} rounded-full transition-all duration-700`}
                    style={{ width: `${profile.pct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h3 className="font-bold text-slate-900 mb-5">Uw antwoorden</h3>
              <div className="space-y-4">
                {questions.map((q, i) => {
                  const ans = answers[i + 1];
                  const display = Array.isArray(ans) ? ans.join(', ') : ans;
                  return (
                    <div key={q.id} className="text-sm">
                      <p className="text-slate-400 text-xs mb-0.5">{q.question}</p>
                      <p className="text-slate-800 font-medium">{display || '—'}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="gradient-hero dot-pattern rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Wat nu?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Op basis van uw profiel stellen wij een vrijblijvend advies op. Neem contact op en wij plannen een gesprek in.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-based-800 font-bold px-6 py-3 rounded-xl hover:bg-based-50 transition-colors text-sm"
                >
                  Adviesgesprek aanvragen
                </Link>
                <button
                  onClick={() => { setStep(0); setAnswers({}); }}
                  className="border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  Opnieuw invullen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
