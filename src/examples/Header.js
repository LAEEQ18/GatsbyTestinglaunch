import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql `
query Firstqu{
      site {
        siteMetadata {
          title
          description
          author
          data
          person {
            age
            name
          }
        }
        buildTime
      }
    }

`

const Header = () => {
  const data = useStaticQuery(getData);
  console.log(data);
  return (
    <div>
      <h2> title : {data.site.siteMetadata.title} </h2>
      <h2> name : {data.site.siteMetadata.person.name} </h2>
    </div>
  )
}

export default Header



  


