import { Roboto, Lemon } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["100", "400", "500", "700"],
});
const lemon = Lemon({
  subsets: ["latin"],
  variable: "--lemon",
  weight: ["400"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}, ${lemon.variable}`}>
        {children}
      </body>
    </html>
  );
}
