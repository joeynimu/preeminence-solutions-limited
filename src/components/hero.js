import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "hero-banner-image" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="grid md:grid-cols-2  max-w-screen-xl mx-auto px-4 py-1">
      <div className="flex items-center">
        <div>
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Solutions to grow
            <br />
            your <span className="text-yellow-600">business</span>
          </h2>
          <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            We offer audio-visual solutions and digital accessories to grow your
            business above and beyond.
          </p>
          <div className="mt-5 mb-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#contacts"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-100 bg-gold-600 hover:bg-gold-500 focus:outline-none focus:border-gold-500 focus:shadow-outline-gold-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Let's Talk
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-yellow-300 hover:text-gray-600 hover:bg-yellow-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-2 md:mt-0 overflow-hidden">
        <div
          className="hidden lg:block absolute bg-white m-auto top-0 bottom-0 z-10"
          style={{
            height: "calc(100% + 20px)",
            width: "83px",
            transform: "rotate(10deg)",
            left: "-43px",
          }}
        ></div>
        <Image
          className="w-full object-cover"
          fluid={data.file.childImageSharp.fluid}
          alt="Banner"
        />
      </div>
    </div>
  )
}

export default Hero
