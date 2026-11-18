import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronRight, CircleHelp, FileText, ShieldCheck } from "lucide-react";
import { allServices, categories, findService, serviceHref } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {return allServices.map((service) => ({slug: service.slug}));}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {slug} = await params;
  const item = findService(slug);
  return {title: item ? item.name : "Service Not Found", description: item ? `Explore ${item.name} with Pro Legal. Learn about the process and request expert assistance.` : ""};
}
export default async function ServicePage({params}:Props) {
  const {slug} = await params;
  const service = findService(slug);
  if (!service) notFound();
  const category = categories.find((cat) => cat.id === service.categoryId)!;
  const related = category.services.filter((s) => s !== service.name).slice(0,4);
  return <>
    <div className="inner-hero"><div className="container">
      <div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight size={13}/><Link href={`/#${category.id}`}>{category.name}</Link><ChevronRight size={13}/><span>{service.name}</span></div>
      <span className="eyebrow">PRO LEGAL / {category.name.toUpperCase()}</span>
      <div className="inner-hero-grid"><div><h1>{service.name}<span className="dot">.</span></h1><p>{category.description} Explore this service and find out how professional support can help you get started.</p><div className="inner-hero-actions"><Link className="btn btn-primary btn-large" href="/consultation">Request a consultation <ArrowRight size={16}/></Link><Link className="btn btn-white btn-large" href="/#services">Explore all services</Link></div></div><div className="inner-hero-graphic"><div><span className="eyebrow">YOUR NEXT STEP</span><FileText size={64} strokeWidth={1}/><strong>Get clarity before you begin.</strong><small>Guided help for important decisions</small></div></div></div>
    </div></div>
    <section className="section service-detail"><div className="container service-detail-grid"><div><span className="eyebrow">THE PRO LEGAL APPROACH</span><h2>Making complex steps feel manageable.</h2><p className="service-detail-intro">Every business is different. We help you understand the information typically needed, prepare for the process and identify the right next step. Exact requirements, professional fees, government charges and timelines are confirmed during consultation.</p><div className="service-detail-bullets"><div><span><Check size={18}/></span><div><strong>Understand the requirements</strong><p>Learn which information and supporting documents may be relevant.</p></div></div><div><span><Check size={18}/></span><div><strong>Review your options</strong><p>Explore a process aligned with your business situation.</p></div></div><div><span><Check size={18}/></span><div><strong>Request expert assistance</strong><p>Discuss scope, expected steps and any applicable fees before proceeding.</p></div></div></div></div><aside className="service-sidebar"><div className="sidebar-icon"><ShieldCheck size={26}/></div><h3>Need help with {service.name.toLowerCase()}?</h3><p>Tell us a little about your requirement and take the first step toward getting informed support.</p><Link className="btn btn-primary" href="/consultation">Talk to an Expert <ArrowRight size={16}/></Link><div className="sidebar-foot"><CircleHelp size={16}/> This is a project preview. Live service intake is not enabled.</div></aside></div></section>
    <section className="section related-section"><div className="container"><div className="related-header"><div><span className="eyebrow">KEEP EXPLORING</span><h2>Related services</h2></div><Link className="text-link" href="/#services">All services <ArrowRight size={16}/></Link></div><div className="related-grid">{related.map((item) => <Link href={serviceHref(item)} key={item}><span>{item}</span><ArrowRight size={17}/></Link>)}</div></div></section>
    <div className="container back-link-row"><Link href="/#services"><ArrowLeft size={16}/> Back to all services</Link></div>
  </>;
}
