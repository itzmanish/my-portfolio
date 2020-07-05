import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <nav className="main-nav m-hidden">
          <ul className="main-nav-list">
            <li>
              <a href="https://www.instagram.com/izmanish/" target="__blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/itzmanish_/" target="__blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/itzmanish" target="__blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/itzmanish" target="__blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
