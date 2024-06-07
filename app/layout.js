import { Inter, Silkscreen } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "GosuCode",
  description: "Read blogs about techs and programming",
};

export default function RootLayout({ children }) {
  
  let header = (
    <header className={`${silkscreen.className} border-b-2 border-black shadow-sm shadow-black`}>
      <Link href={'/'}>
        <h1 className="text-6xl text-blue-900">GosuCode</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer className="border-t-2 border-black">
      <div className={silkscreen.className}>
        Follow me on social media and say<strong> Hello! </strong> 
        <ul className="flex gap-4">
          <li>
            <Link href={'https://www.instagram.com/alshreesh/'}>
              Instagram
            </Link>
          </li>
          <li>
            <Link href={'https://www.linkedin.com/in/alembershreesh/'}>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={'https://github.com/GosuCode'}>
              Github
            </Link>
          </li>
          <li>
            <Link href={'https://www.facebook.com/gosucode/'}>
              Facebook
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  );
}
