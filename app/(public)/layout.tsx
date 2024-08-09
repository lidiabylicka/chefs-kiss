import LoggedOut from "@/layouts/LoggedOut";

type GuestLayoutProps = {
  children: React.ReactNode;
};

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return <LoggedOut>{children}</LoggedOut>;
};

export default GuestLayout;
