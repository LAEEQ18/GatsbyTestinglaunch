import React from "react"
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/layout"

const ComponentName = ({ data :{
    product:{
    price,
    title,
    image:{ fixed},
    info:{info},
},
 },
 }) => {
    return (
        <Layout>
            <div style= {{textAlign: "center"}}>
                <Link to ="/product"> Back to Page</Link>
                <h1> Single Product : {title} </h1>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed ={fixed} alt={title}/>
                      </article>
                    <article>
                        <h2> {title} </h2>
                        <h3> {price} </h3>
                        <p> {info} </p>
                        <button> Add to Cart </button>
                    </article>
              
                
            </section>
        </Layout>
    )
}

export const query = graphql`
query getSingleProduct($slug: String)
  {
    product: contentfulProduct(slug: {eq: $slug }) {
      title
      price
      image {
        fixed (width:300) {

          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
