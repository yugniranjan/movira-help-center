import Link from "next/link";
import type { Article } from "@/lib/docs";
import { Icon } from "./icons";

export function ArticleList({ articles, numbered = false }: { articles: Article[]; numbered?: boolean }) {
  return (
    <div className={numbered ? "article-list is-numbered" : "article-list"}>
      {articles.map((article, index) => (
        <Link key={article.slug} href={`/docs/${article.slug}`}>
          {numbered && <span className="article-number">{String(index + 1).padStart(2, "0")}</span>}
          <span className="article-copy"><strong>{article.title}</strong><small>{article.description}</small></span>
          <span className="article-time"><Icon name="clock" size={15} /> {article.minutes} min</span>
          <Icon className="article-arrow" name="arrow" size={18} />
        </Link>
      ))}
    </div>
  );
}
