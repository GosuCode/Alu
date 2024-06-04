import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alu",
  description: "Read blogs about techs and programming",
};

export default function RootLayout({ children }) {
  
  let header = (
    <header>
      <Link href={'/'}>
        <h1>Alu</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>
        Follow me on social media and say<strong> Hello! </strong> 
      </p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
        </body>
    </html>
  );
}
