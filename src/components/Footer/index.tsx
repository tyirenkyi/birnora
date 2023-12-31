import Link from "next/link"
import { Pixelify_Sans, Playfair_Display } from "next/font/google"

const pixelify = Pixelify_Sans({ subsets: ['latin'], display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' })

const Footer = () => {
  return (
    <div className="md:py-20 py-10 w-full">
      <div className="flex flex-row items-center w-full justify-between pb-10">
        <Link href="/">
          <h1
            className={`font-bold text-yellow-300 xl:text-4xl md:text-2xl text-xl ${pixelify.className}`}
          >
            Birnora
          </h1>
        </Link>

        <span className="flex flex-row justify-between space-x-8">
          <a className={`text-yellow-300 ${playfair.className} font-semibold lg:text-lg text-base tracking-wider`}  href="#about">
            About
          </a>
          <a className={`text-yellow-300 ${playfair.className} font-semibold lg:text-lg text-base tracking-wider`} href="#services">
            Services
          </a>
        </span>
      </div>
      <div className="flex flex-row items-center space-x-2" id="contact">
        <p
          className={`${playfair.className} text-white lg:text-xl text-base `}
        >Send an email to:</p>
        <a
          className="text-white font-medium pt-1 lg:text-base text-sm" 
          href="mailto:info@birnora.com"
        >
          info@birnora.com
        </a>
      </div>
    </div>
  )
}

export default Footer
