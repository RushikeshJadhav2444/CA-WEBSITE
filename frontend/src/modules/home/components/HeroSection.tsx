import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, ChevronRight, FileCheck2, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import ServiceSearch from "@/modules/services/components/ServiceSearch";
import { serviceHref } from "@/lib/services";

export default function HeroSection() {
  return <section className="hero-section">
    <div className="hero-glow"/>
    <div className="container hero-grid">
      <div className="hero-content">
        <div className="hero-tag"><span className="tag-dot"/> YOUR PARTNER IN LEGAL CLARITY <span className="tag-line"/></div>
        <h1>Your ambition.<br/><span>Our legal expertise.</span></h1>
        <p className="hero-description">From your first business registration to complex compliance and brand protection, move forward with the right legal support at every step.</p>
        <ServiceSearch/>
        <div className="popular-searches"><span>Popular:</span><Link href={serviceHref("Private Limited Company Registration")}>Register a company</Link><Link href={serviceHref("GST Registration")}>GST</Link><Link href={serviceHref("Trademark Registration")}>Trademark</Link></div>
        <div className="hero-buttons"><Link className="btn btn-primary btn-large" href="/#services">Explore Services <ArrowRight size={17}/></Link><Link className="btn btn-white btn-large" href="/consultation">Talk to an Expert <ChevronRight size={17}/></Link></div>
        <p className="hero-micro"><ShieldCheck size={15}/> Clear processes. Professional guidance. Confidence at every step.</p>
      </div>
      <div className="hero-art" aria-label="Illustrative legal workflow dashboard">
        <div className="hero-art-orbit orbit-one"/><div className="hero-art-orbit orbit-two"/>
        <div className="hero-art-top"><span className="decorative-cross">✳</span><span>THOUGHTFUL BY DESIGN</span></div>
        <div className="dashboard-panel">
          <div className="dashboard-head"><div className="dashboard-head-logo">p<span>.</span></div><div><span>PRO LEGAL / YOUR WORKSPACE</span><h3>Business essentials, organised.</h3></div><span className="dashboard-dots"><i/><i/><i/></span></div>
          <div className="dashboard-metric-row"><div><span className="mini-label">BUSINESS HEALTH</span><strong>On the right track</strong><small>Illustrative workflow preview</small></div><div className="progress-ring"><span><Check size={21}/></span></div></div>
          <div className="dashboard-list">
            <div><div className="dashboard-item-icon"><FileCheck2 size={18}/></div><span><strong>Company registration</strong><small>Initial requirements reviewed</small></span><span className="dashboard-status">Example</span></div>
            <div><div className="dashboard-item-icon pink"><BadgeCheck size={18}/></div><span><strong>GST compliance</strong><small>Document checklist</small></span><ChevronRight size={16} color="#9DA1AB"/></div>
            <div><div className="dashboard-item-icon"><LockKeyhole size={18}/></div><span><strong>Trademark protection</strong><small>Expert guidance</small></span><ChevronRight size={16} color="#9DA1AB"/></div>
          </div>
          <div className="dashboard-foot"><span><span className="online-dot"/> A simpler path to peace of mind</span><span><Sparkles size={15}/> Pro Legal</span></div>
        </div>
        <div className="floating-note note-left"><span><ShieldCheck size={19}/></span><div><strong>Built for confidence</strong><small>Privacy-minded by design</small></div></div>
        <div className="floating-note note-right"><span><Check size={18}/></span><div><strong>Expert assisted</strong><small>Guidance when you need it</small></div></div>
        <span className="hero-art-bottom">LEGAL SUPPORT FOR THE WAY YOU WORK <span>↗</span></span>
      </div>
    </div>
  </section>;
}
