import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, ChartNoAxesCombined, Scale, Shield } from "lucide-react";
import { discoveryGroups, serviceHref } from "@/lib/services";
const icons = [Building2, ChartNoAxesCombined, Shield, Scale];
export default function ServiceCategories() {
  return <section className="section services-section" id="services"><div className="container">
    <div className="section-header"><div><span className="eyebrow">WHAT WE DO <span className="eyebrow-rule"/></span><h2>Everything your business needs.<br/><span>All in one place.</span></h2></div><div className="section-header-aside"><p>From getting started to getting ahead, explore solutions designed around the important moments in your business journey.</p><Link href="/consultation" className="text-link">Find the right solution <ArrowRight size={17}/></Link></div></div>
    <div className="service-groups">{discoveryGroups.map((group, index) => {const Icon = icons[index]; return <article className="service-group" key={group.view} id={group.view}>
      <div className="service-group-top"><span>{group.eyebrow}</span><div className="group-icon"><Icon size={25} strokeWidth={1.6}/></div></div><h3>{group.title}</h3><p>{group.subtitle}</p><div className="service-group-links">{group.items.map((item) => <Link key={item} href={serviceHref(item)}>{item}<ArrowUpRight size={16}/></Link>)}</div><Link href={`/categories/${group.view}`} className="group-bottom-link">Explore services <ArrowRight size={17}/></Link>
    </article>;})}</div>
    <div className="services-note"><div><span className="note-badge">+</span><strong>Not seeing what you need?</strong><span>We can help you find a way forward.</span></div><Link className="text-link" href="/consultation">Speak with our team <ArrowRight size={16}/></Link></div>
  </div></section>;
}
