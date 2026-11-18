"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { allServices } from "@/lib/services";

export default function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return (term ? allServices.filter((s) => `${s.name} ${s.categoryName}`.toLowerCase().includes(term)) : [allServices[0], allServices[6], allServices[13], allServices[21]]).slice(0, 6);
  }, [query]);
  useEffect(() => {
    const onOutside = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, []);
  const go = (slug: string) => { setOpen(false); router.push(`/services/${slug}`); };
  return <div className="search-area" ref={wrap}>
    <div className="service-search">
      <Search size={21} strokeWidth={1.9}/>
      <input aria-label="Search legal services" placeholder="What service are you looking for?" value={query} onChange={(e) => {setQuery(e.target.value);setSelected(0);setOpen(true);}} onFocus={() => setOpen(true)} onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
        if (e.key === "ArrowDown") {e.preventDefault(); setSelected((v) => Math.min(v+1, results.length-1));}
        if (e.key === "ArrowUp") {e.preventDefault(); setSelected((v) => Math.max(v-1, 0));}
        if (e.key === "Enter" && results[selected]) {e.preventDefault(); go(results[selected].slug);}
      }}/>
      {query && <button className="search-clear" onClick={() => {setQuery("");setOpen(true);}} aria-label="Clear search"><X size={16}/></button>}
      <button type="button" className="search-submit" aria-label="Find service" onClick={() => results.length && go(results[selected]?.slug ?? results[0].slug)}><ArrowRight size={19}/></button>
    </div>
    {open && <div className="search-suggestions" role="listbox" aria-label="Suggested services">
      <div className="suggestion-title">{query ? `SEARCH RESULTS · ${results.length}` : "POPULAR SERVICES"}</div>
      {results.length ? results.map((s, idx) => <button key={s.slug} role="option" aria-selected={idx === selected} onMouseEnter={() => setSelected(idx)} onClick={() => go(s.slug)} className={idx === selected ? "suggestion active" : "suggestion"}><span><strong>{s.name}</strong><small>{s.categoryName}</small></span><ArrowRight size={15}/></button>) : <div className="suggestion-empty">No exact matches. <a href="/consultation">Ask an expert</a> to help you find the right service.</div>}
    </div>}
  </div>;
}
