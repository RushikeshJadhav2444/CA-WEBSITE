"use client";
import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { categories } from "@/lib/services";

export default function ConsultationForm() {
  const [complete, setComplete] = useState(false);
  function handleSubmit(e:FormEvent<HTMLFormElement>){ e.preventDefault(); setComplete(true); }
  if (complete) return <div className="consultation-success" role="status"><div><CheckCircle2 size={31}/></div><h2>Thanks for exploring Pro Legal.</h2><p>Your form is complete for this demo. <strong>No details were submitted, stored or sent</strong> because a live booking backend has not yet been connected.</p><button type="button" className="btn btn-primary" onClick={() => setComplete(false)}>Start another demo request</button></div>;
  return <form className="consultation-form" onSubmit={handleSubmit}>
    <div className="form-heading"><span className="eyebrow">YOUR ENQUIRY</span><h2>Let&apos;s understand what you need.</h2><p>Share a few details and see how the consultation experience will work.</p></div>
    <div className="form-two"><label>Full name <span>*</span><input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your full name" /></label><label>Email address <span>*</span><input type="email" name="email" required maxLength={120} autoComplete="email" placeholder="you@company.com" /></label></div>
    <div className="form-two"><label>Phone number <span>*</span><input type="tel" name="phone" required pattern="[0-9+() -]{8,18}" title="Enter a valid phone number, 8–18 characters" autoComplete="tel" placeholder="+91 98765 43210"/></label><label>Service category <span>*</span><select name="category" required defaultValue=""><option value="" disabled>Select a service</option>{categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}</select></label></div>
    <label>How can we help? <span>*</span><textarea name="message" required minLength={10} maxLength={1000} rows={5} placeholder="Tell us about your business or legal requirement..."/></label>
    <div className="form-note">Preview mode: this form validates your entries locally only. No details are transmitted or saved. A secure backend and privacy policy are required before launch.</div>
    <button type="submit" className="btn btn-primary btn-large form-submit">Preview request <Send size={16}/></button>
  </form>;
}
