import type { Metadata } from "next";
import { CategoryCard } from "@/components/category-card";
import { SearchBox } from "@/components/search-box";
import { categories } from "@/lib/docs";

export const metadata: Metadata = { title: "Browse all guides", description: "Browse Movira360 support guides by product area." };

export default function CategoriesPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="shell narrow"><span className="eyebrow light">Knowledge base</span><h1>Browse all guides</h1><p>Choose a product area or search across the complete Movira360 help center.</p><SearchBox compact /></div></section>
      <section className="shell section"><div className="category-grid">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></section>
    </main>
  );
}
