import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"

import { cn } from "@/lib/utils"

const ubuntu_init = Ubuntu({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  title: "Event Name",
  description: "Event Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={cn(
              "min-h-screen bg-background font-sans antialiased bg-blue_bg",
              ubuntu_init.variable
          )}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
