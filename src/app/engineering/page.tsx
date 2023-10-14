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
              <span className={`${pixelify.className} font-semibold xl:text-2xl text-xl text-yellow-300`}>Birnora</span> <span className={`${playfair.className} xl:text-2xl text-xl tracking-wider`}> Engineering</span> <br/>
              We strive to foster collaborative partnerships understand our clients&apos; needs and develop tailored solutions that drive success. We are committed to delivering high-quality and cost-efficient design support services that meets industry standards.
            </h6>
          </div>
        </div>
        <div className="py-32 border-b border-gray-100">
          <h3 className={`w-2/4 text-white ${playfair.className} xl:text-4xl text-3xl font-medium tracking-wider`}>
            Our services
          </h3>
          <p className="text-white pt-6 lg:w-2/3">
            With years of experience and expertise in MEP design and management, we offer a wide range of services in the construction industry. Whether you require electrical, mechanical, public health or security CAD our talented team is equipped to handle projects of any scale and complexity.
          </p>
          <p className="text-white pt-6 lg:w-2/3 font-semibold text-xl">
          We have a robust QA process in place that ensures that there is little to no repeat work. 
          </p>
          <div className="lg:grid lg:grid-cols-2 py-20 md:space-y-0 space-y-8">
            <span className="space-y-20 md:col-span-1">
              <h5 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-3xl text-xl tracking-wider`}>
                MEP services,
              </h5>
              <p className="text-white md:w-3/4">
              We offer top-notch MEP Design services tailored to contractors and developers. Our MEP services encompasses a wide range of capabilities including HVAC system design, electrical power distribution, lighting design, fire protection systems, plumbing and sanitary systems, and more
              </p>
            </span>
            <Image 
              src={"/mep.jpg"}
              alt='hvac outlet'
              width={200}
              height={200}
              className="shadow-md w-full grayscale object-contain"
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 py-20 md:space-y-0 space-y-8">
            <span className="space-y-20 md:col-span-1">
              <h5 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-3xl text-xl tracking-wider`}>
                CAD & BIM services,
              </h5>
              <p className="text-white md:w-3/4">
              With our expertise in Computer-Aided Design (CAD) and Building Information Modelling (BIM), we offer precise and detailed 2D and 3D models that bring your vision to life. 
<br/><br/>
Our team ensures accurate documentation, clash detection, quantity take-offs, and efficient project management.              </p>
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
              <p className="text-white md:w-3/4">
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
