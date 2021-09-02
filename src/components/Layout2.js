import React from "react"
import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSlidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSlidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSlidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
