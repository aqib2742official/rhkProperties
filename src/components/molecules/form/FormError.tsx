/**
 * Form Error Message Component
 * Displays validation error messages for form fields
 */

import React from "react";

interface FormErrorProps {
  message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
      {message}
    </p>
  );
};

export default FormError;

