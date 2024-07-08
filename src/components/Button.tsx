import React, { forwardRef } from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   className: string;
// }
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className }, ref) => (
    <button
      className={`max-w-[323px] relative font-['Oxanium'] text-white w-full h-[60px] border-[#F81DFB] bg-fuchsia-500/opacity-5 border before:absolute before:bg-[#F81DFB] before:h-1/2 before:w-2 before:-right-2 before:z-10 after:absolute after:bg-[#F81DFB] after:h-1/2 after:w-2 after:-left-2 after:z-10 ${className}`}
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
