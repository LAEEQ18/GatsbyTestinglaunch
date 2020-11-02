import React from 'react';
import Header from "../examples/Header";
import HeaderStatic from "../examples/HeaderStatic";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const examples = ({data}) => {
    
    const {
        site: {
            info: {author},
        },
    } = data


    return (
        <Layout>
            <p> Hello From Examples ! </p>

            <Header/>
            <HeaderStatic/>
        </Layout>
    )

}

export const data = graphql `
query MyQuery {
  site {
   info: siteMetadata {
      title
      description
      author
      data
      person {
        name
        age
      }
    }
    buildTime
  }
}

`
export default examples
