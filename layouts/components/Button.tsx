type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="bg-pink border border-yellow pt-2 pb-1 px-2 rounded-lg text-aqua">
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
