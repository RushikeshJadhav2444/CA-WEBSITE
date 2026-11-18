import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <div className="placeholder-page"><div className="container placeholder-container"><span className="eyebrow">404 / NOT FOUND</span><h1>That page isn&apos;t here<span className="dot">.</span></h1><p>Let&apos;s get you back to where you need to be.</p><Link href="/" className="btn btn-primary"><ArrowLeft size={16}/> Back to home</Link></div></div>}
