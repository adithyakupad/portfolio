import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found frame">
      <span className="micro">404 / NO SIGNAL</span>
      <h1>This path goes nowhere <em>yet.</em></h1>
      <Link className="text-link" href="/">Return home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
