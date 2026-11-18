"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
const examples = [
  { quote: "Having a clear checklist and knowing the next step would make setting up a company feel far less overwhelming.", title: "Business registration", initials: "BR" },
  { quote: "A simple way to keep documents and compliance milestones in one place is exactly what a growing team needs.", title: "Tax & compliance", initials: "TC" },
  { quote: "Understanding the trademark journey before starting can help a founder make more confident decisions.", title: "Trademark & IP", initials: "IP" },
];
export default function Testimonials() {
 const [index, setIndex] = useState(0);
 const item = examples[index];
 return <section className="section testimonial-section"><div className="container testimonial-grid"><div className="testimonial-side"><span className="eyebrow">THE EXPERIENCE WE'RE BUILDING</span><h2>Made for the moments that matter.</h2><p>Our ambition is to give every client a clearer, more confident legal-services experience.</p><span className="demo-label">CONCEPT FEEDBACK · DEMO CONTENT</span></div><div className="testimonial-card"><div className="testimonial-top"><Quote size={32}/><span>EXPERIENCE PREVIEW / {String(index+1).padStart(2,"0")}</span></div><p>“{item.quote}”</p><div className="testimonial-bottom"><div className="test-avatar">{item.initials}</div><div><strong>Illustrative customer perspective</strong><small>{item.title} · Not a real testimonial</small></div><div className="test-controls"><button aria-label="Previous example" onClick={() => setIndex((index+examples.length-1)%examples.length)}><ArrowLeft size={17}/></button><button aria-label="Next example" onClick={() => setIndex((index+1)%examples.length)}><ArrowRight size={17}/></button></div></div></div></div></section>;
}
