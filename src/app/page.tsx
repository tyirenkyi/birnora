import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Playfair_Display, Pixelify_Sans } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const pixelify = Pixelify_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 2xl:w-6/12 md:w-9/12 w-full px-[20px] mx-auto scroll-smooth">
      <div className="h-screen pt-10">
        <Navbar />
        <div className="h-full flex items-end justify-end">
          <div className="my-auto md:grid md:grid-cols-2 md:space-y-0 space-y-16">
            <h1 className={`text-white ${playfair.className} xl:text-5xl text-3xl tracking-wider pt-4 md:w-full w-1/3`}>
              Your Goals, Our Commitment
            </h1>
            <h6 className="text-white xl:text-lg text-base tracking-wider">
              <span className={`${pixelify.className}`}>Birnora</span> is your trusted Infrastructure Delivery Partner, specializing in a diverse range of
              sectors, including Agro-Processing, Green Hydrogen, Mission Critical Projects, and Major
              Construction Projects. With a relentless commitment to engineering excellence, we bring
              innovation, precision, and sustainable solutions to every project we undertake.
            </h6>
          </div>
        </div>
      </div>
      <section id="about">
        <div className="border-t border-b border-gray-100 md:grid lg:grid-cols-2 md:grid-cols-3 py-32 md:space-y-0 space-y-8">
          <span className="space-y-20 md:col-span-1">
            <h3 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-4xl text-2xl tracking-wider`}>
              Our expertise extends beyond project execution
            </h3>
            <h6 className="text-white lg:w-2/4 md:w-3/4 my-auto xl:text-lg sm:text-base text-sm tracking-wider text-opacity-60">
              We offer invaluable Market Access
              solutions for both hard and soft commodities. Leveraging our extensive networks and
              market insights, we empower businesses to thrive in the global trade landscape.
            </h6>
          </span>
          <Image 
            src={"/shapes.jpg"}
            alt=''
            width={200}
            height={200}
            className="shadow-md w-full grayscale md:h-[600px] sm:h-[400px] h-[300px] md:col-span-2 lg:col-span-1"
          />
        </div>
        <div className="border-t border-b border-gray-100 md:grid lg:grid-cols-2 md:grid-cols-3 py-32 md:space-y-0 space-y-8">
          <span className="space-y-20 md:col-span-1">
            <h3 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-4xl text-2xl tracking-wider`}>
              Complimenting our services,
            </h3>
            <h6 className="text-white lg:w-2/4 md:w-3/4 my-auto xl:text-lg sm:text-base text-sm tracking-wider text-opacity-60">
            we provide comprehensive Engineering Design Support
  Services. From initial concept to detailed planning and execution, our dedicated team
  collaborates closely with clients to ensure the highest standards of engineering and
  innovation are applied to each project.
            </h6>
          </span>
          <Image 
            src={"/metal.jpg"}
            alt=''
            width={200}
            height={200}
            className="shadow-md w-full grayscale md:h-[600px] sm:h-[400px] h-[300px] md:col-span-2 lg:col-span-1"
          />
        </div>
        <div className="border-t border-b border-gray-100 md:grid lg:grid-cols-2 md:grid-cols-3 py-32 md:space-y-0 space-y-8">
          <span className="space-y-20 md:col-span-1">
            <h3 className={`lg:w-2/4 w-3/4 text-white ${playfair.className} xl:text-4xl text-2xl tracking-wider`}>
              At <span className={`${pixelify.className}`}>Birnora</span>,
            </h3>
            <h6 className="text-white lg:w-2/4 md:w-3/4 my-auto xl:text-lg sm:text-base text-sm tracking-wider text-opacity-60">
            we are driven by a passion for excellence and a dedication to our clients&apos; success.
  With us as your partner, you&apos;ll experience the difference that top-tier infrastructure delivery,
  market access, and engineering expertise can make.
            </h6>
          </span>
          <Image 
            src={"/reflective.jpg"}
            alt=''
            width={200}
            height={200}
            className="shadow-md w-full grayscale md:h-[600px] sm:h-[400px] h-[300px] md:col-span-2 lg:col-span-1"
          />
        </div>
      </section>
      <section className="w-full" id="services">
        <div className="border-b border-gray-100 py-44 w-full">
          <h3 className={`w-2/4 text-white ${playfair.className} xl:text-4xl text-3xl font-medium tracking-wider`}>
            Our services
          </h3>
          <span className="flex xl:flex-row flex-col xl:items-center xl:justify-between text-white pt-32 items-start space-y-4 xl:space-y-0">
            <h6 className={`${playfair.className} xl:text-3xl text-xl w-[200px] tracking-wider`}>
              Infrastructure Delivery Partner
            </h6>
            <p className="text-opacity-50 text-white xl:text-lg sm:text-base text-sm md:file:w-[400px]">
            With a team
of highly skilled professionals, we bring innovation and precision to every project we
undertake.
            </p>
            <button
              className="text-white text-lg hover:text-opacity-70"
            >
              View +
            </button>
          </span>
          <span className="flex xl:flex-row flex-col xl:items-center xl:justify-between text-white pt-32 items-start space-y-4 xl:space-y-0">
            <h6 className={`${playfair.className} xl:text-3xl text-xl w-[200px] tracking-wider`}>
              Market Access
            </h6>
            <p className="text-opacity-50 text-white xl:text-lg sm:text-base text-sm md:w-[400px]">
            Beyond engineering and project management, we pride ourselves on facilitating
market access for both hard and soft commodities.
            </p>
            <button
              className="text-white text-lg hover:text-opacity-70"
            >
              View +
            </button>
          </span>
          <span className="flex xl:flex-row flex-col xl:items-center xl:justify-between text-white pt-32 items-start space-y-4 xl:space-y-0">
            <h6 className={`${playfair.className} xl:text-3xl text-xl w-[200px] tracking-wider`}>
              Engineering Design Support Services
            </h6>
            <p className="text-opacity-50 text-white xl:text-lg sm:text-base text-sm md:w-[400px]">
            From conceptualization and
planning to detailed designs, our experts work closely with clients to ensure that
each project is backed by sound engineering principles and innovative solutions.
            </p>
            <button
              className="text-white text-lg hover:text-opacity-70"
            >
              View +
            </button>
          </span>
        </div>
      </section>
      <section className="w-full">
        <div className="border-b border-gray-100 py-44 w-full">
          <h3 className={`w-2/4 text-white ${playfair.className} xl:text-4xl text-3xl font-medium`}>
            Countries
          </h3>
          <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-x-28 lg:space-y-0 space-y-5 pt-32">
            <h4
              className={`text-white ${playfair.className} xl:text-2xl text-xl font-medium`}
            >Ghana</h4>
            <h4
              className={`text-white ${playfair.className} xl:text-2xl text-xl font-medium`}
            >United Kingdom</h4>
            <h4
              className={`text-white ${playfair.className} xl:text-2xl text-xl font-medium`}
            >Sierra Leone</h4>
            <h4
              className={`text-white ${playfair.className} xl:text-2xl text-xl font-medium`}
            >Tanzania</h4>
            <h4
              className={`text-white ${playfair.className} xl:text-2xl text-xl font-medium`}
            >Zambia</h4>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
