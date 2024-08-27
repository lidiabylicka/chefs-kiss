type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-pink w-full max-h-max border hover:border-white border-yellow pt-2 pb-1 px-2 sm:h-12 sm:flex sm:align-middle sm:justify-center rounded-lg text-aqua"
    >
      <div
        className="
            relative h-7 hover:text-white
            before:content-[''] before:absolute before:inset-0 
            before:transition-all before:duration-200 before:transform 
            before:scale-0 before:rounded-full hover:before:scale-[0.6] 
            before:bg-[radial-gradient(ellipse,_#E4D00A,_transparent)]"
      >
        {children}
      </div>
    </button>
  );
};
export default Button;
