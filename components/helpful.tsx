"use client";

import { useState } from "react";
import { Icon } from "./icons";

export function Helpful() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  return (
    <div className="helpful">
      {answer ? (
        <><span className="helpful-check"><Icon name="check" /></span><div><strong>Thanks for your feedback.</strong><p>{answer === "yes" ? "We’re glad this guide helped." : "We’ll use this to improve the guide."}</p></div></>
      ) : (
        <><div><strong>Was this guide helpful?</strong><p>Your feedback keeps our documentation useful.</p></div><div className="helpful-actions"><button type="button" onClick={() => setAnswer("yes")}>Yes</button><button type="button" onClick={() => setAnswer("no")}>Not quite</button></div></>
      )}
    </div>
  );
}
