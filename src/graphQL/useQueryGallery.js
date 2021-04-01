import { graphql, useStaticQuery } from 'gatsby'

const useQueryGallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "haskap-galeria.jpeg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return data
}

export default useQueryGallery
