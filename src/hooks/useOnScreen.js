import { useState, useEffect } from "react"

export function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const effectRef = ref
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        },
        {
          rootMargin,
        }
      )
      if (effectRef.current) {
        observer.observe(effectRef.current)
      }
      return () => {
        if (effectRef.current) observer.unobserve(effectRef.current)
      }
    }
  }, [ref, rootMargin])

  return isIntersecting
}
