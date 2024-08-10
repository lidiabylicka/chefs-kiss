import LoggedIn from "@/layouts/LoggedIn";

type UserLayoutProps = {
  children: React.ReactNode;
};

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return <LoggedIn>{children}</LoggedIn>;
};

export default UserLayout;
