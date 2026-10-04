import Link from "next/link";
import { categories } from "@/lib/docs";

export function SiteFooter() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@movira360.com";
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-about">
          <div className="footer-brand">Movira<span>360</span> Help Center</div>
          <p>Clear guidance for every part of your park operation—from the first booking to the final report.</p>
          <span className="status-chip"><i /> Product guides updated regularly</span>
        </div>
        <div><strong>Explore</strong>{categories.slice(0, 4).map((item) => <Link key={item.slug} href={`/categories/${item.slug}`}>{item.title}</Link>)}</div>
        <div><strong>Operations</strong>{categories.slice(4).map((item) => <Link key={item.slug} href={`/categories/${item.slug}`}>{item.title}</Link>)}</div>
        <div><strong>Need help?</strong><a href={`mailto:${email}`}>{email}</a><Link href="/docs/troubleshoot-common-issues">Troubleshooting</Link><Link href="/docs/contacting-support">Contact support</Link></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Movira360. All rights reserved.</span><span>Built for confident park operations.</span></div>
    </footer>
  );
}
