import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto hidden-scrollbar bg-secondary p-6">
      <div className="flex max-w-lg flex-col gap-4 font-mono">
        <p className="text-sm text-code-comment">
          {"// the file you asked for is not in this repository"}
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="text-code-tag">throw new</span>{" "}
          <span className="text-code-function">NotFoundError</span>
          <span className="text-code-keyword">(</span>
          <span className="text-code-string">{'"404"'}</span>
          <span className="text-code-keyword">)</span>
          <span>;</span>
        </h1>

        <p className="text-muted-foreground">
          That route does not exist. Open a file from the explorer, or head back
          to the start.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="/">Back to home.js</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/projects">See projects.tsx</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
