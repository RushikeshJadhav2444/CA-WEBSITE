import { FileText, Headset, ScanLine, ShieldCheck } from "lucide-react";
const items = [
  { icon: Headset, name: "Expert-assisted", description: "Human guidance, not guesswork" },
  { icon: ScanLine, name: "Transparent process", description: "Know what comes next" },
  { icon: ShieldCheck, name: "Privacy-conscious", description: "Responsible document handling" },
  { icon: FileText, name: "Business focused", description: "Support across milestones" },
];
export default function TrustSection() {
  return <section className="trust-band"><div className="container trust-row"><span className="trust-lead">BUILT AROUND<br/>YOUR PEACE OF MIND</span>{items.map(({ icon: Icon, name, description }) => <div className="trust-item" key={name}><div className="trust-icon"><Icon size={19} strokeWidth={1.7}/></div><div><strong>{name}</strong><small>{description}</small></div></div>)}</div></section>;
}
