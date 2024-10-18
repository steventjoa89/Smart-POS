import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart POS: Streamline Your Sales Experience",
  description:
    "Transform your business operations with Smart POS, the all-in-one point-of-sale system designed for efficiency and simplicity. Whether you’re managing a bustling retail store or a cozy café, Smart POS offers intuitive features that enhance your customer experience. Process transactions quickly, track inventory in real-time, and generate insightful sales reports, all from an easy-to-use interface. With Smart POS, empower your team, delight your customers, and elevate your business to the next level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
