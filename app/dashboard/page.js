'use client';

import { useState } from 'react';
import { Users, TrendingUp, Clock, Award } from 'lucide-react';

/* ── Mock data ── */
const kpis = [
  { label: 'Totaal ingevuld',  value: '247',  delta: '+18 deze week',  icon: Users,       color: 'bg-based-50  text-based-700',  border: 'border-based-100' },
  { label: 'Gemiddelde score', value: '3.4',  delta: '+0.2 vs. vorige maand', icon: TrendingUp,  color: 'bg-emerald-50 text-emerald-700', border: 'border-emerald-100' },
  { label: 'Gem. invultijd',   value: '2:38', delta: '−0:12 vs. vorige maand', icon: Clock,       color: 'bg-violet-50  text-violet-700',  border: 'border-violet-100' },
  { label: 'Voltooiingsgraad', value: '91%',  delta: '+4% vs. vorige maand', icon: Award,       color: 'bg-amber-50   text-amber-700',   border: 'border-amber-100' },
];

const sectors = [
  { label: 'Bouw & Vastgoed',         count: 94,  pct: 38 },
  { label: 'Overheid & Semi-overheid', count: 62,  pct: 25 },
  { label: 'Industrie',                count: 49,  pct: 20 },
  { label: 'Gezondheidszorg',          count: 25,  pct: 10 },
  { label: 'Anders',                   count: 17,  pct: 7  },
];

const scores = [
  { label: '1 — Beginner',        count: 18,  pct: 7,  color: 'bg-rose-400' },
  { label: '2 — Verkenner',       count: 44,  pct: 18, color: 'bg-amber-400' },
  { label: '3 — Groeier',         count: 87,  pct: 35, color: 'bg-yellow-400' },
  { label: '4 — Gevorderde',      count: 72,  pct: 29, color: 'bg-based-500' },
  { label: '5 — Digitaal Leader', count: 26,  pct: 11, color: 'bg-emerald-500' },
];

const challenges = [
  { label: 'Verouderde IT-systemen',            pct: 64 },
  { label: 'Gebrek aan datastructuur',           pct: 58 },
  { label: 'Onvoldoende digitale vaardigheden', pct: 51 },
  { label: 'Samenwerking tussen afdelingen',    pct: 43 },
  { label: 'Kosten van digitalisering',         pct: 38 },
  { label: 'Compliance & wet- en regelgeving',  pct: 27 },
];

const submissions = [
  { id: 'R247', sector: 'Bouw & Vastgoed',   score: 4, size: '250–1.000',  time: '2:15', date: '25 jun 2026' },
  { id: 'R246', sector: 'Overheid',           score: 2, size: '> 1.000',    time: '3:02', date: '25 jun 2026' },
  { id: 'R245', sector: 'Industrie',          score: 3, size: '50–250',     time: '2:44', date: '24 jun 2026' },
  { id: 'R244', sector: 'Gezondheidszorg',    score: 5, size: '< 50',       time: '1:58', date: '24 jun 2026' },
  { id: 'R243', sector: 'Bouw & Vastgoed',   score: 3, size: '250–1.000',  time: '2:31', date: '24 jun 2026' },
  { id: 'R242', sector: 'Anders',             score: 1, size: '50–250',     time: '3:11', date: '23 jun 2026' },
];

const tabs = ['Overzicht', 'Sectoren', 'Scores', 'Uitdagingen'];

const scoreColor = (s) => ['','bg-rose-100 text-rose-700','bg-amber-100 text-amber-700','bg-yellow-100 text-yellow-700','bg-based-100 text-based-700','bg-emerald-100 text-emerald-700'][s];

export default function DashboardPage() {
  const [tab, setTab] = useState('Overzicht');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50">

      {/* Header */}
      <div className="gradient-hero dot-pattern text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-based-300 text-sm font-semibold uppercase tracking-widest mb-2">Analytics</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Dashboard</h1>
          <p className="text-blue-100 mt-2">Digitale Volwassenheidsscan — resultaten overzicht</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* KPI cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map(({ label, value, delta, icon: Icon, color, border }) => (
            <div key={label} className={`bg-white rounded-2xl border ${border} p-5 shadow-sm`}>
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${color} mb-3`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{value}</p>
              <p className="text-xs font-medium text-slate-500 mt-0.5">{label}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1.5">{delta}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1 mb-6 w-fit">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                tab === t ? 'bg-based-700 text-white' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── OVERZICHT ── */}
        {tab === 'Overzicht' && (
          <div className="grid md:grid-cols-2 gap-6">

            {/* Scores */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-5">Scoreverdeling</h3>
              <div className="space-y-3.5">
                {scores.map(({ label, count, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">{label}</span>
                      <span className="text-slate-400">{count} ({pct}%)</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full">
                      <div className={`h-2 ${color} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectoren */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-5">Sector verdeling</h3>
              <div className="space-y-3.5">
                {sectors.map(({ label, count, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">{label}</span>
                      <span className="text-slate-400">{count} ({pct}%)</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full">
                      <div className="h-2 bg-based-500 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SECTOREN ── */}
        {tab === 'Sectoren' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-6">Responsen per sector</h3>
            <div className="space-y-5">
              {sectors.map(({ label, count, pct }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-48 text-sm text-slate-700 font-medium shrink-0">{label}</span>
                  <div className="flex-1 h-6 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="h-6 bg-gradient-to-r from-based-600 to-based-400 rounded-lg flex items-center pl-3 transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-white text-xs font-bold">{pct}%</span>
                    </div>
                  </div>
                  <span className="text-sm text-slate-400 w-10 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SCORES ── */}
        {tab === 'Scores' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-6">Scoreverdeling — detail</h3>
            <div className="space-y-5">
              {scores.map(({ label, count, pct, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-52 text-sm text-slate-700 font-medium shrink-0">{label}</span>
                  <div className="flex-1 h-6 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className={`h-6 ${color} rounded-lg flex items-center pl-3 transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-white text-xs font-bold">{pct}%</span>
                    </div>
                  </div>
                  <span className="text-sm text-slate-400 w-10 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── UITDAGINGEN ── */}
        {tab === 'Uitdagingen' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-2">Meest genoemde uitdagingen</h3>
            <p className="text-sm text-slate-400 mb-6">% van respondenten dat de uitdaging heeft aangevinkt</p>
            <div className="space-y-5">
              {challenges.map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-64 text-sm text-slate-700 font-medium shrink-0">{label}</span>
                  <div className="flex-1 h-6 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="h-6 bg-gradient-to-r from-violet-600 to-violet-400 rounded-lg flex items-center pl-3 transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-white text-xs font-bold">{pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent submissions table */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Recente inzendingen</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  {['ID','Sector','Score','Omvang','Invultijd','Datum'].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {submissions.map(({ id, sector, score, size, time, date }) => (
                  <tr key={id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-xs text-slate-400">{id}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-medium">{sector}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${scoreColor(score)}`}>
                        {score}/5
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500">{size}</td>
                    <td className="px-5 py-3.5 text-slate-500">{time}</td>
                    <td className="px-5 py-3.5 text-slate-400">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
