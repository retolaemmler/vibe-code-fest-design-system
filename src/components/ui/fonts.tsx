import type { ReactNode } from "react";

export interface FontsProps {
  children?: ReactNode;
}

/**
 * Loads the design-system brand fonts (Geist Sans and Geist Mono).
 *
 * Mount this component once inside your app shell, ideally in `<head>`.
 * It renders the required Google Fonts preconnect and stylesheet links.
 */
export function Fonts({ children }: FontsProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
      />
      {children}
    </>
  );
}
