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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
