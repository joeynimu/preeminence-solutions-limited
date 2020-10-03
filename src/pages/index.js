import React from "react"
const Header = React.lazy(() => import("components/header"))
const Hero = React.lazy(() => import("components/hero"))
const Intro = React.lazy(() => import("components/intro"))
const Services = React.lazy(() => import("components/services"))

const HomePage = () => {
  return (
    <React.Suspense
      fallback={
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <Header />
      <Hero />
      <Intro />
      <Services />
    </React.Suspense>
  )
}

export default HomePage
