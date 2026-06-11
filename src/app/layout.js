import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Cafés — Menú",
  description: "Carta de cafés y bebidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
