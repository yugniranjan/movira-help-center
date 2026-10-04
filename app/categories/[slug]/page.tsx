import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/article-list";
import { Icon } from "@/components/icons";
import { categories, getArticlesByCategory, getCategory } from "@/lib/docs";

export function generateStaticParams() { return categories.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? { title: category.title, description: category.description } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getArticlesByCategory(category.slug);
  return (
    <main id="main-content">
      <section className="category-hero"><div className="shell narrow">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Help center</Link><Icon name="chevron" size={14} /><Link href="/categories">Guides</Link><Icon name="chevron" size={14} /><span>{category.title}</span></nav>
        <span className={`category-icon large accent-${category.accent}`}><Icon name={category.icon} size={28} /></span>
        <h1>{category.title}</h1><p>{category.description}</p><span className="guide-count">{items.length} step-by-step guides</span>
      </div></section>
      <section className="shell narrow section category-articles"><ArticleList articles={items} /></section>
    </main>
  );
}
