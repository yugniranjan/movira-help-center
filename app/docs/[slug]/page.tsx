import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Helpful } from "@/components/helpful";
import { Icon } from "@/components/icons";
import { articles, getArticle, getArticlesByCategory, getCategory, getRelatedArticles } from "@/lib/docs";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.description } : {};
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const category = getCategory(article.category)!;
  const categoryArticles = getArticlesByCategory(article.category);
  const related = getRelatedArticles(article);

  return (
    <main id="main-content" className="docs-page">
      <div className="shell docs-layout">
        <aside className="docs-sidebar">
          <Link className="sidebar-back" href="/categories"><span>‹</span> All categories</Link>
          <div className="sidebar-category"><span className={`category-icon accent-${category.accent}`}><Icon name={category.icon} size={19} /></span><strong>{category.title}</strong></div>
          <nav aria-label={`${category.title} articles`}>{categoryArticles.map((item) => <Link key={item.slug} className={item.slug === article.slug ? "is-active" : ""} href={`/docs/${item.slug}`}>{item.title}</Link>)}</nav>
          <div className="sidebar-support"><Icon name="info" /><strong>Need more help?</strong><p>Our support team can help with account-specific issues.</p><Link href="/docs/contacting-support">Contact support</Link></div>
        </aside>

        <article className="article-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Help center</Link><Icon name="chevron" size={14} /><Link href={`/categories/${category.slug}`}>{category.title}</Link><Icon name="chevron" size={14} /><span>Guide</span></nav>
          <header className="article-header"><span className="eyebrow">Step-by-step guide</span><h1>{article.title}</h1><p>{article.description}</p><div className="article-meta"><span><Icon name="clock" size={15} /> {article.minutes} min read</span><span>{article.sections.length} sections</span><span>Updated {formatDate(article.updated)}</span></div></header>
          <div className="article-overview" aria-label="Guide overview">
            <span className={`category-icon accent-${category.accent}`}><Icon name={category.icon} size={20} /></span>
            <div><span>Workspace</span><strong>{category.title}</strong></div>
            <div><span>Best used for</span><strong>{article.keywords.slice(0, 3).join(" · ")}</strong></div>
            <div><span>How to follow</span><strong>Complete sections in order</strong></div>
          </div>
          <div className="article-mobile-toc"><strong>In this guide</strong>{article.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</div>
          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.steps && <ol className="steps">{section.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol>}
                {section.bullets && <ul className="bullets">{section.bullets.map((bullet) => <li key={bullet}><Icon name="check" size={16} /><span>{bullet}</span></li>)}</ul>}
                {section.callout && <div className={`callout is-${section.callout.tone}`}><span><Icon name={section.callout.tone === "warning" ? "warning" : section.callout.tone === "success" ? "check" : "info"} /></span><div><strong>{section.callout.title}</strong><p>{section.callout.text}</p></div></div>}
              </section>
            ))}
          </div>
          <Helpful />
          {related.length > 0 && <section className="related"><span className="eyebrow">Keep learning</span><h2>Related guides</h2><div>{related.map((item) => <Link key={item.slug} href={`/docs/${item.slug}`}><span><strong>{item.title}</strong><small>{item.minutes} min read</small></span><Icon name="arrow" size={17} /></Link>)}</div></section>}
        </article>

        <aside className="article-toc"><strong>In this guide</strong>{article.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<span className="toc-divider" /><Link href={`/categories/${category.slug}`}>All {category.title} guides</Link></aside>
      </div>
    </main>
  );
}
