import Image from "next/image"
import { Playfair_Display, Pixelify_Sans } from 'next/font/google'

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' })
export default function Market() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 3xl:w-5/12 2xl:w-7/12 md:w-8/12 w-full px-[20px] mx-auto scroll-smooth">
      <div className="w-full pt-10">
        <Navbar />
        <div className="h-full flex justify-center">
          <div className="md:grid lg:grid-cols-2 md:grid-cols-3 py-32 md:space-y-0 space-y-8">
            <span className="space-y-20 md:col-span-1">
              <h3 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-4xl text-2xl tracking-wider`}>
                Market Access
              </h3>
              <h6 className="text-white md:w-3/4 my-auto xl:text-lg sm:text-base text-sm tracking-wider text-opacity-60">
              Beyond engineering and project management, we pride ourselves on facilitating
  market access for both hard and soft commodities. We understand the complexities
  of global trade, and our insights and connections empower businesses to thrive in a
  competitive market environment.
              </h6>
            </span>
            <Image 
              src={"/market.jpg"}
              alt=''
              width={200}
              height={200}
              className="shadow-md w-full grayscale md:h-[600px] sm:h-[400px] h-[300px] md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 w-full">
        <Footer />
      </div>
    </main>
  )
}