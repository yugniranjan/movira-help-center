"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { articles, categories } from "@/lib/docs";
import { Icon } from "./icons";

export function SearchBox({ compact = false }: { compact?: boolean }) {
  const searchId = useId();
  const resultsId = `${searchId}-results`;
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (needle.length < 2) return [];
    return articles
      .map((article) => ({
        article,
        score: [
          article.title,
          article.description,
          ...article.keywords,
          ...article.sections.flatMap((section) => [
            section.title,
            ...(section.paragraphs || []),
            ...(section.steps || []),
            ...(section.bullets || []),
            section.callout?.title || "",
            section.callout?.text || "",
          ]),
        ]
          .join(" ")
          .toLowerCase()
          .includes(needle) ? (article.title.toLowerCase().includes(needle) ? 3 : article.keywords.join(" ").toLowerCase().includes(needle) ? 2 : 1) + (article.featured ? 0.5 : 0) : 0,
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.article);
  }, [query]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setFocused(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        input.current?.focus();
        setFocused(true);
      }
      if (event.key === "Escape" && document.activeElement === input.current) {
        setFocused(false);
        input.current?.blur();
      }
    };
    document.addEventListener("keydown", focusSearch);
    return () => document.removeEventListener("keydown", focusSearch);
  }, []);

  const showResults = focused && query.trim().length >= 2;

  return (
    <div ref={wrapper} className={compact ? "search-box is-compact" : "search-box"}>
      <Icon name="search" size={compact ? 19 : 23} />
      <input
        ref={input}
        type="search"
        role="combobox"
        value={query}
        onFocus={() => setFocused(true)}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search guides, features, and answers…"
        aria-label="Search help articles"
        aria-autocomplete="list"
        aria-controls={resultsId}
        aria-expanded={showResults}
      />
      {query && <button className="search-clear" type="button" onClick={() => { setQuery(""); input.current?.focus(); }} aria-label="Clear search"><Icon name="close" size={16} /></button>}
      {!compact && <kbd>⌘ K</kbd>}
      {showResults && (
        <div className="search-results" id={resultsId} role="listbox">
          {results.length ? results.map((article) => {
            const category = categories.find((item) => item.slug === article.category);
            return (
              <Link key={article.slug} href={`/docs/${article.slug}`} onClick={() => setFocused(false)}>
                <span className={`result-icon accent-${category?.accent || "blue"}`}><Icon name={category?.icon || "info"} size={18} /></span>
                <span><strong>{article.title}</strong><small>{category?.title} · {article.minutes} min read</small></span>
                <Icon name="arrow" size={17} />
              </Link>
            );
          }) : <div className="no-results"><strong>No guide found</strong><span>Try “booking”, “terminal”, “customer”, or “staff”.</span></div>}
        </div>
      )}
    </div>
  );
}
