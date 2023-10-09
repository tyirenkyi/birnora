import { Pixelify_Sans, Playfair_Display } from "next/font/google"

const pixelify = Pixelify_Sans({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <nav
      className="flex flex-row items-center w-full justify-between"
    >
      <h1
        className={`font-bold text-white text-4xl ${pixelify.className}`}
      >
        Birnora
      </h1>

      <span className="md:flex flex-row justify-between space-x-8 hidden">
        <a className={`text-white ${playfair.className} font-semibold text-lg tracking-wider`} href="#about">
          About
        </a>
        <a className={`text-white ${playfair.className} font-semibold text-lg tracking-wider`} href="#services">
          Services
        </a>
        <a className={`text-white ${playfair.className} font-semibold text-lg tracking-wider`} href="#contact">
          Contact
        </a>
      </span>
    </nav>
  )
}

export default Navbar
