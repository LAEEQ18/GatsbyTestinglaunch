import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
//import {Link} from "gatsby"
import styles from "../components/blog.module.css";

const blog = () => {
    return (
        <Layout>
            <div className= {styles.page}>
            <h1> This is our blog page</h1>
            <p className = {styles.text} > 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p >
            <Link to ="/"> Home Page </Link>
            </div>
        </Layout>
    )
}

export default blog
