import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="/projects">

      <p class="subtit">Publications</p>
      <ul>
        <li>Giacomo Camposampiero, Loïc Houmard, Benjamin Estermann, Joël Mathys, Roger Wattenhofer. 2023. <em>Abstract Visual Reasoning Enabled by Language.</em> In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) [<a href="https://openaccess.thecvf.com/content/CVPR2023W/NFVLR/html/Camposampiero_Abstract_Visual_Reasoning_Enabled_by_Language_CVPRW_2023_paper.html">pdf</a>]</li>
        <li>Giacomo Camposampiero, Quynh Anh Nguyen, and Francesco Di Stefano. 2022. <em>The curious case of Logistic Regression for Italian Dialect Identification.</em> In Proceedings of the Ninth Workshop on NLP for Similar Languages, Varieties and Dialects, International Committee on Computational Linguistics (ICCL) [<a href="https://aclanthology.org/2022.vardial-1.10.pdf">pdf</a>][<a href="https://github.com/giacomocamposampiero/italian-dialects-identification">github</a>]</li>
      </ul> 

      <p class="subtit">Projects</p>
      <ul>
        <li> nlpropaganda : a tool for automatic detection and classification of propaganda snippets in news articles leveraging LLMs [<a href="/nlpropaganda-paper.pdf">pdf</a>][<a href="https://github.com/giacomocamposampiero/nlpropaganda">github</a>]</li>
        <li> palindrome-transformer : explicit Transformer's encodings development for a regular language and a context free, non-regular language using soft attention [<a href="/aflt-report.pdf">pdf</a>][<a href="https://github.com/giacomocamposampiero/palindrome-transformer">github</a>]</li>
        <li> collaborative-filtering : a study on the effectiveness of blending similarity-based and factorization-based CF algorithms [<a href="https://arxiv.org/pdf/2209.13011.pdf">arxiv</a>][<a href="https://github.com/giacomocamposampiero/cil-lab">github</a>]</li>
        <li> regularization-pc : a study on the effects of standard machine learning regularization on predictive coding models [<a href="https://github.com/giacomocamposampiero/regularization-pc">github</a>]</li>
      </ul> 

      <p class="subtit">Others</p>
      <ul>
        <li> contrastive-learning : a seminar presentation on contrastive learning for NLP, presented at <a href="https://disco.ethz.ch/courses/fs22/seminar/">SiDNN</a>, ETH Zürich  [<a href="/pres.pdf">pdf</a>][<a href="https://github.com/giacomocamposampiero/seminar-contrastive-learning">article</a>]</li>
        <li> algolab : solutions for Algorithms Lab course at ETH Zürich (competitive programming topics) [<a href="https://github.com/giacomocamposampiero/algolab">github</a>]</li>
      </ul> 

    </Layout>
  )
}
export default AboutPage
