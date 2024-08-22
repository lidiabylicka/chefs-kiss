import Button from "./components/Button";
import Link from "next/link";

type LoggedOutProps = {
  children: React.ReactNode;
};

const LoggedOut: React.FC<LoggedOutProps> = ({ children }) => {
  return (
    <div className="w-full h-full gap-20 flex-col flex">
      <div className="flex h-full flex-col align-middle justify-center items-center p-12">
        <div>{children}</div>
        <div>
          <Link href="/fridge">
            <Button>log back in / register</Button>
          </Link>
        </div>
      </div>
      <div className="text-white underline hover:scale-95 transition-all">
        Created by: <Link href="https://github.com/lidiabylicka">Lidia</Link>
      </div>
    </div>
  );
};

export default LoggedOut;
