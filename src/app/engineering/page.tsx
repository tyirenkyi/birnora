import Image from "next/image"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Playfair_Display, Pixelify_Sans } from "next/font/google"

const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' })
const pixelify = Pixelify_Sans({ subsets: ['latin'], display: 'swap' })

export default function Engineering() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 3xl:w-5/12 2xl:w-7/12 md:w-8/12 w-full px-[20px] mx-auto scroll-smooth">
      <div className="w-full pt-10">
        <Navbar />
        <div className="h-full flex items-end justify-end py-56 border-b border-gray-100">
          <div className="my-auto md:grid md:grid-cols-2 md:space-y-0 space-y-16">
            <h1 className={`${playfair.className} text-white xl:text-5xl text-3xl tracking-wider pt-4 xl:w-2/3 `}>
              We provide comprehensive engineering design support
            </h1>
            <h6 className="text-white xl:text-base text-sm tracking-wider pt-8">
              <span className={`${pixelify.className} font-semibold xl:text-2xl text-xl`}>Birnora</span> <span className={`${playfair.className} xl:text-2xl text-xl tracking-wider`}> Engineering</span> <br/>
              We strive to foster collaborative partnerships understand our clients&apos; needs and develop tailored solutions that drive success. We are committed to delivering high-quality and cost-efficient design support services that meets industry standards.
            </h6>
          </div>
        </div>
        <div className="py-32 border-b border-gray-100">
          <h3 className={`w-2/4 text-white ${playfair.className} xl:text-4xl text-3xl font-medium tracking-wider`}>
            Our services
          </h3>
          <p className="text-white pt-6">
            With years of experience and expertise in MEP design and management, we offer a wide range of services in the construction industry. Whether you require electrical, mechanical, public health or security CAD our talented team is equipped to handle projects of any scale and complexity.
          </p>
          <div className="lg:grid lg:grid-cols-2 py-20 md:space-y-0 space-y-8">
            <span className="space-y-20 md:col-span-1">
              <h3 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-3xl text-xl tracking-wider`}>
                MEP services,
              </h3>
              <ul className="text-white text-opacity-60 space-y-4 md:w-3/4">
                <li className="border-l-2 border-gray pl-1">
                  The creation of a load lists and single line electrical diagram 
                </li>
                <li className="border-l-2 border-gray pl-1">
                  Calculating the dimensions of transformers, switchgears, generators, HV equipment 
                </li>
                <li className="border-l-2 border-gray pl-1">
                  Plans for electrical power, lighting including calculations of the lighting demand and design of lighting layouts. 
                </li>
                <li className="border-l-2 border-gray pl-1">
                  Design and drafting services for mechanical, electrical, security and public health
                </li>
                <li className="border-l-2 border-gray pl-1">
                  HVAC design including cooling heating and cooling calculation. 
                </li>
                <li className="border-l-2 border-gray pl-1">
                  As-built modelling and drafting services 
                </li>
                <li className="border-l-2 border-gray pl-1">
                  Coordinated MEP Shop drawings. 
                </li>
              </ul>
            </span>
            <div className="md:pt-32">
              <Image 
                src={"/hvac.jpg"}
                alt='hvac outlet'
                width={200}
                height={200}
                className="shadow-md w-full grayscale object-contain"
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 py-20 md:space-y-0 space-y-8">
            <span className="space-y-20 md:col-span-1">
              <h5 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-3xl text-xl tracking-wider`}>
                CAD & BIM services,
              </h5>
              <ul className="text-white text-opacity-60 space-y-4 md:w-3/4">
                <li className="border-l-2 border-gray pl-1">
                BIM Modelling 
                </li>
                <li className="border-l-2 border-gray pl-1">
                CAD MEP and architectural drawings created form sketches and PDF’s
                </li>
                <li className="border-l-2 border-gray pl-1">
                Conversion of 2D and 3D CAD Model
                </li>
              </ul>
            </span>
            <Image 
              src={"/cad.jpg"}
              alt=''
              width={200}
              height={200}
              className="shadow-md w-full grayscale object-contain"
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 py-20 md:space-y-0 space-y-8">
            <span className="space-y-20 md:col-span-1">
              <h5 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-3xl text-xl tracking-wider`}>
                Project Management services,
              </h5>
              <p className="text-white md:w-3/4 text-opacity-60">
                Discover Birnora Engineering’s construction programme development services. It is designed to transform your project’s vision into a well-structured and efficient roadmap. With our expertise and attention to detail, we offer comprehensive programme development solutions that ensure successful project delivery. 
              </p>
            </span>
            <Image 
              src={"/project.jpg"}
              alt=''
              width={200}
              height={200}
              className="shadow-md w-full grayscale object-contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
