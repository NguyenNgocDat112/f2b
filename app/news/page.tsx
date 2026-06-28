"use client";

import { NewsHero } from "@/components/news/news-hero";
import { NewsList } from "@/components/news/news-list";
import { AnalysisList } from "@/components/news/analysis-list";

export default function NewsPage() {
  return (
    <main className="w-full min-h-screen">
      <NewsHero />
      <AnalysisList />
    </main>
  );
}
