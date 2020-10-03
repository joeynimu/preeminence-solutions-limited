import { useState, useEffect } from "react"
const useWindow = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const onWidthChange = e => {
      const width = window.innerWidth
      const height = window.innerHeight
      setHeight(height)
      setWidth(width)
    }
    window.addEventListener("resize", onWidthChange)
    return () => {
      window.removeEventListener("resize", onWidthChange)
    }
  }, [])

  return {
    width,
    height,
  }
}

export default useWindow
