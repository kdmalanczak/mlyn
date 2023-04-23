import { useEffect } from "react"

export function useOnClickOutside(handler, ref, ref2 = null) {
  useEffect(() => {
    if (typeof window !== `undefined` && typeof document !== "undefined") {
      const listener = event => {
        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          !ref2.current ||
          ref2.current.contains(event.target)
        ) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    }
  }, [ref, ref2, handler])
}
