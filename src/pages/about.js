import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="/about">
      <p>
        Hi there! My name is Giacomo and I'm a Computer Science master student at ETH Zürich, Switzerland. 
        My main interests include Natural Language Processing, Machine Learning and Deep Learning.
      </p>
      <p>
        Other than studying and coding, I really enjoy swimming and hiking!
      </p>

      <p>I don't post too much on social media, but you can find me on <a href="https://www.linkedin.com/in/giacomo-camposampiero-7b3038192/">Linkedin</a>, <a href="https://github.com/giacomocamposampiero">Github</a> or reach me via <a href="mailto:giacomo.camposampiero@hotmail.com">mail</a>.</p>
      <p>This site was made with ♥ by me with Gatsby.js and was inspired by <a href="https://prestonrichey.com">Preston Richey</a> website design. 
The monospace font is Roboto Mono and the sans-serif is Rubik.</p>
    </Layout>
  )
}
export default AboutPage
