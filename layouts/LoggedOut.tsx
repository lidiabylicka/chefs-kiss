import Link from "next/link";
import Navbar from "./Navbar";
import Navlink from "./components/Navlink";

type LoggedOutProps = {
  children: React.ReactNode;
};

const LoggedOut: React.FC<LoggedOutProps> = ({ children }) => {
  return (
    <div className="w-full h-full gap-20 flex-col flex">
      <Navbar>
        <div className="flex flex-col">
          <Navlink href="/fridge">REGISTER / LOG IN</Navlink>
          <Navlink href="/projects">SEE OTHER PROJECTS</Navlink>
          <Navlink href="/about">ABOUT THE AUTHOR</Navlink>
        </div>
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
