import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlavaS — Junior Fullstack Developer",
  description:
    "SlavaS portfolio — Junior Fullstack Developer building thoughtful web experiences with React, Next.js, Node.js, and TypeScript.",
  openGraph: {
    title: "SlavaS — Junior Fullstack Developer",
    description: "Selected projects and experience from SlavaS.",
    type: "website",
    siteName: "SlavaS",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
