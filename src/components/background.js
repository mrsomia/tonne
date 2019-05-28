import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const BackgroundSection = ({children: kids}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-bar.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
      <BackgroundImage  fluid={data.desktop.childImageSharp.fluid} 
                        backgroundColor={`#000000`}
                        fadeIn="true">
        {kids} 
        </BackgroundImage>
        )
    }}
  />
)
// StaticQuery trys to render children or render method - causing the children closure to fail - thus renaming to kids works
export default BackgroundSection
