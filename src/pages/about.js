import * as React from 'react'
import Layout from '../components/layout'
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"


const AboutPage = () => {
  return (
    <Layout pageTitle="/about">
      
      <p>
        I am a second-year Computer Science MSc student at ETH Zürich, Switzerland.
        Before that, I completed my undergraduate in Computer Engineering at Università degli Studi di Padova, Italy.
      </p>
      <p>
        My main interests lie in Natural Language Processing, Deep Learning, and AGI. 
        I am also very fascinated by Bayesian Optimization techniques and Reinforcement Learning, even if my confidence in these topics is more limited.
      </p>

      <p>You can find me on <a href="https://www.linkedin.com/in/giacomo-camposampiero-7b3038192/" > <FaLinkedinIn size="18"/></a>, <a href="https://github.com/giacomocamposampiero" > <FaGithub size="18"/></a> or reach me via <a href="mailto:giacomo.camposampiero@hotmail.com" ><FaEnvelope size="18"/></a>. You can find my current CV  <a href="/developer_cv.pdf">here</a>.</p>


      {/* <img src="/profile.jpeg" alt="Italian Trulli"></img> */}

      <p>The design of this website was inspired by <a href="https://prestonrichey.com"> Preston Richey </a> web design. This site was made with ♥ using Gatsby.js.</p>

    </Layout>
  )
}
export default AboutPage
