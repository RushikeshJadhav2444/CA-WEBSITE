import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { infoPages } from "@/lib/info";

type Props = { params: Promise<{slug:string}> };
export function generateStaticParams(){return Object.keys(infoPages).map((slug)=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata> {const {slug} = await params; return {title:infoPages[slug]?.title ?? "Page Not Found"};}
export default async function InfoPage({params}:Props) {
 const {slug} = await params;
 const page = infoPages[slug];
 if (!page) notFound();
 return <section className="placeholder-page"><div className="container placeholder-container"><div className="placeholder-symbol"><Clock3 size={33}/></div><span className="eyebrow">PRO LEGAL / INFORMATION</span><h1>{page.title}<span className="dot">.</span></h1><p>{page.description}</p><div className="placeholder-actions"><Link className="btn btn-primary btn-large" href="/consultation">Request a consultation <ArrowRight size={16}/></Link><Link className="btn btn-white btn-large" href="/"><ArrowLeft size={16}/> Back to home</Link></div><div className="placeholder-notice">This is a placeholder route in the homepage demo. Content and live functionality will be added in a future phase.</div></div></section>;
}
