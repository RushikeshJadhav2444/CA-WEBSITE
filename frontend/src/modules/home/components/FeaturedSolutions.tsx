import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, ReceiptText, ShieldCheck, ScrollText } from "lucide-react";
import { serviceHref } from "@/lib/services";
const solutions = [
  {name:"Company formation", subtitle:"Begin on the right foundation",icon:Building2, href:serviceHref("Private Limited Company Registration"),number:"01"},
  {name:"Business compliance",subtitle:"Stay ready for what is next",icon:ScrollText,href:serviceHref("Annual Compliance"),number:"02"},
  {name:"Tax management",subtitle:"Make obligations manageable",icon:ReceiptText,href:serviceHref("GST Registration"),number:"03"},
  {name:"Trademark protection",subtitle:"Give your brand room to grow",icon:ShieldCheck,href:serviceHref("Trademark Registration"),number:"04"},
];
export default function FeaturedSolutions() {
 return <section className="section featured-section"><div className="container featured-wrap"><div className="featured-header"><span className="eyebrow">BUILT FOR BUSINESS OWNERS</span><h2>The essentials for<br/>what comes next.</h2><p>Key solutions for every stage of your business journey.</p></div><div className="featured-list">{solutions.map(({name,subtitle,icon:Icon,href,number}) => <Link href={href} key={name}><span className="featured-index">{number}</span><div className="featured-icon"><Icon size={22}/></div><span className="featured-name"><strong>{name}</strong><small>{subtitle}</small></span><span className="featured-link-icon"><ArrowUpRight size={19}/></span></Link>)}</div><div className="featured-cta"><span>Let&apos;s build something lasting.</span><Link href="/consultation">Start a conversation <ArrowRight size={16}/></Link></div></div></section>;
}
