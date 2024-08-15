"use client";

import Link from "next/link";

type NavlinkProps = {
  href: string;
  children: React.ReactNode | string;
};

const Navlink: React.FC<NavlinkProps> = ({ href, children }) => {
  return (
    <div className="relative inline-block h-8">
      <Link href={href}>
        <div
          className="
            relative h-7 hover:text-white
            before:content-[''] before:absolute before:inset-0 
            before:transition-all before:duration-200 before:transform 
            before:scale-0 before:rounded-full hover:before:scale-[0.6] 
            before:bg-[radial-gradient(ellipse,_#E4D00A,_transparent)]"
        >
          <p className="hover:text-white hover:scale-105 z-20">{children}</p>
        </div>
      </Link>
    </div>
  );
};
export default Navlink;
