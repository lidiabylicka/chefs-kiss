type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className="text-center w-full text-aqua">{children}</h1>;
};

export default Header;
