"use client";

import { EbookHero } from "@/components/ebook/ebook-hero";
import { EbookList } from "@/components/ebook/ebook-list";

export default function EbookPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <EbookHero />
      <EbookList />
    </main>
  );
}
