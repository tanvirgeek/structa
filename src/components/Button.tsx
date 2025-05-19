import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary rounded-lg font-mono font-medium transition-all duration-300 hover:bg-green-800 cursor-pointer self-start"
    >
      {text}
      <MdArrowOutward className="text-lg" />
    </button>
  );
};

export default Button;
