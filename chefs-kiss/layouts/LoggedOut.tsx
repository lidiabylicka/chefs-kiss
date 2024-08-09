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
      <div className="flex flex-col p-12">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default LoggedOut;
