import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "RADCOM",
  description: "Soluții integrate pentru transport public",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/general-sans" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
