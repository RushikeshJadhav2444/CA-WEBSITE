"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
const questions = [
 { q: "How do I register a Private Limited Company?", a: "Start by choosing your business structure and checking name availability. The usual process involves preparing incorporation documents, director identification and filing with the Ministry of Corporate Affairs. The exact requirements depend on your circumstances. Explore the service page to get started." },
 { q: "What documents are required for GST registration?", a: "Requirements vary by applicant type. Common items include PAN, identity and address proof, proof of business premises, and business registration documents where applicable. We can help you review a checklist relevant to your business." },
 { q: "How does the service booking process work?", a: "For this homepage preview, you can explore a service and submit a demonstration consultation form. The production version will connect requests to a secure intake and scheduling process; no live booking or transmission is available yet." },
 { q: "Can I track my application?", a: "Application tracking is part of the planned customer experience. The current version is a public homepage only, so live application tracking is not yet available." },
 { q: "How can I speak with a legal expert?", a: "Choose 'Talk to an Expert' to open the consultation form. For launch, this will need to be connected to a verified support channel before actual consultation requests can be received." },
];
export default function FAQSection() {
 const [open, setOpen] = useState<number | null>(0);
 return <section className="section faq-section" id="faq"><div className="container faq-grid"><div className="faq-intro"><span className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</span><h2>Frequently asked questions.</h2><p>A few helpful answers to get you started. Need something more specific?</p><Link href="/consultation" className="text-link">Ask an expert <ArrowRight size={17}/></Link></div><div className="faq-list">{questions.map(({q,a},i) => <div className={`faq-item ${open === i ? "faq-open" : ""}`} key={q}><button aria-expanded={open===i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open===i ? null : i)}><span>{q}</span>{open===i ? <Minus size={18}/> : <Plus size={18}/>}</button><div id={`faq-answer-${i}`} className="faq-answer" hidden={open!==i}><p>{a}</p></div></div>)}</div></div></section>;
}
