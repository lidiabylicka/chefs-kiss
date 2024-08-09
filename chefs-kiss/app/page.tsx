import Link from "next/link";

import ToTheFridge from "@/public/svg/ToTheFridge";
import AboutAuthor from "@/public/svg/AboutAuthor";

export default function Home() {
  return (
    <main className="flex min-h-full items-center top-20 justify-around pt-24">
      <Link href="/about">
        <AboutAuthor />
      </Link>
      <Link href="/landing">
        <ToTheFridge />
      </Link>
    </main>
  );
}
