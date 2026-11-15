"use client";

import { useMemo, useState } from "react";
import { SiteFrame } from "@/components/home/PageChrome";

type Category = "All" | "AI & productivity" | "Assessment" | "Inclusion & SEND" | "Classroom resources" | "Leadership";
const categories: Category[] = ["All", "AI & productivity", "Assessment", "Inclusion & SEND", "Classroom resources", "Leadership"];
const collections = [
  { category: "AI & productivity", title: "AI & productivity", detail: "Planning, resource creation and practical time-saving workflows.", symbol: "✦" },
  { category: "Assessment", title: "Assessment & feedback", detail: "Check understanding, spot misconceptions and respond effectively.", symbol: "◎" },
  { category: "Inclusion & SEND", title: "Inclusion & SEND", detail: "Accessible approaches and resources for different learners.", symbol: "◇" },
  { category: "Classroom resources", title: "Classroom resources", detail: "Interactive websites, activities and ready-to-use teaching tools.", symbol: "▦" },
  { category: "Leadership", title: "Leadership & CPD", detail: "Useful tools and ideas for school improvement and staff development.", symbol: "↗" },
] as const;

export default function EdTechEditPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const visible = useMemo(() => collections.filter((item) =>
    (category === "All" || item.category === category) &&
    (item.title + " " + item.detail).toLowerCase().includes(query.toLowerCase().trim())
  ), [category, query]);

  return (
    <SiteFrame>
      <div className="mx-auto max-w-[1180px] px-5 pb-28 pt-12 sm:px-8 sm:pt-20">
        <div className="mb-9 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">John Spurling / Teacher resources</span>
          <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-200">Design preview · Not yet published</span>
        </div>
        <section className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0d1530]/90 px-7 py-12 shadow-2xl sm:px-12 sm:py-16" aria-labelledby="edit-title">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[70px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-52 w-52 rounded-full bg-cyan-400/10 blur-[65px]" />
          <div className="relative max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Discover · Evaluate · Teach</p>
            <h1 id="edit-title" className="mb-5 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-7xl">The <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-300 bg-clip-text text-transparent">EdTech Edit.</span></h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">Fresh educational technology, useful websites and practical classroom ideas — selected with busy UK teachers in mind.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#explore" className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-[#071324] transition hover:bg-cyan-200">Explore the library ↓</a>
              <a href="#weekly" className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">Weekly editions ↗</a>
            </div>
          </div>
          <div className="relative mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6 text-xs font-semibold text-slate-300">
            <span className="rounded-full border border-white/15 px-3 py-2">UK classroom focus</span>
            <span className="rounded-full border border-white/15 px-3 py-2">Practical teaching uses</span>
            <span className="rounded-full border border-white/15 px-3 py-2">New & updated tools</span>
          </div>
        </section>

        <section id="explore" className="scroll-mt-20 pt-20" aria-labelledby="explore-heading">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">The resource library</p>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><h2 id="explore-heading" className="mb-3 text-3xl font-extrabold text-white sm:text-4xl">Find something worth using.</h2><p className="max-w-2xl text-slate-300">Explore the collections below. Individual tool reviews, verified links and filters will be added as the archive is prepared.</p></div>
          </div>
          <label htmlFor="edit-search" className="mb-2 block text-sm font-semibold text-slate-200">Search collections</label>
          <input id="edit-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try assessment, SEND, planning…" className="w-full rounded-2xl border border-white/20 bg-[#111a30] px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300" />
          <div className="my-5 flex flex-wrap gap-2" aria-label="Filter collections">
            {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${category === item ? "border-cyan-300 bg-cyan-300 text-[#071324]" : "border-white/20 bg-white/5 text-slate-200 hover:border-cyan-300/60"}`}>{item}</button>)}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => <article key={item.title} className="rounded-2xl border border-white/15 bg-[#10192d]/90 p-6 transition hover:border-cyan-300/40">
              <span aria-hidden="true" className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-2xl text-cyan-200">{item.symbol}</span>
              <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3><p className="mb-4 text-sm text-slate-300">{item.detail}</p><span className="text-xs font-bold uppercase tracking-wider text-teal-300">Collection preview</span>
            </article>)}
          </div>
          {visible.length === 0 && <p role="status" className="rounded-xl border border-white/15 p-6 text-slate-300">No collections match your search. Try another term or clear the filters.</p>}
        </section>

        <section id="weekly" className="scroll-mt-20 pt-20" aria-labelledby="weekly-heading">
          <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-[28px] border border-violet-400/25 bg-gradient-to-br from-[#1d2045] to-[#101a30] p-8 sm:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">The weekly edition</p>
              <h2 id="weekly-heading" className="mb-4 text-3xl font-extrabold text-white">The best discoveries, in one place.</h2>
              <p className="mb-7 text-slate-200">A concise weekly selection of newly discovered or meaningfully updated tools, with direct links, UK classroom uses, cost information and important limitations.</p>
              <span className="inline-flex rounded-xl border border-violet-300/30 px-4 py-3 text-sm font-semibold text-violet-100">First verified edition coming soon</span>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-[#10192d]/90 p-8 sm:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Searchable archive</p>
              <h3 className="mb-4 text-2xl font-extrabold text-white">Missed an edition?</h3>
              <p className="text-slate-300">Browse past weeks, revisit recommended websites and see what has changed. Historical reports will appear here once checked and imported.</p>
              <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">Archive is being prepared · No editions published yet</div>
            </div>
          </div>
        </section>
        <p className="mt-12 text-center text-sm text-slate-400">The EdTech Edit · Curated by John Spurling · Designed for practical use in UK education</p>
      </div>
    </SiteFrame>
  );
}
