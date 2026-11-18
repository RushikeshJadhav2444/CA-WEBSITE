import Link from "next/link";

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Pro Legal home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5.5v27M9.5 12.5h19M13 12.5l-6.5 9m6.5-9 6.5 9m-13 0c1.9 3.1 11.2 3.1 13 0M25 12.5l-6.5 9m6.5-9 6.5 9m-13 0c1.9 3.1 11.2 3.1 13 0M12 32.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="brand-word">pro<span>legal</span><small>.</small></span>
    </Link>
  );
}
