import React, { useState, useEffect } from "react"
import Typed from "react-typed"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/Header"

const IndexPage = () => {

    const [dark, setDark] = useState(true)
    const [toggleClass, setToggleClass] = useState("darkmode fas fa-sun")

    useEffect(()=>{
        if(dark){
            document.body.classList.add("dark")
            setToggleClass("darkmode fas fa-sun")
        }
        else{
            document.body.classList=""
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
                                Hi! <span role="img" aria-label="hello">👋 </span>

                                I am <span className="highlight-text">Manish. </span>
                                <br />
                                Full Stack developer.
          </h1>
                            <p>
                                I am proficient in {}
                                <span className="highlight-text">
                                    <Typed
                                        strings={[
                                            "React",
                                            "Gatsby",
                                            "Django",
                                            "Flask",
                                            "GoLang",
                                            "Python",
                                            "C",
                                            "C++",
                                        ]}
                                        typeSpeed={60}
                                        backSpeed={50}
                                        loop
                                    />
                                    .
            </span>
                            </p>
                            <p style={{ marginTop: "20px" }}>
                                I also do system programming. Some of languages that i use are
            Python, Golang, C, C++. <br /> I do like reading books, listining
                                Music during work and travelling and learning new languages.
            <br />
                                My interest are also in Robotics, IoT projects, Embeded programming
                                and electronics engineering.
            <br />
                                Currently i am working on Machine learning using python.
          </p>

                            <p>
                                Shoot a mail to{" "}
                                <a href="mailto:manish@izmanish.online">
                                    <span className="highlight-text"> manish@izmanish.online </span>
                                </a>
                            </p>
                            <div className="bottom-nav">
                                <ul className="main-nav-list">
                                    <li>
                                        <a href="https://www.instagram.com/izmanish/" target="__blank">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/_itzmanish/" target="__blank">
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
           <div onClick={()=>setDark(!dark)} className={toggleClass}></div>

        </Layout>
    )
}

export default IndexPage
