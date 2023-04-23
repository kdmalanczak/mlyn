import React, { useState, useEffect, useCallback } from "react"
import { CookiesBox } from "./Cookies.styles"
import CookiesButton from "../../atoms/CookiesButton"

const Cookies = () => {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false)

  useEffect(() => {
    const cookie = localStorage.getItem("cookiesAccepted")
    setAreCookiesAccepted(!!cookie)
  }, [])

  const accteptCookies = useCallback(() => {
    localStorage.setItem("cookiesAccepted", "true")
    setAreCookiesAccepted(true)
  }, [])

  return (
    <>
      {!areCookiesAccepted && (
        <CookiesBox>
          <p>
            Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
            poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na
            ich użycie.
          </p>
          <CookiesButton onClick={accteptCookies}>Akceptuję</CookiesButton>
        </CookiesBox>
      )}
    </>
  )
}

export default Cookies
