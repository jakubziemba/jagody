import { graphql, useStaticQuery } from 'gatsby'

const useQueryGallery = () => {
  const data = useStaticQuery(
    graphql`
      query bgImageAndGallery {
        placeholderImage: file(relativePath: { eq: "haskap-galeria.jpeg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
          edges {
            node {
              childImageSharp {
                thumb: gatsbyImageData(
                  width: 600
                  height: 600
                  placeholder: BLURRED
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  )

  return data
}

export default useQueryGallery
