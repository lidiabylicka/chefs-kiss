type NavbarProps = {
  children: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="sticky top-0 w-full p-5">
      <div className="flex justify-between align-middle gap-4">{children}</div>
    </div>
  );
};

export default Navbar;
