import { ArrowRight, CheckCheck, ClipboardList, MessagesSquare, SearchCheck } from "lucide-react";
const steps = [
 { number: "01", name: "Choose a service", description: "Find the legal or business solution that fits your needs.", icon: SearchCheck },
 { number: "02", name: "Share your details", description: "Provide the essential information and required documents.", icon: ClipboardList },
 { number: "03", name: "Get expert guidance", description: "Receive professional assistance through the process.", icon: MessagesSquare },
 { number: "04", name: "Stay informed", description: "Keep up with milestones and important updates.", icon: CheckCheck },
];
export default function HowItWorks() {
  return <section className="section process-section" id="how-it-works"><div className="container"><div className="center-heading"><span className="eyebrow">THE PRO LEGAL WAY</span><h2>A clearer path, in four simple steps.</h2><p>Less complexity. More momentum. A guided experience from start to finish.</p></div><div className="process-grid">{steps.map(({number, name,description,icon:Icon},i) => <div className="process-step" key={number}><div className="process-icon"><Icon size={26} strokeWidth={1.65}/></div><div className="process-number">{number}</div><h3>{name}</h3><p>{description}</p>{i!==3 && <ArrowRight className="step-arrow" size={18}/>}</div>)}</div></div></section>;
}
