import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  classNames?: string;
  variant?: "primary" | "outline";
  href?: string;
  target?: "_blank" | "_self";
}

const Button = ({
  text,
  onClick,
  classNames,
  variant = "primary",
  href = "/",
  target = "_self",
}: ButtonProps) => {
  const baseClasses =
    "group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-medium overflow-hidden cursor-pointer self-start transition-all duration-300";

  const variantClasses = {
    primary: "bg-primary text-background",
    outline: "bg-background text-primary border border-primary",
  };

  const overlayColors = {
    primary: "bg-green-800",
    outline: "bg-green-800",
  };

  const content = (
    <>
      {/* Sliding overlay */}
      <span
        className={clsx(
          "absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0",
          overlayColors[variant]
        )}
      />
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <MdArrowOutward className="text-lg transform transition-transform duration-300 group-hover:rotate-[405deg]" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={clsx(baseClasses, variantClasses[variant], classNames)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clsx(baseClasses, variantClasses[variant], classNames)}
    >
      {content}
    </button>
  );
};

export default Button;
