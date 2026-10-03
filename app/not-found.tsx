import Link from "next/link";

export default function NotFound() {
  return <main className="route-page route-page--paper"><div className="editorial-container route-page__intro"><span className="type-meta">404 / NOT FOUND</span><h1 className="type-display-large">No page here.</h1><Link className="text-action" href="/">Return home ↗</Link></div></main>;
}
