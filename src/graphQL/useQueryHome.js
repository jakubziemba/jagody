import { graphql, useStaticQuery } from 'gatsby'

const useQueryHome = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "index.jpeg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
          frontmatter {
            templateKey
            title
            subtitle
          }
        }
      }
    `
  )

  return data
}

export default useQueryHome
