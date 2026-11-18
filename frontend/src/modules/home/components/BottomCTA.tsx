import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";
export default function BottomCTA() {
 return <section className="bottom-cta"><div className="container bottom-cta-inner"><div><span className="eyebrow">LET'S MAKE IT OFFICIAL</span><h2>Your next chapter starts<br/>with a stronger foundation.</h2><p>Whatever stage you&apos;re at, we&apos;re here to help you move forward with clarity.</p><Link href="/consultation" className="btn btn-white btn-large">Talk to our team <ArrowRight size={17}/></Link></div><div className="bottom-cta-decoration" aria-hidden="true"><span>P<span>L</span></span><MoveUpRight size={34}/></div></div></section>;
}
