 import React from 'react'
import logo from '../logo.svg'

function Netflix() {
    const details = [
        {
            heading: "Dark 1",
            para: "lorem first para",
            link: "https://www.google.com/"
        },
        {
            heading: "Dark 2",
            para: "lorem second para",
            link: "https://www.google.com/"
        },
        {
            heading: "Dark 3",
            para: "lorem third para",
            link: "https://www.google.com/"
        },
        {
            heading: "Dark 4",
            para: "lorem fourth para",
            link: "https://www.google.com/"
        }
    ];
    return (
        <>
            <div className='mainContainer'>
                {details.map((items) => {
                    return <div className='listNetflix'>
                        <div  className='imgContainer'>
                            <img src={logo} alt="img" />
                        </div>
                        <h2>{items.heading}</h2>
                        <p>{items.para}</p>
                        <a href={items.link}>Click Now</a>
                    </div>
                })}
            </div>
        </>
    )
}

export default Netflix;