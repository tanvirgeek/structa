import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 px-6 py-3 text-white bg-primary rounded-lg font-mono font-medium overflow-hidden cursor-pointer self-start transition-all duration-300"
    >
      {/* Sliding background */}
      <span className="absolute inset-0 bg-green-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <MdArrowOutward className="text-lg transform transition-transform duration-300 group-hover:rotate-405" />
      </span>
    </button>
  );
};

export default Button;
