"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      expand={true}
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: "group-[.toast]:bg-success-50 group-[.toast]:text-success-800 group-[.toast]:border-success-200 dark:group-[.toast]:bg-success-900/20 dark:group-[.toast]:text-success-300 dark:group-[.toast]:border-success-800",
          error: "group-[.toast]:bg-error-50 group-[.toast]:text-error-800 group-[.toast]:border-error-200 dark:group-[.toast]:bg-error-900/20 dark:group-[.toast]:text-error-300 dark:group-[.toast]:border-error-800",
          warning: "group-[.toast]:bg-orange-50 group-[.toast]:text-orange-800 group-[.toast]:border-orange-200 dark:group-[.toast]:bg-orange-900/20 dark:group-[.toast]:text-orange-300 dark:group-[.toast]:border-orange-800",
          info: "group-[.toast]:bg-blue-50 group-[.toast]:text-blue-800 group-[.toast]:border-blue-200 dark:group-[.toast]:bg-blue-900/20 dark:group-[.toast]:text-blue-300 dark:group-[.toast]:border-blue-800",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
