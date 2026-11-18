import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { categories, serviceHref } from "@/lib/services";

type Props={params:Promise<{id:string}>};
export function generateStaticParams(){return categories.map(c=>({id:c.id}));}
export async function generateMetadata({params}:Props):Promise<Metadata> {const {id}=await params;const c=categories.find(x=>x.id===id);return {title:c?.name ?? "Category not found"};}
export default async function CategoryPage({params}:Props){
 const {id}=await params;
 const category=categories.find(c=>c.id===id);
 if(!category) notFound();
 return <>
   <section className="category-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight size={13}/><span>{category.name}</span></div><span className="eyebrow">PRO LEGAL / SERVICE DIRECTORY</span><h1>{category.name}<span className="dot">.</span></h1><p>{category.description}</p><Link href="/consultation" className="btn btn-primary btn-large">Find your next step <ArrowRight size={16}/></Link></div></section>
   <section className="section category-services"><div className="container"><div className="category-header"><span className="eyebrow">EXPLORE YOUR OPTIONS</span><h2>Services in this category</h2><p>Browse services and select one to learn more. Pricing and timelines will be confirmed during consultation.</p></div><div className="category-service-grid">{category.services.map((service,index)=><Link href={serviceHref(service)} key={service}><span className="category-service-index">{String(index+1).padStart(2,"0")}</span><strong>{service}</strong><ArrowUpRight size={20}/></Link>)}</div></div></section>
 </>;
}
