import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react";
import Brand from "@/components/ui/Brand";
import { serviceHref } from "@/lib/services";

const footerColumns = [
  { title: "Company", items: [["About Us", "/info/about"],["Contact Us", "/info/contact"],["Careers", "/info/careers"],["Our Experts", "/info/experts"]] },
  { title: "Business Services", items: [["Company Registration", serviceHref("Private Limited Company Registration")],["LLP Registration", serviceHref("LLP Registration")],["GST Registration", serviceHref("GST Registration")],["Annual Compliance", serviceHref("Annual Compliance")]] },
  { title: "Legal", items: [["Trademark", serviceHref("Trademark Registration")],["Copyright", serviceHref("Copyright Registration")],["Legal Notice", serviceHref("Legal Notice")],["Agreement Drafting", serviceHref("Agreement Drafting")]] },
  { title: "Resources", items: [["Blog", "/info/blog"],["Guides", "/info/guides"],["FAQs", "/#faq"],["Calculators", "/info/calculators"]] },
];

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand"><Brand inverse/><p>Considered legal and business solutions for people building what&apos;s next.</p><Link className="footer-contact" href="/consultation">Let&apos;s have a conversation <ArrowRight size={17}/></Link></div>
      <div className="footer-links">{footerColumns.map((column) => <div key={column.title}><h4>{column.title}</h4>{column.items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}</div>
    </div>
    <div className="container footer-end"><span>© {new Date().getFullYear()} Pro Legal. All rights reserved.</span><div className="footer-policy"><Link href="/info/privacy">Privacy Policy</Link><Link href="/info/terms">Terms</Link><Link href="/info/refunds">Refund Policy</Link></div><div className="footer-social" aria-label="Social channels, coming soon"><span title="Social channels coming soon"><Linkedin size={17}/></span><span title="Social channels coming soon"><Instagram size={17}/></span><Link href="/consultation" aria-label="Contact us"><Mail size={17}/></Link></div></div>
  </footer>;
}
