import { Geist, Geist_Mono } from "next/font/google";
import { ChessProvider } from "@provider";

import "./globals.css";
import { NavigationContainer } from "@widgets/navigation-container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChessProvider>
          <NavigationContainer/>
          <div className="content">
            {children}
          </div>
        </ChessProvider>
      </body>
    </html>
  );
}
