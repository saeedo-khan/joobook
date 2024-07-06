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
    <button className={className} ref={ref}>
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
