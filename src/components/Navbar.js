import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to = "/"> Home </Link>
                </li>
                <li>
                    <Link to = "/blog/"> Blog Page </Link>
                </li>
                <li>
                    <Link to = "/product/"> Products </Link>
                </li>
                <li>
                    <Link to = "/examples/"> Examples </Link>
                </li>
                <li>
                    <Link to = "/images/"> Images </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
