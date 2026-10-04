import Link from "next/link";
import { ArticleList } from "@/components/article-list";
import { CategoryCard } from "@/components/category-card";
import { Icon } from "@/components/icons";
import { SearchBox } from "@/components/search-box";
import { articles, categories } from "@/lib/docs";

export default function Home() {
  const popular = articles.filter((article) => article.featured).slice(0, 6);
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@movira360.com";
  const journeys = [
    { step: "01", title: "Set up your park", description: "Location, hours, zones, users, and permissions.", href: "/docs/getting-started-with-movira" },
    { step: "02", title: "Build what you sell", description: "Activities, memberships, promos, vouchers, and gift cards.", href: "/categories/catalog-inventory" },
    { step: "03", title: "Run daily operations", description: "Bookings, payments, waivers, POS, and staff schedules.", href: "/categories/bookings-calendar" },
    { step: "04", title: "Support and grow", description: "Customers, CRM, reporting, and troubleshooting.", href: "/categories/crm-communications" },
  ];
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="shell hero-inner">
          <span className="eyebrow light"><i /> Movira360 Help Center</span>
          <h1>Find the answer.<br />Keep your park moving.</h1>
          <p>Current, step-by-step guidance for setup, catalog, bookings, customers, payments, staff, CRM, and administration.</p>
          <SearchBox />
          <div className="quick-search"><span>Popular:</span><Link href="/docs/create-and-configure-memberships">Create a membership</Link><Link href="/docs/create-a-booking">Create a booking</Link><Link href="/docs/manage-users-roles-and-permissions">Manage permissions</Link></div>
          <div className="hero-trust"><span><Icon name="check" size={14} /> Task-based guides</span><span><Icon name="check" size={14} /> Current product language</span><span><Icon name="check" size={14} /> Desktop and mobile friendly</span></div>
        </div>
      </section>

      <section className="shell journey-section" aria-labelledby="journey-heading">
        <div className="journey-heading"><span className="eyebrow">Start with your goal</span><h2 id="journey-heading">A clear path through Movira360</h2><p>Choose the outcome you need instead of guessing which module owns it.</p></div>
        <div className="journey-grid">
          {journeys.map((journey) => (
            <Link key={journey.step} className="journey-card" href={journey.href}>
              <span>{journey.step}</span><div><strong>{journey.title}</strong><p>{journey.description}</p></div><Icon name="arrow" size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="shell section categories-section">
        <div className="section-heading"><div><span className="eyebrow">Browse by workspace</span><h2>Help that matches the product</h2><p>Topics follow the way your team works across Movira360.</p></div><Link className="text-link" href="/categories">View all guides <Icon name="arrow" size={17} /></Link></div>
        <div className="category-grid">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div>
      </section>

      <section className="popular-section">
        <div className="shell popular-grid">
          <div className="popular-intro"><span className="eyebrow">Recommended</span><h2>Guides teams use most</h2><p>Current answers for high-impact setup and daily workflows.</p><div className="popular-note"><span><Icon name="info" /></span><div><strong>New to Movira360?</strong><p>Complete the setup checklist before publishing products or accepting live payments.</p><Link href="/docs/getting-started-with-movira">Open setup guide <Icon name="arrow" size={15} /></Link></div></div></div>
          <ArticleList articles={popular} numbered />
        </div>
      </section>

      <section className="shell contact-band">
        <div className="contact-icon"><Icon name="customers" size={28} /></div>
        <div><span className="eyebrow">Human support</span><h2>Still need a hand?</h2><p>Send our support team the park, page URL, and exact error. We’ll help you find the next step.</p></div>
        <a className="primary-button" href={`mailto:${supportEmail}`}>Contact support <Icon name="arrow" size={17} /></a>
      </section>
    </main>
  );
}
