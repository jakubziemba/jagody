import { graphql, useStaticQuery } from 'gatsby'

const useQueryArticles = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allPrismicArtykul {
          edges {
            node {
              data {
                img {
                  url
                  alt
                }
                title
                link
                text
              }
            }
          }
        }
      }
    `
  )

  return data
}

export default useQueryArticles
