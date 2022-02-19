import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <center>
      <h3> &lt;{data.mdx.frontmatter.title}&gt;</h3>
      <p class="info">{data.mdx.frontmatter.date} | <a class="info" href={data.mdx.frontmatter.link}>{data.mdx.frontmatter.link}</a> | <a class="info" href={data.mdx.frontmatter.repo}>Github</a> | {data.mdx.frontmatter.lang}</p>
      </center>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <center>
      <h3> &lt;/{data.mdx.frontmatter.title}&gt;</h3>
      </center>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        outline
        link
        repo
        lang
      }
      body
    }
  }
`

export default BlogPost