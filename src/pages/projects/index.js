import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
              <Link to={`/projects/${node.slug}`}> {node.frontmatter.title} </Link> : {node.frontmatter.outline}
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          outline
        }
        id
        slug
      }
    }
  }
`
export default ProjectPage