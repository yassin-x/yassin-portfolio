import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "700"],
  preload: true,
});

// const cairo = Cairo({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   preload: true,
// });

export const metadata: Metadata = {
  title: "Yassin Ibrahim | Portfoio",
  description:
    "Passionate full-stack developer specializing in building high-performance web applications using modern technologies like Next.js, React.js, and Node.js. Focused on scalability, security, and seamless user experiences.",
  icons: {
    icon: "/me.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} transition-colors duration-100 ease-linear overflow-x-hidden`}
      >
        <NextAuthSessionProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
