import Link from "next/link";
import type { Category } from "@/lib/docs";
import { getArticlesByCategory } from "@/lib/docs";
import { Icon } from "./icons";

export function CategoryCard({ category }: { category: Category }) {
  const items = getArticlesByCategory(category.slug);
  return (
    <Link className="category-card" href={`/categories/${category.slug}`}>
      <span className={`category-icon accent-${category.accent}`}><Icon name={category.icon} size={24} /></span>
      <div><h2>{category.title}</h2><p>{category.description}</p><span>{items.length} guides <Icon name="arrow" size={16} /></span></div>
    </Link>
  );
}
