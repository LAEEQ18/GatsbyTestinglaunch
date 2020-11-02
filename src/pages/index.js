import React from "react";
import {Link} from "gatsby";
//import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";
import Layout from "../components/layout";
import {ExampleButton} from "../components/button";

export default () => (
  
    <Layout>

    <h1 style = {{color: "red" , textTransform:"capitalize"}}> Hello Beautifull ! </h1> <br/>

  {/* <a href = "/blog/"> Blog Page</a> */}
  {/* <Link to = "/blog/"> Blog Page </Link>
  <Link to="/page-2/"> <h2> Go to page 2 </h2></Link> <br /> */}
<ExampleButton> Click Me</ExampleButton>

    </Layout>
  
)
