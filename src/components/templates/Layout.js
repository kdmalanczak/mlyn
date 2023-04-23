import React, { useState } from "react"
import Footer from "../organisms/Footer/Footer"
import NavBar from "../organisms/NavBar/Navbar"
import GlobalStyles from "../GlobalStyle"
import Cookies from "../molecules/Cookies/Cookies"

export const NavContext = React.createContext()

const Layout = ({ children, isNot404 = true, location }) => {
  const [isFrontVisible, setIsFrontVisible] = useState(isNot404)

  const changeNavVisibility = (status) => {
    setIsFrontVisible(status)
  }

  return (
    <NavContext.Provider
      value={{
        changeNavVisibility,
      }}
    >
      <GlobalStyles />
      <header>
        <NavBar transparent={isFrontVisible} />
      </header>
      {children}
      <Cookies />
      <Footer />
    </NavContext.Provider>
  )
}

export default Layout
