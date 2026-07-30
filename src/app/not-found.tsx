import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-padded flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-navy-950">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-600">The page you are looking for may have moved or does not exist.</p>
      <Link href="/" className="mt-8 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
        Back to home
      </Link>
    </main>
  );
}
