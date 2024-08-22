import Link from "next/link";
import Logo from "@/public/svg/Logo";
import ToTheFridge from "@/public/svg/ToTheFridge";
import AboutAuthor from "@/public/svg/AboutAuthor";

export default function Home() {
  return (
    <main className="flex min-h-full items-center top-20 justify-around pt-24 sm:flex-col-reverse sm:justify-center">
      <Link href="/about" className="hover:scale-95 transition-all">
        <AboutAuthor
          hoverColor="grey"
          width="w-96 sm:w-72"
          height="h-96 sm:h-72"
        />
      </Link>
      <Link href="/fridge" className="hover:scale-95 transition-all">
        <ToTheFridge
          hoverColor="grey"
          width="w-96 sm:w-72"
          height="h-96 sm:h-72"
        />
      </Link>
    </main>
  );
}
