import React, { ReactNode } from "react";

// Simple spinner icon component
const SpinnerIcon = () => (
  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

interface ButtonProps extends ButtonBaseProps {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

// Constants
const BASE_CLASS = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-hidden focus:ring-3 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed";

const SIZE_CLASSES = {
  xs: { normal: "px-3 py-1.5 text-xs gap-1.5", icon: "p-1.5" },
  sm: { normal: "px-3.5 py-2 text-sm gap-2", icon: "p-2" },
  md: { normal: "px-4 py-2.5 text-sm gap-2", icon: "p-2.5" },
  lg: { normal: "px-5 py-3 text-base gap-2.5", icon: "p-3" },
  xl: { normal: "px-6 py-3.5 text-base gap-3", icon: "p-3.5" },
} as const;

const VARIANT_CLASSES = {
  primary: "bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 focus:ring-accent/20",
  secondary: "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 focus:ring-accent/20",
  outline: "bg-transparent text-foreground border border-gray-300 shadow-sm hover:bg-secondary focus:ring-accent/20 dark:border-gray-600",
  ghost: "bg-transparent text-foreground hover:bg-secondary focus:ring-accent/20",
  danger: "bg-red-600 text-white shadow-lg hover:bg-red-700 focus:ring-red-500/20",
  success: "bg-green-600 text-white shadow-lg hover:bg-green-700 focus:ring-green-500/20",
} as const;

const SPINNER_SIZES = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-6 h-6",
} as const;

// Utility functions
const buildClasses = (...classes: (string | boolean | undefined)[]) => 
  classes.filter(Boolean).join(" ");

// Components
const Spinner: React.FC<{ size: keyof typeof SPINNER_SIZES }> = ({ size }) => (
  <span className={`inline-flex items-center justify-center animate-spin ${SPINNER_SIZES[size]}`}>
    <SpinnerIcon />
  </span>
);

const Icon: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="flex items-center justify-center">{children}</span>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      loading,
      loadingText,
      fullWidth,
      iconOnly,
      disabled,
      className,
      type = "button",
      ...rest
    },
    ref
  ) {
    const buttonClasses = buildClasses(
      BASE_CLASS,
      SIZE_CLASSES[size][iconOnly ? "icon" : "normal"],
      VARIANT_CLASSES[variant],
      (disabled || loading) && "opacity-50",
      fullWidth && "w-full",
      className
    );

    const content = loading && loadingText ? loadingText : children;
    const showIcon = (icon: ReactNode) => !loading && icon && <Icon>{icon}</Icon>;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={buttonClasses}
        aria-busy={loading}
        {...rest}
      >
        {loading && <Icon><Spinner size={size} /></Icon>}
        {showIcon(leftIcon)}
        {!iconOnly && content}
        {showIcon(rightIcon)}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;