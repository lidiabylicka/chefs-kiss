import Navbar from "./Navbar";

type LoggedInProps = {
  children: React.ReactNode;
};

const LoggedIn: React.FC<LoggedInProps> = ({ children }) => {
  return (
    <div className="w-full h-full gap-20 flex-col justify-center flex">
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

export default LoggedIn;
