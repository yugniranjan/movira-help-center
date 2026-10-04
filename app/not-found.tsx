import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return <main id="main-content" className="not-found"><span>404</span><h1>We couldn’t find that guide.</h1><p>The page may have moved, or the link may be incomplete.</p><Link className="primary-button" href="/">Back to Help Center <Icon name="arrow" size={17} /></Link></main>;
}
