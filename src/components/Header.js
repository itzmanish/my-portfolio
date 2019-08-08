import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/">
          <h1 className="mh-logo">izmanish</h1>
        </Link>
        <nav className="main-nav m-hidden">
          <ul className="main-nav-list">
            <li>
              <a href="https://www.instagram.com/izmanish/" target="__blank">
                <i class="fab fa-instagram"></i>
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
            <li>
              <a href="mailto:manish@izmanish.online" target="__blank">
                <i class="fa fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
