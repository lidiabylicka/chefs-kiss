type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-5 bg-grey rounded-lg ">
      <div>{children}</div>
    </div>
  );
};
export default Wrapper;
