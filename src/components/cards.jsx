import React from "react";

const navLinks = [
    {
        link : "Home",
        path: "https://www.google.com/"
    },
    {
        link: "About Us",
        path: "https://www.google.com/"
    },
    {
        link : "Contact Us",
        path: "https://www.google.com/"
    },
    {
        link: "Pages",
        path: "https://www.google.com/"
    }
];
const Cards = () => {
    return(
    <>
      <nav className="Navbar">
        <ul className="list">
            {navLinks.map((items) => {
                return <li> <a href={items.path}>{items.link}</a> </li>
            })}
        </ul>
      </nav>
    </>
    )
}

export default Cards;