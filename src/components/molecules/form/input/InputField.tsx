import React, { ReactNode, useId } from "react";

type InputBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "ref"
>;

interface InputProps extends InputBaseProps {
  label?: string;
  labelClassName?: string;
  success?: boolean;
  error?: boolean;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  leftIconClassName?: string;
  rightIconClassName?: string;
  leftIconLabel?: string;
  rightIconLabel?: string;
}

// Constants
const BASE_INPUT_CLASS = "h-11 w-full rounded-lg border appearance-none py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30";
const BASE_LABEL_CLASS = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const BASE_HINT_CLASS = "mt-1.5 text-xs";
const BASE_ICON_CLASS = "absolute top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400";

// Utility functions
const getPaddingClass = (hasLeft: boolean, hasRight: boolean): string => {
  if (hasLeft && hasRight) return "pl-11 pr-11";
  if (hasLeft) return "pl-11 pr-4";
  if (hasRight) return "pl-4 pr-11";
  return "px-4";
};

const getStateClass = (disabled?: boolean, error?: boolean, success?: boolean): string => {
  if (disabled) return "text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";
  if (error) return "border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800";
  if (success) return "border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800";
  return "bg-transparent text-gray-800 border-gray-300 focus:border-accent focus:ring-accent/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-accent";
};

const getHintClass = (error?: boolean, success?: boolean): string => {
  if (error) return "text-error-500";
  if (success) return "text-success-500";
  return "text-gray-500";
};

// Icon renderer component
const IconWrapper: React.FC<{
  icon: ReactNode;
  position: "left" | "right";
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}> = ({ icon, position, onClick, className, ariaLabel, disabled }) => {
  const positionClass = position === "left" ? "left-3" : "right-3";
  const fullClass = `${BASE_ICON_CLASS} ${positionClass} ${className || ""}`;

  return onClick ? (
    <button
      type="button"
      className={`${fullClass} cursor-pointer`}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      aria-label={ariaLabel || `${position} icon action`}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
    >
      {icon}
    </button>
  ) : (
    <span className={fullClass} aria-hidden="true">
      {icon}
    </span>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    labelClassName,
    success,
    error,
    hint,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    leftIconClassName,
    rightIconClassName,
    leftIconLabel,
    rightIconLabel,
    type = "text",
    id,
    className,
    disabled,
    required,
    ...rest
  },
  ref
) {
  const autoId = useId();
  const inputId = id ?? (label ? `in-${autoId}` : undefined);
  const hintId = hint ? `hint-${autoId}` : undefined;

  const inputClasses = `${BASE_INPUT_CLASS} ${getPaddingClass(!!leftIcon, !!rightIcon)} ${getStateClass(disabled, error, success)} ${className || ""}`;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className={`${BASE_LABEL_CLASS} ${labelClassName || ""}`}>
          {label}
          {required && <span className="text-error-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <IconWrapper
            icon={leftIcon}
            position="left"
            onClick={onLeftIconClick}
            className={leftIconClassName}
            ariaLabel={leftIconLabel}
            disabled={disabled}
          />
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          required={required}
          className={inputClasses}
          aria-describedby={hintId}
          {...rest}
        />

        {rightIcon && (
          <IconWrapper
            icon={rightIcon}
            position="right"
            onClick={onRightIconClick}
            className={rightIconClassName}
            ariaLabel={rightIconLabel}
            disabled={disabled}
          />
        )}
      </div>

      {hint && (
        <p id={hintId} className={`${BASE_HINT_CLASS} ${getHintClass(error, success)}`} role={error ? "alert" : undefined}>
          {hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
