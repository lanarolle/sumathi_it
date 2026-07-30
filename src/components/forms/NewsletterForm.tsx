"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="mt-4 flex gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        setEmail("");
        alert("Newsletter submission UI is ready. Connect backend in Phase 02.");
      }}
    >
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        required
        placeholder="Email address"
        className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-blue-100"
      />
      <button className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-navy-950 transition hover:bg-brand-soft">Submit</button>
    </form>
  );
}
