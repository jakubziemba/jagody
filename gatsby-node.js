const path = require("path")

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___templateKey] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `)
//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.templateKey,
//       component: path.resolve(
//         `src/page/${String(edges.node.frontmatter.templateKey)}.js`
//       ),
//       context: {
//         // additional data can be passed via context
//         templateKey: node.frontmatter.templateKey,
//       },
//     })
//   })
// }
