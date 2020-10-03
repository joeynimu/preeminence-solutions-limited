import React from "react"

const serivces = [
  {
    id: 1,
    title: "Toners & Catridges",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 2,
    title: "Audio & Video Cables",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 3,
    title: "Computer Accessories",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 4,
    title: "Projectors",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 5,
    title: "Projector Screens",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 6,
    title: "Video Conferencing Solutions",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 7,
    title: "Laptops & Desktops",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 8,
    title: "CCTV cameras",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
  {
    id: 9,
    title: "Phone & Accessories",
    img: {
      src: "https://tailwindcss.com/img/card-top.jpg",
      alt_text: "Toners and Catridges",
    },
    text: "",
  },
]

export default () => (
  <div className="max-w-screen-xl mx-auto text-gray-400 px-4 py-2 md:pb-10 md:pt-4 lg:py-2">
    <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 block py-4 md:py-10">
      Products & Services
    </h3>
    <div className="md:grid md:grid-cols-3 md:gap-10">
      {serivces.map(({ title, id, img: { src, alt_text } }) => (
        <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img loading="lazy" className="w-full" src={src} alt={alt_text} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-yellow-600">
              {title}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
