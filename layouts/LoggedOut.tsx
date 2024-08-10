import Link from "next/link";
import Logo from "@/public/svg/Logo";
import Navbar from "./Navbar";

type LoggedOutProps = {
  children: React.ReactNode;
};

const LoggedOut: React.FC<LoggedOutProps> = ({ children }) => {
  return (
    <div className="w-full h-full gap-20 flex-col flex">
      <Navbar>
        <div>Left hand side</div>
        <div></div>
        <div>Right Links</div>
      </Navbar>
      <div className="flex h-full flex-col p-12">
        <div>{children}</div>
      </div>
      <div className="text-white underline hover:scale-95 transition-all">
        Created by: <Link href="https://github.com/lidiabylicka">Lidia</Link>
      </div>
    </div>
  );
};

export default LoggedOut;
