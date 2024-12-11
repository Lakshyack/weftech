import localFont from "next/font/local";
import "./globals.css";

// Loading local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Make sure the font is inside the 'public/fonts' folder
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Same here for the second font
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Weframe Tech - Frontend Assignment",
  description: "Frontend implementation for the Weframe Tech assignment, showcasing a pixel-perfect and responsive design using Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link to Google Font */}
       
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
