"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, CircleHelp, Menu, Search, X } from "lucide-react";
import Brand from "@/components/ui/Brand";
import { categories, resourceItems, serviceHref } from "@/lib/services";

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActive(null); setMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selected = categories.find((item) => item.id === active);
  return (
    <header className="site-header" onMouseLeave={() => setActive(null)}>
      <div className="topbar"><div className="container topbar-inner"><span>Practical legal solutions for ambitious businesses</span><Link href="/consultation">Need assistance? Speak to an expert <ArrowRight size={12}/></Link></div></div>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onMouseEnter={() => setActive(category.id)}
              onFocus={() => setActive(category.id)}
              onClick={() => setActive(active === category.id ? null : category.id)}
              className={`nav-trigger ${active === category.id ? "is-active" : ""}`}
              aria-expanded={active === category.id}
              aria-controls="primary-mega-menu"
            >{category.name}<ChevronDown size={13} strokeWidth={2} /></button>
          ))}
          <button type="button" onMouseEnter={() => setActive("resources")} onFocus={() => setActive("resources")} onClick={() => setActive(active === "resources" ? null : "resources")} className={`nav-trigger ${active === "resources" ? "is-active" : ""}`} aria-expanded={active === "resources"} aria-controls="primary-mega-menu">Resources<ChevronDown size={13}/></button>
        </nav>
        <div className="header-actions">
          <Link className="header-login" href="/info/login">Login</Link>
          <Link className="btn btn-outline header-expert" href="/consultation">Talk to an Expert</Link>
          <Link className="btn btn-primary header-getstarted" href="/#services">Get Started <ArrowRight size={15}/></Link>
        </div>
        <button type="button" className="mobile-toggle" onClick={() => {setMobileOpen(!mobileOpen); setActive(null);}} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X size={23}/> : <Menu size={23}/>}</button>
      </div>
      {active && (
        <div className="mega-shell" id="primary-mega-menu">
          <div className="container mega-menu">
            {selected ? (
              <>
                <div className="mega-intro">
                  <span className="eyebrow">EXPLORE SERVICES</span>
                  <div className="mega-symbol"><span>PL</span></div>
                  <h3>{selected.name}</h3>
                  <p>{selected.description}</p>
                  <Link href={`/#${selected.id}`} onClick={() => setActive(null)} className="text-link">Explore category <ArrowRight size={15}/></Link>
                </div>
                <div className="mega-links">
                  <div className="mega-heading"><span>Services in this category</span><Search size={16}/></div>
                  <div className="mega-list">
                    {selected.services.map((service) => <Link key={service} href={serviceHref(service)} onClick={() => setActive(null)}><span>{service}</span><ArrowRight size={14}/></Link>)}
                  </div>
                </div>
                <div className="mega-feature">
                  <div className="mega-feature-icon"><CircleHelp size={23}/></div>
                  <span className="eyebrow">NEED GUIDANCE?</span>
                  <h4>Not sure where to begin?</h4>
                  <p>Tell us your goals. We&apos;ll help you identify the right next step.</p>
                  <Link className="btn btn-primary" href="/consultation" onClick={() => setActive(null)}>Request a consultation <ArrowRight size={15}/></Link>
                </div>
              </>
            ) : (
              <>
                <div className="mega-intro"><span className="eyebrow">PRO LEGAL LIBRARY</span><div className="mega-symbol"><span>PL</span></div><h3>Resources</h3><p>Explore guides, articles, and helpful tools designed for business owners.</p></div>
                <div className="mega-links resources-links"><div className="mega-heading">Useful resources</div><div className="mega-list">{resourceItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setActive(null)}>{item.name}<ArrowRight size={14}/></Link>)}</div></div>
                <div className="mega-feature"><span className="eyebrow">START HERE</span><h4>A question worth asking?</h4><p>Explore popular legal and compliance questions in our FAQ.</p><Link className="btn btn-primary" href="/#faq" onClick={() => setActive(null)}>View FAQs <ArrowRight size={15}/></Link></div>
              </>
            )}
          </div>
        </div>
      )}
      {mobileOpen && <div className="mobile-nav">
        <div className="mobile-nav-scroll">
          {categories.map((category) => <div className="mobile-category" key={category.id}>
            <button type="button" onClick={() => setMobileGroup(mobileGroup === category.id ? null : category.id)} aria-expanded={mobileGroup === category.id}>{category.name}<ChevronDown className={mobileGroup === category.id ? "rotated" : ""} size={17}/></button>
            {mobileGroup === category.id && <div className="mobile-services">{category.services.map((s) => <Link key={s} href={serviceHref(s)} onClick={() => setMobileOpen(false)}>{s}</Link>)}</div>}
          </div>)}
          <div className="mobile-category"><button type="button" onClick={() => setMobileGroup(mobileGroup === "resources" ? null : "resources")}>Resources <ChevronDown size={17}/></button>{mobileGroup === "resources" && <div className="mobile-services">{resourceItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.name}</Link>)}</div>}</div>
          <div className="mobile-bottom"><Link href="/info/login" onClick={() => setMobileOpen(false)}>Login</Link><Link href="/consultation" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Talk to an Expert <ArrowRight size={16}/></Link></div>
        </div>
      </div>}
    </header>
  );
}
