import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [dark, setDark] = useState(true)
  const [toggleClass, setToggleClass] = useState("darkmode fas fa-sun")

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
      setToggleClass("darkmode fas fa-sun")
    } else {
      document.body.classList = ""
      setToggleClass("darkmode fas fa-moon")
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className="overlay">
        <Header />
        <div className="container">
          <div className="layout">
            <div className="main">
              <h1 className="title">
                Hi{" "}
                <span role="img" aria-label="hello">
                  👋 <br />
                </span>
                I am <span className="highlight-text">Manish </span>
                <br />
                Software Engineer ❤️ WebRTC.
              </h1>
              {/* <p>
                I am proficient in {}
                <span className="highlight-text">
                  <Typed
                    strings={[
                      "Go",
                      "Typescript",
                      "Javascript",
                      "Rust",
                      "Python",
                      "Flutter",
                      "C",
                    ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                  />
                  .
                </span>
              </p> */}
              <p style={{ marginTop: "40px" }}>
                <span role="img" aria-label="computer">
                  {" "}
                  💻
                </span>{" "}
                Go, Typescript, Rust, Python, C, Assembly Language.{" "}
              </p>
              <p>
                <span role="img" aria-label="hearts">
                  ❤️
                </span>{" "}
                Reading books, Travelling to new places (more inclined to nature).
              </p>
              <p>
                <span role="img" aria-label="triangular-rular">
                  📐
                </span>{" "}
                Microservices, Distributed systems design.
              </p>
              <p>
                <span role="img" aria-label="dart">
                  🎯
                </span>{" "}
                Internet Of Things, Embedded Programming, Artificial
                Intelligence.
              </p>

              <p style={{ marginTop: "40px" }}>
                <span role="img" aria-label="email">
                  📧
                </span>
                <a href="mailto:manish@heymanish.com">
                  <span className="highlight-text">
                    {" "}
                    manish@heymanish.com
                  </span>
                </a>
              </p>
              <div className="bottom-nav">
                <ul className="main-nav-list">
                  <li>
                    <a
                      href="https://www.twitter.com/bemanishh/"
                      target="__blank"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/itzmanish" target="__blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/itzmanish"
                      target="__blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setDark(!dark)} className={toggleClass}></div>
    </Layout>
  )
}

export default IndexPage
