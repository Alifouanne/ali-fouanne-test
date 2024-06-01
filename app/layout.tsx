import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({ subsets: ["latin"] });

/**
 * RootLayout component to define the layout of the root of the application.
 *
 * @param children React node representing the content to be rendered within the layout.
 * @returns JSX element representing the HTML structure of the layout with the provided children.
 */
export const metadata: Metadata = {
  title: "Ali Fouanne Test App",
  description: "Created By Eng Ali Fouanne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
