import Link from "next/link"
import { Pixelify_Sans, Playfair_Display } from "next/font/google"

const pixelify = Pixelify_Sans({ subsets: ['latin'], display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' })

const Navbar = () => {
  return (
    <nav
      className="flex flex-row items-center w-full justify-between"
    >
      <Link href="/">
        <h1
          className={`font-bold text-white text-4xl ${pixelify.className} text-yellow-300`}
        >
          Birnora
        </h1>
      </Link>

      <span className="md:flex flex-row justify-between space-x-8 hidden">
        <a className={`text-yellow-300 ${playfair.className} font-semibold text-lg tracking-wider`} href="#about">
          About
        </a>
        <a className={`text-yellow-300 ${playfair.className} font-semibold text-lg tracking-wider`} href="#services">
          Services
        </a>
        <a className={`text-yellow-300 ${playfair.className} font-semibold text-lg tracking-wider`} href="#contact">
          Contact
        </a>
      </span>
    </nav>
  )
}

export default Navbar
